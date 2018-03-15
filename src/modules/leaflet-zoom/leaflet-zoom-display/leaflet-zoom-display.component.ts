import { Component, AfterViewInit, ElementRef, EventEmitter, Input, Output, OnChanges, OnInit } from '@angular/core';

import { Icon, ImageOverlay, Polyline, PolylineOptions, Polygon, latLng, LatLngBounds, LatLngExpression, LayerGroup, Map, Marker,
  Point, Popup, CRS, Rectangle, TileLayer } from 'leaflet';

import { SourceSlideContent, Overlays, OverlayLine,
  OverlayPolygon, OverlayRectangle } from '../interfaces/source-slide-content';

@Component({
  selector: 'fze-leaflet-zoom-display',
  templateUrl: './leaflet-zoom-display.component.html',
  styleUrls: ['./leaflet-zoom-display.component.css']
})
export class LeafletZoomDisplayComponent implements AfterViewInit, OnInit {

  @Input()
  sourceSlideContent: SourceSlideContent;

  @Output()
  overlayClick: EventEmitter<any> = new EventEmitter();

  @Output()
  mapClick: EventEmitter<any> = new EventEmitter();

  map: Map;
  height: number;
  simpleCRS: CRS = CRS.Simple;
  sourceOverlay: ImageOverlay;
  sourceTileLayer: TileLayer;
  rectangleLayer: LayerGroup = new LayerGroup([]);
  lineLayer: LayerGroup = new LayerGroup([]);
  polygonLayer: LayerGroup = new LayerGroup([]);

  maxBounds: LatLngBounds;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    // TODO: Alternative to use of ElementRef to increase
    //      platform independency
    this.height = this.el.nativeElement.offsetHeight;

    this.map = new Map('zoom-source', {
      crs: this.simpleCRS,
      center: latLng(0,0),
      zoom: 0,
      maxBoundsViscosity: 0.7
    });
    this.map.addLayer(this.lineLayer);
    this.map.addLayer(this.polygonLayer);
    this.map.addLayer(this.rectangleLayer);
    // TODO: Debugging no external usage
    this.map.on('click', (evt: any) => {
      this.mapClick.emit({
        latLng: evt.latLng,
        zoom: this.map.getZoom()
      });
    });
  }

  public ngOnChanges(changes: any) {
    if (changes.sourceSlideContent) {
      // Don't bootstrap on first change (view might not be ready,
      // We will bootstrap in ngAfterViewInit)
      if (!changes.sourceSlideContent.firstChange) {
        this._bootstrapSettings()
      }
    }
  }

  ngAfterViewInit() {
    // bootstrap the input
    if (this.sourceSlideContent) {
      this._bootstrapSettings()
    }
  }

  public onWindowResize(event: any) {
    this.height = this.el.nativeElement.offsetHeight;
  }

  // Public method to reset the zoom to the bounds
  public fitBounds() {
    this.map.fitBounds(this.maxBounds);
  }

  private _bootstrapSettings() {
    let imageDim = this.sourceSlideContent.imageDim;
    let sourceImage = this.sourceSlideContent.sourceImage;
    let sourceTile = this.sourceSlideContent.sourceTile;
    let maxZoom = this.sourceSlideContent.maxZoom;
    let southWest = this.map.unproject(new Point(0, imageDim[1]), maxZoom);
    let northEast = this.map.unproject(new Point(imageDim[0], 0), maxZoom);
    let maxBounds = new LatLngBounds(southWest, northEast);
    this.maxBounds = maxBounds;
    this.map.setMaxBounds(maxBounds);
    this.map.fitBounds(maxBounds);
    this.map.setMaxZoom(maxZoom);
    if (this.sourceOverlay) {
      this.map.removeLayer(this.sourceOverlay);
    }
    if (this.sourceTileLayer) {
      this.map.removeLayer(this.sourceTileLayer);
    }
    // Check first for imageUrl, afterwards for tileUrl
    if (sourceImage) {
      this.sourceOverlay = new ImageOverlay(
        sourceImage.imageUrl,
        maxBounds,
        sourceImage.overlayOptions
      );
      this.map.addLayer(this.sourceOverlay);
    } else {
      if (sourceTile) {
        this.sourceTileLayer = new TileLayer(
          sourceTile.tileUrl,
          sourceTile.tileOptions
        );
        this.map.addLayer(this.sourceTileLayer);
      } else {
        console.error("WARNING: either imageUrl or tileUrl must be set for background imagery");
      }
    }

    this._clearOverlays();
    if (this.sourceSlideContent.overlays) {
      this._bootstrapOverlays(
        this.sourceSlideContent.overlays,
        maxZoom
      );
    }
  }

  private _clearOverlays() {
    this.rectangleLayer.clearLayers();
    this.lineLayer.clearLayers();
    this.polygonLayer.clearLayers();
  }

  private _bootstrapOverlays(overlays: Overlays, maxZoom: number) {
    if (overlays.lines) {
      this._bootstrapLines(overlays.lines, maxZoom);
    }
    if (overlays.polygons) {
      this._bootstrapPolygons(overlays.polygons, maxZoom);
    }

    if (overlays.rectangles) {
      this._bootstrapRectangles(overlays.rectangles, maxZoom);
    }
  }

  private _bootstrapPolygons(polygons: OverlayPolygon[], maxZoom: number) {
    let currPoly: Polygon;
    let projectedCoords: LatLngExpression[];
    let styleOptions: PolylineOptions;

    polygons.forEach((polygon) => {
      projectedCoords = this._projectCoordsArray(polygon.coords, maxZoom);
      styleOptions = polygon.style || {};
      // currPoly = new Polygon(projectedCoords, styleOptions);
      currPoly = new Polygon(projectedCoords, styleOptions);
      currPoly.on('click', (evt) => {
        this.overlayClick.emit({
          'type': 'polygon',
          'data': polygon.data
        })
      });
      this.polygonLayer.addLayer(currPoly);
    })
  }

  private _bootstrapLines(lines: OverlayLine[], maxZoom: number) {
    let currLine: Polyline;
    let projectedCoords: LatLngExpression[];
    let styleOptions: PolylineOptions;
    lines.forEach((line) => {
      projectedCoords = this._projectCoordsArray(line.coords, maxZoom);
      styleOptions = line.style || {};
      currLine = new Polyline(projectedCoords, styleOptions);
      currLine.on('click', (evt) => {
        this.overlayClick.emit({
          'type': 'line',
          'data': line.data
        })
      });
      this.lineLayer.addLayer(currLine);
    });
  }

  private _projectCoordsArray(coords: [number, number][], maxZoom: number) :LatLngExpression[] {
    let projectedCoords = [];
    coords.forEach((coord) => {
      projectedCoords.push(
        this.map.unproject(
          new Point(coord[0], coord[1]),
          maxZoom
        ));
    });
    return projectedCoords;

  }

  private _bootstrapRectangles(rectangles: OverlayRectangle[], maxZoom: number) {
    let currRect: Rectangle;
    let styleOptions: PolylineOptions;
    rectangles.forEach((rectangle) => {
      styleOptions = rectangle.style || {};
      currRect = new Rectangle(
        new LatLngBounds(
          this.map.unproject(
            new Point(
              rectangle.bottomLeft[0],
              rectangle.bottomLeft[1]
            ), maxZoom),
          this.map.unproject(
            new Point(
              rectangle.topRight[0],
              rectangle.topRight[1]
            ), maxZoom)
        ),
        styleOptions
      );
      currRect.on('click', (evt) => {
        this.overlayClick.emit({
          'type': 'rectangle',
          'data': rectangle.data
        });
      });
      this.rectangleLayer.addLayer(currRect);
      if (rectangle.tags) {
        rectangle.tags.forEach((category, catIdx) => {
          let marker = new Marker(
            this.map.unproject(
              new Point(
                rectangle.bottomLeft[0],
                rectangle.topRight[1]
              ), maxZoom),
              {
                icon: new Icon({
                  iconUrl: category,
                  iconSize: [32,32],
                  iconAnchor: [-(16 + (32 * catIdx)), 16]
                })
              }
            );
          marker.on('click', (evt) => {
            this.overlayClick.emit({
              'type': 'rectangle-tag',
              'data': rectangle.data
            });
          });
          this.rectangleLayer.addLayer(marker);
        });
      }
    });
  }
}

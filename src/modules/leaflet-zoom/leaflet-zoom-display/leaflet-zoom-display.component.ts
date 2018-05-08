import { Component, AfterViewInit, ElementRef, EventEmitter, Input, Output, OnChanges, OnInit } from '@angular/core';

import { Icon, ImageOverlay, Polyline, PolylineOptions, Polygon, latLng, LatLngBounds, LatLngExpression, LayerGroup, Map, Marker, MarkerOptions,
  Point, Popup, CRS, Rectangle, TileLayer } from 'leaflet';

import { SourceSlideContent, Overlays, OverlayLine, OverlayMarker,
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
  popup: Popup;
  height: number;
  simpleCRS: CRS = CRS.Simple;
  sourceOverlay: ImageOverlay;
  sourceTileLayer: TileLayer;
  markerLayer: LayerGroup = new LayerGroup([]);
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
      zoom: this.sourceSlideContent.zoom,
      minZoom: this.sourceSlideContent.minZoom,
      maxBoundsViscosity: 0.7,
      attributionControl: false
    });
    this.popup = new Popup();
    // TODO: set rendering order for plugin
    this.map.addLayer(this.markerLayer);
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
    this.onWindowResize(undefined); 
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
    console.log("Calling resize");
    console.log(this.el.nativeElement.offsetTop);
    this.height = window.innerHeight - this.el.nativeElement.offsetTop;
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
    let minZoom = this.sourceSlideContent.minZoom;
    let currZoom = this.sourceSlideContent.zoom;
    let southWest = this.map.unproject(new Point(0, imageDim[1]), maxZoom);
    let northEast = this.map.unproject(new Point(imageDim[0], 0), maxZoom);
    let maxBounds = new LatLngBounds(southWest, northEast);
    this.maxBounds = maxBounds;
    this.map.setMaxBounds(maxBounds);
    this.map.fitBounds(maxBounds);
    this.map.setMaxZoom(maxZoom);
    this.map.setMinZoom(minZoom);
    this.map.setZoom(currZoom);
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
    this.markerLayer.clearLayers();
    this.rectangleLayer.clearLayers();
    this.lineLayer.clearLayers();
    this.polygonLayer.clearLayers();
  }

  private _bootstrapOverlays(overlays: Overlays, maxZoom: number) {
    if (overlays.markers) {
      this._bootstrapMarkers(overlays.markers, maxZoom);
    }
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

  private _bootstrapMarkers(markers: OverlayMarker[], maxZoom: number) {
    let currMarker: Marker;
    let projectedCoords: LatLngExpression;
    markers.forEach((marker: OverlayMarker) => {
      let projectedCoords = this.map.unproject(
        new Point(marker.coords[0], marker.coords[1]),
        maxZoom
      );
      // TODO: add icon options
      let markerOptions: MarkerOptions = undefined;
      if (marker.icon) {
        markerOptions = {
          icon: new Icon(marker.icon)
        };
      }
      currMarker = new Marker(projectedCoords, markerOptions);
      currMarker.on('click', (evt: any) => {
        if (marker.popup === undefined) {
          this.overlayClick.emit({
            'type': 'marker',
            'data': marker.data
          })
        } else {
          currMarker.openPopup();
        }
      });
      this.markerLayer.addLayer(currMarker);
      if (marker.popup) {
        currMarker.bindPopup(this._getPopupContent(marker));
      }
      if (marker.text) {
        currMarker.bindTooltip(marker.text.content, marker.text.tooltip);
      }
    });

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
      currPoly.on('click', (evt: any) => {
        if (polygon.popup === undefined) {
          this.overlayClick.emit({
            'type': 'polygon',
            'data': polygon.data
          });
        } else {
          currPoly.openPopup();
        }
      });
      this.polygonLayer.addLayer(currPoly);
      if (polygon.popup) {
        currPoly.bindPopup(this._getPopupContent(polygon));
      }
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
      currLine.on('click', (evt: any) => {
        if (line.popup === undefined) {
          this.overlayClick.emit({
            'type': 'line',
            'data': line.data
          });
        } else {
          currLine.openPopup();
        }
      });
      this.lineLayer.addLayer(currLine);
      if (line.popup) {
        currLine.bindPopup(this._getPopupContent(line));
      }
      if (line.text) {
        currLine.bindTooltip(line.text.content, line.text.tooltip);
      }
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

      currRect.on('click', (evt: any) => {
        if (rectangle.popup === undefined) {
          this.overlayClick.emit({
            'type': 'rectangle',
            'data': rectangle.data
          });
        } else {
          currRect.openPopup(evt.latlng);
        }
      });
      this.rectangleLayer.addLayer(currRect);
      // NOTE: bind popup after adding to layer group, because otherwise
      // rectangle gets overwritten (last content will be displayed on all)
      if (rectangle.popup) {
        currRect.bindPopup(this._getPopupContent(rectangle));
      }
      if (rectangle.text) {
        currRect.bindTooltip(rectangle.text.content, rectangle.text.tooltip);
      }
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

  private _getPopupContent(overlay: any) {
    return overlay.popup.contentFunc(overlay.data);
  }
}


import { ImageOverlayOptions, PathOptions, PolylineOptions, TileLayerOptions } from 'leaflet';

export interface SourceSlideContent {
  zoom: number;
  maxZoom: number;
  minZoom: number;
  imageDim: [number, number];
  sourceImage?: SourceImage;
  sourceTile?: SourceTile;
  overlays: Overlays;
}

export interface SourceImage {
  imageUrl: string;
  overlayOptions?: ImageOverlayOptions
}

export interface SourceTile {
  tileUrl: string;
  tileOptions?: TileLayerOptions
}


export interface Overlays {
  rectangles?: OverlayRectangle[];
  lines?: OverlayLine[];
  polygons?: OverlayPolygon[];
}

export interface OverlayRectangle {
  bottomLeft: [number, number];
  topRight: [number, number];
  tags: string[];
  data: any;
  style?: PathOptions;
}

export interface OverlayLine {
  coords: [number,number][];
  data: any;
  style?: PolylineOptions;
}

export interface OverlayPolygon {
  coords: [number, number][];
  data: any;
  style?: PathOptions;
}

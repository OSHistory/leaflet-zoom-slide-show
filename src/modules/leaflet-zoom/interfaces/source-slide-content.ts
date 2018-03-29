
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

export interface OverlayPopup {
  display: boolean;
  contentFunc: Function;
}

export interface OverlayText {
  content: string;
  position?: string; // TBD: center left etc
  className?: string;
}
export interface OverlayRectangle {
  bottomLeft: [number, number];
  topRight: [number, number];
  tags: string[];
  data: any;
  popup?: OverlayPopup;
  text?: OverlayText;
  style?: PathOptions;
}

export interface OverlayLine {
  coords: [number,number][];
  data: any;
  popup?: OverlayPopup;
  text?: OverlayText; 
  style?: PolylineOptions;
}

export interface OverlayPolygon {
  coords: [number, number][];
  data: any;
  popup?: OverlayPopup;
  style?: PathOptions;
}

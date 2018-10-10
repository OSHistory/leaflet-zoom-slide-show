
import { ImageOverlayOptions, IconOptions,  PathOptions, PolylineOptions,
  TileLayerOptions, TooltipOptions } from 'leaflet';

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
  overlayOptions?: ImageOverlayOptions;
}

export interface SourceTile {
  tileUrl: string;
  tileOptions?: TileLayerOptions;
}


export interface Overlays {
  markers?: OverlayMarker[];
  rectangles?: OverlayRectangle[];
  lines?: OverlayLine[];
  polygons?: OverlayPolygon[];
}

export interface OverlayPopup {
  display: boolean;
  contentFunc: Function;
}

// TBD: use leaflet options
export interface OverlayText {
  content: string;
  tooltip: TooltipOptions;
}

export interface OverlayMarker {
  coords: [number, number];
  data?: any;
  icon?: IconOptions;
  popup?: OverlayPopup;
  text?: OverlayText;
}

export interface OverlayRectangle {
  bottomLeft: [number, number];
  topRight: [number, number];
  tags?: string[];
  data?: any;
  popup?: OverlayPopup;
  text?: OverlayText;
  style?: PathOptions;
}

export interface OverlayLine {
  coords: [number, number][];
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

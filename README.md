# LeafletZoomSlideShow

## About

LeafletZoomSlideShow is an angular2+ library to view high resolution images.
It uses the mapping library [leaflet](http://leafletjs.com/) to display the
images as overlays or tiled images and provides the capabilities to draw
geo features on top of it. The last part is the main strength in comparison
to other solutions such as the excellent
[openseadragon](https://github.com/openseadragon/openseadragon) which uses
[ratio values](http://openseadragon.github.io/examples/ui-overlays/) for the positioning of overlays, whereas this library
uses pixel values from the original source, allowing for easier positioning
of overlays.



## Usage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build Library

Run the node task `npm run packagr` to build the library. Use `npm pack` from
inside the dist folder to build a npm package for local installing or uploading
to npm.

## Changelog

### 1.0.0 

	- Migration to new Angular6 Library structure

### 0.0.12

  - Visibility with @angular/flex-layout.beta-14

### 0.0.11

  - Export leaflet-zoom-component

### 0.0.10

  - Implement minZoom, maxZoom and inital Zoom

### 0.0.9

  - Add fontSet options for alternatives to material icons

### 0.0.8

  - Add markers layer
  - Add text options (uses tooltip)

### 0.0.7

  - Bugfix for overwriting of popups

### 0.0.6

  - Bugfix for popups

### 0.0.5

  - Enable tooltips directly from map
  - Add help icon in display container
  - moved cycle buttons to toolbar

### 0.0.4

  - Pushed repository to github
  - Enable overlayClick event for linestrings and polygons
  - propagate map-click through event-emitter

### 0.0.3

  - Bug fix for AOT-compilation

### 0.0.2

  - Load sources with tile-mapping scheme  

### 0.0.1

Initial npm version featuring basic functionality such as:

  - Load sources as ImageOverlays
  - draw different (Rectangle, lines and polygon overlays) features on top off them
  - Step over all defined sources in the UI


## Roadmap

  - improve tags rendering in icons (icons may hide content on high
    resolutions)
  - build an editor tool to facilitate the generation of overlays

## Licenses

The example image `rosetta_stone.jpg` of the Rosetta Stone was downloaded from [wikimedia-commons](https://commons.wikimedia.org/wiki/File:Rosetta_Stone_%286488613003%29.jpg)
and is licensed under CC 2.0.

The example image `usa_independence.jpg` of the declaration of independence was downloaded from [wikimedia-commons](https://commons.wikimedia.org/wiki/File:United_States_Declaration_of_Independence.jpg)
and is in the public domain.

The example-svg-icons are taken from font-awesome via the
[font-awesome-svg-png Project](https://github.com/encharm/Font-Awesome-SVG-PNG).

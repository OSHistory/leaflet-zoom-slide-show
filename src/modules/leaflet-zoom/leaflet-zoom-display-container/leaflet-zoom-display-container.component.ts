import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { LeafletZoomDisplayComponent } from '../leaflet-zoom-display/leaflet-zoom-display.component';

import { SourceSlideContent } from '../interfaces/source-slide-content';

@Component({
  selector: 'fze-leaflet-zoom-display-container',
  templateUrl: './leaflet-zoom-display-container.component.html',
  styleUrls: ['./leaflet-zoom-display-container.component.css']
})
export class LeafletZoomDisplayContainerComponent implements OnInit {

  @Input()
  sourceSlides: SourceSlideContent[];

  @Input()
  cycle: boolean;

  @Input()
  showCount: boolean;

  @Output()
  overlayClick: EventEmitter<any> = new EventEmitter();

  @ViewChild('zoomDisplay')
  zoomDisplay: LeafletZoomDisplayComponent;

  idx: number = 0;

  constructor() { }

  ngOnInit() {
  }

  fitBounds() {
    console.log("FITTING BOUNDS");
    this.zoomDisplay.fitBounds();
  }

  nextSource() :boolean {
    if (this.idx >= (this.sourceSlides.length-1)) {
      if (this.cycle) {
        this.idx = 0;
      } else {
        return false;
      }
    } else {
      this.idx += 1;
    }
    return true;
  }

  prevSource():boolean {
    if (this.idx === 0) {
      if (this.cycle) {
        this.idx = this.sourceSlides.length - 1;
      } else {
        return false;
      }
    } else {
      this.idx -= 1;
    }
  }

  // Simply bubble up the event
  onOverlayClick(event: any) {
    this.overlayClick.emit(event);
  }
  
}

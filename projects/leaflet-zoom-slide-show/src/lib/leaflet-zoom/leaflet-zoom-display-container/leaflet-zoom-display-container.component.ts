import { Component, EventEmitter, Input, OnInit, Output,
  ViewChild } from '@angular/core';

import { LeafletZoomDisplayComponent } from '../leaflet-zoom-display/leaflet-zoom-display.component';


import { SourceSlideContent } from '../interfaces/source-slide-content';

@Component({
  // tslint:disable-next-line:component-selector
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

  @Input()
  fontSet: string;

  @Output()
  overlayClick: EventEmitter<any> = new EventEmitter();

  @Output()
  helpRequested: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('zoomDisplay')
  zoomDisplay: LeafletZoomDisplayComponent;

  idx = 0;
  height: number;
  constructor(
  ) {
  }

  ngOnInit() {
    // if (this.fontSet === undefined) {
    //   this.fontSet = 'material';
    // }
  }

  fitBounds() {
    this.zoomDisplay.fitBounds();
  }

  nextSource(): boolean {
    if (this.idx >= (this.sourceSlides.length - 1)) {
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

  prevSource(): boolean {
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

  triggerHelp() {
    this.helpRequested.emit(true);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { LeafletZoomDisplayComponent } from './leaflet-zoom-display/leaflet-zoom-display.component';
import { LeafletZoomDisplayContainerComponent } from './leaflet-zoom-display-container/leaflet-zoom-display-container.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    LeafletZoomDisplayComponent,
    LeafletZoomDisplayContainerComponent
  ],
  declarations: [
    LeafletZoomDisplayComponent,
    LeafletZoomDisplayContainerComponent
  ]
})
export class LeafletZoomModule { }

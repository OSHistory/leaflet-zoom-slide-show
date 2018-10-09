import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';

import { LeafletZoomSlideShowModule } from 'leaflet-zoom-slide-show';

import { FeatureDataDisplayDialogComponent } from './dialogs/feature-data-display-dialog/feature-data-display-dialog.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    FeatureDataDisplayDialogComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    LeafletZoomSlideShowModule
  ],
  entryComponents: [
    FeatureDataDisplayDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

}

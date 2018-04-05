import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatIconRegistry, MatDialogModule } from '@angular/material';

import { LeafletZoomSlideShowModule } from '../modules/leaflet-zoom-slide-show.module';

import { AppComponent } from './app.component';
import { FeatureDataDisplayDialogComponent } from './dialogs/feature-data-display-dialog/feature-data-display-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    FeatureDataDisplayDialogComponent
  ],
  entryComponents: [
    FeatureDataDisplayDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    LeafletZoomSlideShowModule
  ],
  providers: [
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}

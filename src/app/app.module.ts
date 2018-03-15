import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LeafletZoomSlideShowModule } from '../modules/leaflet-zoom-slide-show.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    LeafletZoomSlideShowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { MatDialogModule } from '@angular/material/dialog';

import { LeafletZoomSlideShowModule } from 'leaflet-zoom-slide-show';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MatDialogModule,
        LeafletZoomSlideShowModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a leaflet-container', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getElementsByClassName('leaflet-container').length).toBe(1);
  }));
});

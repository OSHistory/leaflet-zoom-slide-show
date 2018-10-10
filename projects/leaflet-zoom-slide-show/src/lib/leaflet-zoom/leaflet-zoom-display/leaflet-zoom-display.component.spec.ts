import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletZoomDisplayComponent } from './leaflet-zoom-display.component';

import { images } from '../../../../../../src/app/consts/images';
import { DEFAULT_FILL_COLOR } from 'src/app/consts/default-styles';

describe('LeafletZoomDisplayComponent', () => {
  let component: LeafletZoomDisplayComponent;
  let fixture: ComponentFixture<LeafletZoomDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletZoomDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletZoomDisplayComponent);
    component = fixture.componentInstance;
    component.sourceSlideContent = <any>images[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a leaflet container', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.getElementsByClassName('leaflet-container').length).toBe(1);
  });

  it('should have as many paths as overlays without markers', () => {
    const el: HTMLElement = fixture.nativeElement;
    let overlayCount = 0;
    for (const overlayType in images[0]['overlays']) {
      if (overlayType !== 'markers') {
        overlayCount += images[0]['overlays'][overlayType].length;
      }
    }
    expect(el.getElementsByTagName('path').length).toBe(overlayCount);
  });

  // Rectangles are rendered last, so last path should have default fill
  it('last rectangle should have default fill color', () => {
    const el: HTMLElement = fixture.nativeElement;
    const paths = el.getElementsByTagName('path');
    const lastRect = paths[paths.length - 1];
    expect(lastRect.getAttribute('fill')).toBe(DEFAULT_FILL_COLOR);
  });

  // getElementsByClassName('leaflet-image-layer').length
  it('should have one image layer class', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.getElementsByClassName('leaflet-image-layer').length).toBe(1);
  });

});


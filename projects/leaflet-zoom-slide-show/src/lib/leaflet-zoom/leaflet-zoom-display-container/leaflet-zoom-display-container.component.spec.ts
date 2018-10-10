import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LeafletZoomDisplayComponent } from '../leaflet-zoom-display/leaflet-zoom-display.component';

import { LeafletZoomDisplayContainerComponent } from './leaflet-zoom-display-container.component';

import { images } from '../../../../../../src/app/consts/images';

describe('LeafletZoomDisplayContainerComponent', () => {
  let component: LeafletZoomDisplayContainerComponent;
  let fixture: ComponentFixture<LeafletZoomDisplayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeafletZoomDisplayComponent,
        LeafletZoomDisplayContainerComponent
      ],
      imports: [
        MatIconModule,
        MatToolbarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletZoomDisplayContainerComponent);
    component = fixture.componentInstance;
    component.sourceSlides = <any>images;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a leaflet container', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.getElementsByClassName('leaflet-container').length).toBe(1);
  });

});

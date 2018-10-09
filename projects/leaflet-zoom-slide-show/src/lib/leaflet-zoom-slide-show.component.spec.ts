import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletZoomSlideShowComponent } from './leaflet-zoom-slide-show.component';

describe('LeafletZoomSlideShowComponent', () => {
  let component: LeafletZoomSlideShowComponent;
  let fixture: ComponentFixture<LeafletZoomSlideShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletZoomSlideShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletZoomSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

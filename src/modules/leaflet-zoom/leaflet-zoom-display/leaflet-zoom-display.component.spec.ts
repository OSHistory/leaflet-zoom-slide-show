import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletZoomDisplayComponent } from './leaflet-zoom-display.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletZoomDisplayContainerComponent } from './leaflet-zoom-display-container.component';

describe('LeafletZoomDisplayContainerComponent', () => {
  let component: LeafletZoomDisplayContainerComponent;
  let fixture: ComponentFixture<LeafletZoomDisplayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletZoomDisplayContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletZoomDisplayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

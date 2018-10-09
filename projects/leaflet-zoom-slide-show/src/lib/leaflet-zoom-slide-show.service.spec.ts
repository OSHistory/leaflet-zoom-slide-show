import { TestBed } from '@angular/core/testing';

import { LeafletZoomSlideShowService } from './leaflet-zoom-slide-show.service';

describe('LeafletZoomSlideShowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeafletZoomSlideShowService = TestBed.get(LeafletZoomSlideShowService);
    expect(service).toBeTruthy();
  });
});

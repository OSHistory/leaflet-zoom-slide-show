import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDataDisplayDialogComponent } from './feature-data-display-dialog.component';

describe('FeatureDataDisplayDialogComponent', () => {
  let component: FeatureDataDisplayDialogComponent;
  let fixture: ComponentFixture<FeatureDataDisplayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDataDisplayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDataDisplayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

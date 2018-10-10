import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FeatureDataDisplayDialogComponent } from './dialogs/feature-data-display-dialog/feature-data-display-dialog.component';

import { images } from './consts/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images: any[] = images;
  idx = 0;

  // DEBUGGING
  // Test if working as expected when initially not loaded
  showContent = true;

  constructor(
    public dialog: MatDialog
  ) {
    setTimeout(() => {
      this.showContent = true;
    }, 3000);
  }
  onOverlayClick(event: any) {
    this.dialog.open(FeatureDataDisplayDialogComponent, {
      width: '350px',
      data: event.data
    });
  }

  onHelpRequested() {
    console.log('HELP REQUESTED');
  }
}

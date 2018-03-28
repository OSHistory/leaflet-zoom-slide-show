import { Component } from '@angular/core';

import { MatDialog } from '@angular/material';

import { FeatureDataDisplayDialogComponent } from './dialogs/feature-data-display-dialog/feature-data-display-dialog.component';

import { images } from './consts/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  images: any[] = images;
  idx: number = 0;

  constructor(
    public dialog: MatDialog
  ) {

  }
  onOverlayClick(event: any) {
    console.log(event.data);
    let dialogRef = this.dialog.open(FeatureDataDisplayDialogComponent, {
      width: '350px',
      data: event.data
    });
  }

  onHelpRequested() {
    console.log("HELP REQUESTED"); 
  }
}

import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-feature-data-display-dialog',
  templateUrl: './feature-data-display-dialog.component.html',
  styleUrls: ['./feature-data-display-dialog.component.css']
})
export class FeatureDataDisplayDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FeatureDataDisplayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}

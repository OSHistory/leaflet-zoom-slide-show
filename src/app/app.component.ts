import { Component } from '@angular/core';

import { images } from './consts/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: any[] = images;
  idx: number = 0;

  onOverlayClick(event: any) {
    console.log(event.data);
  }
}

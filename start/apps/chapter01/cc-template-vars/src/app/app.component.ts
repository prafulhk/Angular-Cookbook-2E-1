import { Component } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  addNewPicture(gallary:GalleryComponent) {
    console.log('added new picture:',gallary);
    gallary.pictures.unshift(gallary.generateImage())
  }

  removeFirstPicture(gallary:GalleryComponent) {
    console.log('removed first picture:',gallary);
    gallary.pictures.shift()
  }
}

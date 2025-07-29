import { Component } from '@angular/core';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-photos-page',
  standalone: false,
  template: `
    <main>
      <app-photos-index [photos]="photos" (show)="handleShow($event)"></app-photos-index>
      <app-modal [show]="isPhotosShowVisible" (close)="isPhotosShowVisible = false">
        <app-photos-show [photo]="currentPhoto"></app-photos-show>
      </app-modal>
    </main>
  `,
  styles: ``
})
export class PhotosPage {
  photos: Photo[] = [
    {id: 1, name: "First", url: "https://via.placeholder.com/150", width: 150, height: 150},
    {id: 2, name: "Second", url: "https://via.placeholder.com/300", width: 300, height: 300},
  ];

  isPhotosShowVisible: boolean = false;
  currentPhoto: Photo = {} as Photo;

  handleShow(photo: Photo) {
    console.log("handleShow", photo);
    this.isPhotosShowVisible = true;
    this.currentPhoto = photo;
  }
}
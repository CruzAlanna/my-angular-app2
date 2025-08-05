import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photo';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photos-page',
  standalone: false,
  template: `
    <main>
      <app-photos-new (create)="handleCreate($event)"></app-photos-new>
      <app-photos-index [photos]="photos" (show)="handleShow($event)"></app-photos-index>
      <app-modal [show]="isPhotosShowVisible" (close)="isPhotosShowVisible = false">
        <app-photos-show [photo]="currentPhoto"></app-photos-show>
      </app-modal>
    </main>
  `,
  styles: ``
})

export class PhotosPage implements OnInit {
  photos: Photo[] = [];
  isPhotosShowVisible: boolean = false;
  currentPhoto: Photo = {} as Photo;

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.handleIndex();
  }

  handleIndex() {
    console.log("handleIndex");
    this.photosService.getPhotos().subscribe((response) => {
      console.log(response);
      this.photos = response;
    });
  }

  handleCreate(params: any) {
    console.log("handleCreate", params);
    this.photosService.createPhoto(params).subscribe((response) => {
      this.photos.push(response);
    });
  }

  handleShow(photo: Photo) {
    console.log("handleShow", photo);
    this.isPhotosShowVisible = true;
    this.currentPhoto = photo;
  }
}
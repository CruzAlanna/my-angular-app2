import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from './models/photo';

@Component({
  selector: 'app-photos-index',
  standalone: false,
  template: `
    <div>
      <h1>All photos ({{photos.length}} total)</h1>
      <div *ngFor="let photo of photos">
        <h2>{{photo.name}}</h2>
        <img [src]="photo.url" />
        <p>Width: {{photo.width}}</p>
        <p>Height: {{photo.height}}</p>
        <button (click)="show.emit(photo)">More info</button>
      </div>
    </div>
  `
})
export class PhotosIndexComponent { 
  @Input() photos: Photo[] = [];
  @Output() show = new EventEmitter<Photo>();
}
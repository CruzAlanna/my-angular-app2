import { Component, Input } from '@angular/core';
import { Photo } from './models/photo';

@Component({
  selector: 'app-photos-show',
  standalone: false,
  template: `
    <div>
      <h1>Photo information</h1>
      <p>Name: {{photo.name}}</p>
      <p>Url: {{photo.url}}</p>
      <p>Width: {{photo.width}}</p>
      <p>Height: {{photo.height}}</p>
    </div>
  `
})
export class PhotosShowComponent {
  @Input() photo: Photo = {} as Photo;
}
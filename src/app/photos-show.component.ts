import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
      <form (ngSubmit)="handleSubmit($event)">
        <div>
          Name: <input [(ngModel)]="editPhotoParams.name" name="name" type="text" />
        </div>
        <div>
          Url: <input [(ngModel)]="editPhotoParams.url" name="url" type="text" />
        </div>
        <div>
          Width: <input [(ngModel)]="editPhotoParams.width" name="width" type="text" />
        </div>
        <div>
          Height: <input [(ngModel)]="editPhotoParams.height" name="height" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  `
})
export class PhotosShowComponent implements OnChanges {
  @Input() photo: Photo = {} as Photo;
  @Output() update = new EventEmitter();
  editPhotoParams: Photo = {} as Photo;

  ngOnChanges() {
    this.editPhotoParams = { ...this.photo };
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.update.emit({ photo: this.photo, params: this.editPhotoParams });
  }
}
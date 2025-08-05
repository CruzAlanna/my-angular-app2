import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photos-new',
  standalone: false,
  template: `
    <div>
      <h1>New Photo</h1>
      <form (ngSubmit)="handleSubmit($event)">
        <div>
          Name: <input name="name" type="text" [(ngModel)]="newPhotoParams.name" />
        </div>
        <div>
          Url: <input name="url" type="text" [(ngModel)]="newPhotoParams.url" />
        </div>
        <div>
          Width: <input name="width" type="text" [(ngModel)]="newPhotoParams.width" />
        </div>
        <div>
          Height: <input name="height" type="text" [(ngModel)]="newPhotoParams.height" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  `
})
export class PhotosNewComponent { 
  @Output() create = new EventEmitter();
  newPhotoParams: any = {};

  handleSubmit(event: Event) {
    event.preventDefault();
    this.create.emit(this.newPhotoParams);
    this.newPhotoParams = {};
  }
}
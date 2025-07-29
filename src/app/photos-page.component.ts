  import { Component } from '@angular/core';

  @Component({
    selector: 'app-photos-page',
    standalone: false,
    template: `
      <main>
        <app-photos-index></app-photos-index>
      </main>
    `
  })
  export class PhotosPageComponent { }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,  // Important: Add this for NgModule compatibility
  template: `
    <div>
      <app-header></app-header>
      <app-photos-page></app-photos-page>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent { }
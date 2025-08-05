import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Header } from './header/header';
import { PhotosPage } from './photos-page/photos-page';
import { Footer } from './footer/footer';
import { PhotosIndexComponent } from './photos-index.component';
import { ModalComponent } from './modal.component';
import { PhotosShowComponent } from './photos-show.component';
import { PhotosNewComponent } from './photos-new.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    PhotosPage,
    Footer,
    PhotosIndexComponent,
    ModalComponent,
    PhotosShowComponent,
    PhotosNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
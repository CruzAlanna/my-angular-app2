import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private baseUrl = 'http://localhost:3000/photos.json';
  // 💡 For production: move this to environment.ts (e.g., environment.apiUrl)
  // 📂 Import paths: Use ./models/photo from same directory, ../models/photo from subdirectories

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.baseUrl);
  }

  createPhoto(params: any): Observable<Photo> {
    return this.http.post<Photo>(this.baseUrl, params);
  }

  updatePhoto(id: number, params: any): Observable<Photo> {
    return this.http.patch<Photo>(`http://localhost:3000/photos/${id}.json`, params);
  }

  deletePhoto(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/photos/${id}.json`);
  }
}
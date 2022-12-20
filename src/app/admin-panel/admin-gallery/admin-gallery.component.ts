import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})
export class AdminGalleryComponent implements OnInit {
    public progress: number;
    public message: string;
    baseUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }
    ngOnInit(): void {
    }
  
    upload(files) {
      if (files.length === 0)
        return;
  
      const formData = new FormData();
  
      for (let file of files)
        formData.append('file', file, file.name);
  
      const uploadReq = new HttpRequest('POST', this.baseUrl+'gallery/createGallery', formData, {
        reportProgress: true,
      });
      console.log(formData);
      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response)
          this.message = event.body.toString();
      });
    }
}

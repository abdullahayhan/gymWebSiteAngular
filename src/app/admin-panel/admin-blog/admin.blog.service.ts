import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Blog, BlogDto, IBlog } from 'src/app/core/models/blog';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogService {
  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }


  getBlogs(){
    return this.http.get<Blog>(this.baseUrl+'blog/getallblog')
    .pipe(
      map(response=>{
        return response;
      },error=>{
        console.log('basarisiz: ',error);
      })
    );
  }

  getBlog(id:number){
    return this.http.get<IBlog>(this.baseUrl+'Blog/'+id);
  }

  createBlog(blog:BlogDto){
    return this.http.post(this.baseUrl+'blog/createblog',blog).pipe(
      map(response=>{
        return response;
      },error=>{
        console.log('blog oluşturulurken hata: ',error);
      })
    );
  }


  updateBlog(blog:IBlog){
    return this.http.post(this.baseUrl+'Blog/updateBlog',blog).pipe( 
      map(response=>{
       return response;
      },error=>{
      console.log(error);
    }));
  }


  deleteBlog(id:number){
    return this.http.delete(this.baseUrl+'blog?id='+id).subscribe(()=>{
      window.location.reload();
    }); 
  }


}

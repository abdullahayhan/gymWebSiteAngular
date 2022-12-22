import { Component } from '@angular/core';
import { BlogDto } from 'src/app/core/models/blog';
import { AdminBlogService } from '../admin.blog.service';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent {
  blog : BlogDto = {
    body:'',
    header:''
  }
  submitted = false;

  constructor(private blogService:AdminBlogService){}

  createBlog(){
    const data ={
      body: this.blog.body,
      header: this.blog.header
    }
    this.blogService.createBlog(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }


  newBlog(){
    this.submitted=false;
    this.blog={
      body:'',
      header:''
    };
  }
}

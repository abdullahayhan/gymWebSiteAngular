import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from 'src/app/core/models/blog';
import { AdminBlogService } from '../admin.blog.service';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {

  blog:IBlog;
  message = '';


  constructor(private blogService:AdminBlogService, private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.loadCurrentBlog();
  }


  loadCurrentBlog(){
    this.blogService.getBlog(+this.activeRoute.snapshot.paramMap.get('id')).subscribe(blog=>{
      this.blog=blog;
    },error=>{
      console.log(error);
    })
  } 


  updateBlog() 
  {
    this.message = '';
    
    this.blogService.updateBlog(this.blog)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }



}

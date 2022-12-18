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
  loginForm : FormGroup;

  constructor(private blogService:AdminBlogService, private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.createLoginForm();
    this.loadCurrentBlog();
    
  }

  updateBlog(){
    this.blog = this.loginForm.value;
    this.blog.id = +this.activeRoute.snapshot.paramMap.get('id'); 
    this.blogService.updateBlog(this.blog);
  }

  loadCurrentBlog(){
    this.blogService.getBlog(+this.activeRoute.snapshot.paramMap.get('id')).subscribe(blog=>{
      this.blog=blog;
    },error=>{
      console.log(error);
    })
  } 
  
  createLoginForm(){
    this.loginForm = new FormGroup({
      header : new FormControl(),
      body : new FormControl(),
      pictureUrl: new FormControl()
    });
  }


}

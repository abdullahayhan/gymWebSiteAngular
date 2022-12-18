import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog, IBlog } from 'src/app/core/models/blog';
import { AdminBlogService} from './admin.blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  
  blogs : any;


  constructor(private adminService:AdminBlogService, private route: Router){}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
    this.adminService.getBlogs().subscribe(response=>{
      this.blogs=response;
    },error=>{
      console.log(error);
    })
  }
  
  deleteBlog(id:number){
    this.adminService.deleteBlog(id);
  }

 




}

import { Component, OnInit } from '@angular/core';
import { AdminBlogService } from 'src/app/admin-panel/admin-blog/admin.blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs:any;

  constructor(private adminBlogSerivce:AdminBlogService){}
  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
    this.adminBlogSerivce.getBlogs().subscribe(response=>{
      this.blogs=response;
    },error=>{
      console.log(error);
    })
  }
}

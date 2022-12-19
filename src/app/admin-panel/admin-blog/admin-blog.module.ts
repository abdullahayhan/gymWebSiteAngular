import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBlogComponent } from './admin-blog.component';
import { RouterModule } from '@angular/router';
import { AdminNavbarModule } from "../admin-navbar/admin-navbar.module";
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogAddComponent } from './blog-add/blog-add.component';



@NgModule({
    declarations: [AdminBlogComponent,BlogUpdateComponent, BlogAddComponent],
    exports: [AdminBlogComponent,BlogUpdateComponent, BlogAddComponent],
    imports: [
        CommonModule, RouterModule,
        AdminNavbarModule,FormsModule,ReactiveFormsModule
    ]
})
export class AdminBlogModule { }

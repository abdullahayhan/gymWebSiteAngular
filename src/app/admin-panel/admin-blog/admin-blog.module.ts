import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBlogComponent } from './admin-blog.component';
import { RouterModule } from '@angular/router';
import { AdminNavbarModule } from "../admin-navbar/admin-navbar.module";
import { BlogUpdateComponent } from './blog-update/blog-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [AdminBlogComponent,BlogUpdateComponent],
    exports: [AdminBlogComponent,BlogUpdateComponent],
    imports: [
        CommonModule, RouterModule,
        AdminNavbarModule,FormsModule,ReactiveFormsModule
    ]
})
export class AdminBlogModule { }

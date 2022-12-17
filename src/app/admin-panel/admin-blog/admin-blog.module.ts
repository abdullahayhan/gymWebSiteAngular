import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBlogComponent } from './admin-blog.component';
import { RouterModule } from '@angular/router';
import { AdminNavbarModule } from "../admin-navbar/admin-navbar.module";



@NgModule({
    declarations: [AdminBlogComponent],
    exports: [AdminBlogComponent],
    imports: [
        CommonModule, RouterModule,
        AdminNavbarModule
    ]
})
export class AdminBlogModule { }

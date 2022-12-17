import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from "../footer/footer.module";
import { NavBarModule } from "../nav-bar/nav-bar.module";



@NgModule({
    declarations: [BlogComponent],
    exports: [BlogComponent],
    imports: [
        CommonModule,
        RouterModule,
        FooterModule,
        NavBarModule
    ]
})
export class BlogModule { }

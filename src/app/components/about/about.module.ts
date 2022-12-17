
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { NavBarModule } from "../nav-bar/nav-bar.module";
import { FooterModule } from "../footer/footer.module";



@NgModule({
    declarations: [AboutComponent],
    exports: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NavBarModule,
        FooterModule
    ]
})
export class AboutModule { }

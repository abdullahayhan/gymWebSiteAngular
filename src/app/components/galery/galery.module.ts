import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from "../footer/footer.module";
import { NavBarModule } from "../nav-bar/nav-bar.module";



@NgModule({
    declarations: [GaleryComponent],
    exports: [
        GaleryComponent,
        RouterModule
    ],
    imports: [
        CommonModule,
        FooterModule,
        NavBarModule
    ]
})
export class GalleryModule { }

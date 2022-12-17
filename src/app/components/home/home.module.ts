import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NavBarModule } from "../nav-bar/nav-bar.module";
import { FooterModule } from "../footer/footer.module";



@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule, RouterModule,
        NavBarModule,
        FooterModule
    ]
})
export class HomeModule { }

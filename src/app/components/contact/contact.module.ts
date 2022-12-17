import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { NavBarModule } from "../nav-bar/nav-bar.module";
import { FooterModule } from "../footer/footer.module";



@NgModule({
    declarations: [ContactComponent],
    exports: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NavBarModule,
        FooterModule
    ]
})
export class ContactModule { }

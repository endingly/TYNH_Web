import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'angular-bootstrap-md';

import { HeadNavbarComponent } from './head-navbar/head-navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeadNavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    HeadNavbarComponent,
    FooterComponent
  ]
})
export class VeiwManagerModule { }

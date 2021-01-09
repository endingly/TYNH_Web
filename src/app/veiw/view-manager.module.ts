import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavbarModule, CarouselModule, WavesModule, IconsModule, InputsModule} from 'angular-bootstrap-md';

import { HeadNavbarComponent } from './head-navbar/head-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { InfotmationBoardComponent } from './infotmation-board/infotmation-board.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeadNavbarComponent,
    FooterComponent,
    CarouselComponent,
    InfotmationBoardComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    CarouselModule,
    WavesModule,
    IconsModule,
    InputsModule,
    RouterModule,
  ],
  exports: [
    HeadNavbarComponent,
    FooterComponent,
    CarouselComponent,
    InfotmationBoardComponent
  ]
})
export class ViewManagerModule { }

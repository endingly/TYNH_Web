import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewManagerModule } from '../veiw/view-manager.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ViewManagerModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class PageManagerModule { }

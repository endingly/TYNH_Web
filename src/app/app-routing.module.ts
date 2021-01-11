import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomePageComponent } from './page/home-page/home-page.component';




const routes: Routes = [
  {path: 'Home', component: HomePageComponent},
  {path: '**', redirectTo: 'Home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

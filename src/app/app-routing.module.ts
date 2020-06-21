import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { SliderComponent } from './slider/slider.component';
import { SliderWithArrowComponent } from './slider-with-arrow/slider-with-arrow.component';
import { PocComponent } from './poc/poc.component';


const routes: Routes = [{
  path: 'cat',
  component: CatComponent
},{
  path: 'slider',
  component: SliderComponent
}, {
  path: 'poc',
  component: PocComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

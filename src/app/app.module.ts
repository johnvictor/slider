import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { GoalComponent } from './goal/goal.component';
import { ScrollHorizontalDirective } from './scroll-horizontal.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { SliderDirective } from './slider/slider.directive';
import { SliderWithArrowComponent } from './slider-with-arrow/slider-with-arrow.component';
import { EliteSliderComponent, EliteSliderDirective } from './elite-slider/elite-slider.component';
import { PocComponent } from './poc/poc.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    GoalComponent,
    ScrollHorizontalDirective,
    SliderComponent,
    SliderDirective,
    SliderWithArrowComponent,
    EliteSliderComponent,
    PocComponent,
    EliteSliderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import {SliderModule} from "angular-double-slider";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    CarouselComponent,
    NavigationbarComponent,
    AboutusComponent,
    WhatwedoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    SliderModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

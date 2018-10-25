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
import { RecommendationPageComponent } from './recommendation-page/recommendation-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';

const appRoutes: Routes = [
  {path: '',component: HomePageComponent},
  { path: 'recommendation', component: RecommendationPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    CarouselComponent,
    NavigationbarComponent,
    AboutusComponent,
    WhatwedoComponent,
    RecommendationPageComponent,
    HomePageComponent,
  ],
  
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

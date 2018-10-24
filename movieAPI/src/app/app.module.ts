import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { RecommendationPageComponent } from './recommendation-page/recommendation-page.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: 'recommendation', component: RecommendationPageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavigationbarComponent,
    AboutusComponent,
    WhatwedoComponent,
    RecommendationPageComponent,
  ],
  
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

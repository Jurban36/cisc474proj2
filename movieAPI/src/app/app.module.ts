import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavigationbarComponent,
    AboutusComponent,
    WhatwedoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

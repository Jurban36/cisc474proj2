import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-recommendation-page',
  templateUrl: './recommendation-page.component.html',
  styleUrls: ['./recommendation-page.component.css']
})
export class RecommendationPageComponent implements OnInit {

  constructor(private util:AppComponent) { }
  testFunct(){
    this.util.randomFunction();
  }
  ngOnInit() {
  }

}

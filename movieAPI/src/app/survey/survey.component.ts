import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  genreString = "";

  

  constructor(private util:AppComponent) { }
  submitMovie() {

    this.util.construct();
    
    setTimeout(() => {
      console.log("hellooooo")
      this.util.randomFunction();
      console.log(this.util.actorName)
    }, 2000);
    // this.util.randomFunction();
    // this.util.pullGenre();
    // this.util.pullLanguage();
    // if (this.util.desiredFormat=="Movie")
    //   this.util.pullActors();
    // setTimeout(() => {
    //   console.log(this.util.genreList)
    //   console.log(this.util.actorIDs);
    //   if (this.util.desiredFormat=="Movie")
    //     this.util.pullFinalMovie();
    //   else 
    //     this.util.pullFinalTV();
    // }, 1000);
  }
  ngOnInit() {
  }

}

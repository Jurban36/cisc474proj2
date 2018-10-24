import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SurveyComponent implements OnInit {

  title = 'movieAPI';
  actorsMoviesTogether="";
  finalData="";
  desiredFormat="Movie";
  //Both
  genreList="";
  language="";
  languageList="";
  maxRuntime="";
  minRuntime="";
  genre="";
  //Movie
  actorName="";
  goodMovies="";
  badMovies="";
  releaseDateBefore="";
  releaseDateAfter="";
  //TV
  tvRating = "8";
  airedBefore = "2016";
  airedAfter = "2010";


  movieortv(val){
    console.log(val.srcElement.value);
    this.desiredFormat = val.srcElement.value;
  }
  movgenre(val){
    console.log(val.srcElement.value);
    this.genre = val.srcElement.value;
  }
  movlanguage(val){
    console.log(val.srcElement.value);
    this.language = val.srcElement.value;
  }
  actors(val){
    console.log(val.srcElement.value);
    this.actorName = val.srcElement.value;
    console.log(this.actorName);
  }
  minyear(val){
    console.log(val.value);
    this.releaseDateAfter = val.value;
  }
  maxyear(val){
    console.log(val.value);
    this.releaseDateBefore = val.value;
  }
  mindur(val){
    console.log(val.value);
    this.minRuntime = val.value;
  }
  maxdur(val){
    console.log(val.value);
    this.maxRuntime = val.value;
  }
  bad(val){
    console.log(val.srcElement.checked);
    this.badMovies = val.srcElement.checked;
  }
  submitMovie() {

    //this.util.construct();



    // this.util.construct();
    
    // setTimeout(() => {
    //   console.log("hellooooo")
    //   this.util.randomFunction();
    //   console.log(this.util.actorName)
    // }, 2000);
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

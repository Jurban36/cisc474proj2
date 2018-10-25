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
  isMovie=true; //boolean replacing desiredFormat
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
  highRating="false";
  airedBefore = "";
  airedAfter = "";


  movieortv(val){
    console.log(val.srcElement.value);
    if(val.srcElement.value == "Movie") {
      this.isMovie = true;
    }
    else{
      this.isMovie = false;
    }
    
  }
  //Movies
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
  //TV Shows
  airedby(val){
    console.log(val.value);
    this.airedAfter = val.value;
  }
  airedsince(val){
    console.log(val.value);
    this.airedBefore = val.value;
  }
  tvrating(val){
    console.log(val.srcElement.checked);
    this.highRating = val.srcElement.checked;
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

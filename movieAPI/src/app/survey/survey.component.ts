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
  actorsMoviesTogether;
  finalData;
  desiredFormat;
  //Both
  genreList;
  languageList="&language=";
  maxRuntime = "&with_runtime.lte=120";
  minRuntime = "&with_runtime.gte=60";
  genre;
  language;
  //Movie
  actorIDs = "&with_people=";
  actorName="Ben Stiller Owen Wilson";
  goodMovies = "&vote_average.gte=6"
  badMovies = "&vote_average.lte=6"
  releaseDateBefore = "&primary_release_date.lte=2010-01-01"
  releaseDateAfter = "&primary_release_date.gte=2001-01-01"
  //TV
  tvRating = "&vote_average.gte=8";
  airedBefore = "&first_air_date.lte=2016-01-01";
  airedAfter = "&first_air_date.gte=2010-01-01";

  constructor() { }
  submitMovie() {

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

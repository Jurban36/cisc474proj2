import { Component, OnInit, Injectable } from '@angular/core';
// import { AppComponent } from '../app.component';
import { ConfigService } from './config.service';
import { SurveyComponent } from '../survey/survey.component';
@Component({
  selector: 'app-recommendation-page',
  templateUrl: './recommendation-page.component.html',
  styleUrls: ['./recommendation-page.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class RecommendationPageComponent implements OnInit {

  title ;
  actorsMoviesTogether;
  finalData;
  desiredFormat;
  //Both
  genreList;
  languageList;
  maxRuntime;
  minRuntime;
  genre;
  //Movie
  actorIDs;
  actorName;
  splitted;
  goodMovies;
  badMovies;
  releaseDateBefore;
  releaseDateAfter;
  //TV
  tvRating;
  airedBefore;
  airedAfter;
  model = {
    left: true,
    middle: false,
    right: false
  };
  setValues = () =>{
    this.title = this.util.title;
    this.desiredFormat=this.util.desiredFormat;
    //Both
    this.genreList=this.util.genreList;
    this.languageList=this.util.languageList;
    this.maxRuntime=this.util.maxRuntime;
    this.minRuntime=this.util.minRuntime;
    this.genre=this.util.genre;
    //Movie
    this.actorIDs=this.util.actorIDs;
    this.actorName = this.util.actorName;
    this.splitted = this.actorName.split(" ");
    this.goodMovies=this.util.goodMovies;
    this.badMovies=this.util.badMovies;
    this.releaseDateBefore=this.util.releaseDateBefore;
    this.releaseDateAfter=this.util.releaseDateAfter;
    //TV
    this.tvRating=this.util.tvRating;
    this.airedBefore=this.util.airedBefore;
    this.airedAfter=this.util.airedAfter;
  }
  pullGenre = () =>{
    this.svc.getGenreMovie().subscribe(data=>{
      // this.genreList = data.json().genres;
      let i =0;
      for (i =0;i<data.json().genres.length;i++){
        if (data.json().genres[i].name==this.genre){
          this.genreList += data.json().genres[i].id;
        }
      }
    });
  }
  pullLanguage = () =>{
    let language = "English";
    this.svc.getLanguageMovie().subscribe(data=>{
      let i =0;
      for (i =0;i<data.json().length;i++){
        if (data.json()[i].english_name==language){
          this.languageList += data.json()[i].iso_639_1;
        }
      }
      console.log(this.languageList)
    });
  }
  pullActors =() =>{
    let i = 0;
    for (i=0;i<this.splitted.length;i++){
      let string = this.splitted[i]+" "+this.splitted[i+1];
      this.svc.getActorNameMovie(string).subscribe(data=>{
        let testing = data.json();
        let actorIDAmount = this.actorIDs.split(",");
        if (actorIDAmount.length==this.splitted.length/2){
          this.actorIDs+=testing.results[0].id;
          // this.pullActorPairs();
        }
        else
          this.actorIDs+=testing.results[0].id+",";
        // console.log(testing.results[0].known_for[0]);
      });
      i+=1;
    } 
  }
  pullFinalMovie = () =>{
    this.svc.getEverythingMovie(this.actorIDs,this.genreList,this.releaseDateAfter,this.releaseDateBefore,this.languageList,this.goodMovies,this.minRuntime,this.maxRuntime).subscribe(data=>{
      console.log(data.json());
      this.finalData = data.json();
    });
  }
  pullFinalTV = () =>{
    this.svc.getEverythingTV(this.airedBefore,this.airedAfter,this.tvRating,this.genreList,this.maxRuntime,this.minRuntime).subscribe(data=>{
      console.log(data.json());
      this.finalData = data.json();
    });
  }
  randomFunction = () =>{
    var random = this.finalData.results[Math.floor(Math.random() * this.finalData.results.length)];
    console.log(random);
    document.getElementById('title').innerHTML ="Title: "+random.original_title ;
    document.getElementById('summary').innerHTML ="Summary: "+random.overview ;
    document.getElementById('releaseDate').innerHTML ="Release Date: "+random.release_date ;
    document.getElementById('rating').innerHTML ="Rating: "+random.vote_average ;
  }
  construct = () =>{
    this.pullGenre();
    this.pullLanguage();
    if (this.desiredFormat=="Movie")
      this.pullActors();
    setTimeout(() => {
      console.log(this.genreList)
      console.log(this.actorIDs);
      if (this.desiredFormat=="Movie")
        this.pullFinalMovie();
      else 
        this.pullFinalTV();
    }, 1000);
    setTimeout(() => {
      this.randomFunction();
    }, 1200);
  }
  constructor(private svc:ConfigService,private util: SurveyComponent){
    
    this.setValues();

    setTimeout(() => {
      this.construct()
    }, 100);
    //DONT DELETE THIS!!!
    // this.svc.getConfig().subscribe(data=>{
    //   console.log(data.results);
    //   console.log(data.json());
    //   let testing = data.json();
    //   console.log(testing.results[0].known_for[0]);
    // });
  }
  testFunct(){
    this.randomFunction();
  }
  ngOnInit() {
  }

}

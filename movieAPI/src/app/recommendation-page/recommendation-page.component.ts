import { Component, OnInit, Injectable, Input } from '@angular/core';
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
  title;
  actorsMoviesTogether="";
  finalData;
  isMovie=true;
  pageNumber = 1;
  listOfHit = [];
  //Both
  genreList="&with_genres=";
  languageList="&language=";
  maxRuntime="";
  minRuntime="";
  genre="";
  language="";
  //Movie
  currentActor="";
  actorIDs = "&with_people=";
  actorName="";
  splitted;
  goodMovies="";
  badMovies="";
  releaseDateBefore="";
  releaseDateAfter="";
  //TV
  highRating="false";
  airedBefore="";
  airedAfter="";
  tvRating = "&vote_average.gte=8";
  model = {
    left: true,
    middle: false,
    right: false
  };
  reset(){
    this.genreList="&with_genres=";
    this.languageList ="&language=";
    this.actorIDs="&with_people=";
    this.actorName="";

  }
  // setValues = () =>{
  //   console.log("Genre",this.util.genre)
  //   this.title = this.util.title;
  //   this.isMovie=this.util.isMovie;
  //   //Both
  //   this.genreList=this.util.genreList;
  //   if (this.maxRuntime.length>=1)
  //     this.maxRuntime="&with_runtime.lte="+this.util.maxRuntime;
  //   if (this.minRuntime.length>=1)
  //     this.minRuntime="&with_runtime.gte="+this.util.minRuntime;
  //   this.genre=this.util.genre;
  //   //Movie
  //   this.actorName = this.util.actorName;
  //   if (this.actorName.length>=1)
  //     this.splitted = this.actorName.split(" ");
  //   if (this.util.goodMovies.length>=1)
  //     this.goodMovies="&vote_average.gte="+this.util.goodMovies;
  //   if (this.util.badMovies.length>=1)
  //     this.badMovies="&vote_average.lte="+this.util.badMovies;
  //   if (this.util.releaseDateBefore.length>=1)
  //     this.releaseDateBefore="&primary_release_date.lte="+this.util.releaseDateBefore+"-01-01";
  //   if (this.util.releaseDateAfter.length>=1)
  //     this.releaseDateAfter="&primary_release_date.gte="+this.util.releaseDateAfter+"-01-01";
  //   //TV
  //   //if (this.util.tvRating.length>=1)
  //    // this.tvRating="&vote_average.gte="+this.util.tvRating;
  //   if (this.util.airedBefore.length>=1)
  //     this.airedBefore="&first_air_date.lte="+this.util.airedBefore+"01-01";
  //   if (this.util.airedAfter.length>=1)
  //     this.airedAfter="&first_air_date.gte="+this.util.airedAfter+"01-01";
  //   console.log(this.actorName);
  // }
  pullGenre = () =>{
    console.log("kjasdhkashjkd");
    this.svc.getGenreMovie().subscribe(data=>{
      // this.genreList = data.json().genres;
      let i =0;
      for (i =0;i<data.json().genres.length;i++){
        if (data.json().genres[i].name==this.genre){
          console.log("jsdj")
          this.genreList += data.json().genres[i].id;
        }
      }
      console.log(this.genreList);
    });
  }
  pullLanguage = () =>{
    this.svc.getLanguageMovie().subscribe(data=>{
      let i =0;
      for (i =0;i<data.json().length;i++){
        if (data.json()[i].english_name==this.language){
          this.languageList += data.json()[i].iso_639_1;
        }
      }
      console.log(this.languageList)
    });
  }
  pullActors =() =>{
    console.log(this.actorName);
    let i = 0;
    console.log(this.splitted.length)
    for (i=0;i<this.splitted.length;i++){
      console.log(this.splitted[i])
      let string = this.splitted[i]+" "+this.splitted[i+1];
      console.log(string)
      this.svc.getActorNameMovie(string).subscribe(data=>{
        let testing = data.json();
        console.log(testing);
        let actorIDAmount = this.actorIDs.split(",");
        if (actorIDAmount.length==this.splitted.length/2){
          this.actorIDs+=testing.results[0].id;
          // this.pullActorPairs();
        }
        else
          this.actorIDs+=testing.results[0].id+",";
        // console.log(testing.results[0].known_for[0]);
        console.log(this.actorIDs)
      });
      i+=1;
    } 
    console.log(this.actorIDs);
  }
  pullFinalMovie = () =>{
    // console.log(this.pageNumber.toString());
    this.svc.getEverythingMovie(this.actorIDs,this.genreList,this.releaseDateAfter,this.releaseDateBefore,this.languageList,this.goodMovies,this.minRuntime,this.maxRuntime,this.pageNumber.toString()).subscribe(data=>{
      console.log(data.json());
      this.finalData = data.json();
    });
    this.reset();
  }
  randomFunction = () =>{
    var random = this.finalData.results[Math.floor(Math.random() * this.finalData.results.length)];
    if (this.listOfHit.length==0){}
    else if (this.listOfHit.length==this.finalData.results.length){
      this.listOfHit = [];
      this.pageNumber = this.pageNumber+=1;
      this.pullFinalMovie();
      random = this.finalData.results[Math.floor(Math.random() * this.finalData.results.length)];
    }
    else{
      while (this.listOfHit.includes(random))
        random = this.finalData.results[Math.floor(Math.random() * this.finalData.results.length)];
    }
    this.listOfHit.push(random);
    document.getElementById('title').innerHTML ="Title: "+random.original_title ;
    document.getElementById('summary').innerHTML ="Summary: "+random.overview ;
    document.getElementById('releaseDate').innerHTML ="Release Date: "+random.release_date ;
    document.getElementById('rating').innerHTML ="Rating: "+random.vote_average ;
  }
  //TV

  tvRandomFunction = () =>{
    var random = this.finalData.results[Math.floor(Math.random() * this.finalData.results.length)];
    if (this.listOfHit.length==0){}
    else if (this.listOfHit.length==this.finalData.results.length){
      this.listOfHit = [];
      this.pageNumber = this.pageNumber+=1;
      this.pullFinalTV();
      random = this.finalData.results[Math.floor(Math.random() * this.finalData.results.length)];
    }
    else{
      while (this.listOfHit.includes(random))
        random = this.finalData.results[Math.floor(Math.random() * this.finalData.results.length)];
    }
    this.listOfHit.push(random);
    document.getElementById('title').innerHTML ="Title: "+random.original_name ;
    document.getElementById('summary').innerHTML ="Summary: "+random.overview ;
    document.getElementById('releaseDate').innerHTML ="First Aired: "+random.first_air_date ;
    document.getElementById('rating').innerHTML ="Rating: "+random.vote_average ;
  }
  // tvConstruct = () =>{
  //   if (this.genre.length>=1)
  //     this.pullGenre();
  //   if (this.language.length>=1)
  //     this.pullLanguage();
  //   setTimeout(() => {
  //     console.log(this.genreList)
  //     this.pullFinalTV();
  //   }, 1000);
  //   setTimeout(() => {
  //     this.tvRandomFunction();
  //   }, 1200);
  // }
  pullFinalTV = () =>{
    this.svc.getEverythingTV(this.airedBefore,this.airedAfter,this.tvRating,this.genreList,this.maxRuntime,this.minRuntime,this.pageNumber.toString()).subscribe(data=>{
      console.log(data.json());
      this.finalData = data.json();
      console.log(this.finalData.results.length);
    });
  }
  construct = () =>{
    console.log(this.genre)
    if (this.highRating==="false"){
      this.tvRating="";
    }
    if (this.genre.length==0){  console.log("here")  }
    else{
      console.log("here12345")
      this.pullGenre();
    }
    if (this.language.length==0){}
    else
      this.pullLanguage();
    console.log(this.actorName);
    console.log(this.actorName.length)
    if (this.isMovie===false){
    }
    else if ((this.actorName.length==0)){(console.log("here1"))
    }
    else{
      console.log("why am i here");
      this.splitted = this.actorName.split(" ");
      this.pullActors();}
    
    setTimeout(() => {
    //   console.log(this.genreList)
    //   console.log(this.actorIDs);
      if (this.isMovie)
        this.pullFinalMovie();
      else
        this.pullFinalTV();
    }, 1000);
    setTimeout(() => {
      if (this.finalData.results.length==0){console.log("No Results")}
      else if (this.isMovie==true){
        this.randomFunction();
      }
      else{
          this.tvRandomFunction();
      }
    }, 1200);
  }
  constructor(private svc:ConfigService){
    
    // this.setValues();

    // setTimeout(() => {
    //   this.construct()
    // }, 100);
  }
  randomFunct(){
    if (this.isMovie===true)
      this.randomFunction();
    else
      this.tvRandomFunction();
  }
  ngOnInit() {
  }

}

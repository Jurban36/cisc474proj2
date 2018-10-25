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
  testFunct(elementNumber: string){
    // let deleteName = document.getElementById("actor"+this.actorCount).first;
    let deletedName = document.getElementById("actor"+elementNumber).firstChild.nodeValue;
    document.getElementById("button"+elementNumber).style.display="none";
    document.getElementById("actor"+elementNumber).firstChild.nodeValue = "";
    let splitted = this.actorName.split(" ");
    let split2 = deletedName.split(" ");
    let first = splitted.indexOf(split2[0]);
    splitted.splice(first,2);
    this.actorName= splitted.toString();
    this.actorName = "";
    let i = 0;
    for (i=0;i<splitted.length;i++){
      if (i==0)
        this.actorName+=splitted[i];
      else
      this.actorName+=" "+splitted[i];
    }
  }
  actorCount = 1;
  addParagraph(){
    console.log("here");
    if (this.currentActor!=""){
      let splitted = this.actorName.split(" ");
      // var p2 = "<p div_id = "+splitted[1]+">"+this.actorName+'<button type="button" (click)="testFunct()" class="close" aria-label="Close"> <span aria-hidden="true">&times;</span></button>'+"</p>";
      // console.log(p2);
      console.log("button"+this.actorCount);
      document.getElementById("button"+this.actorCount).style.display="block";
      document.getElementById("actor"+this.actorCount).firstChild.nodeValue = this.currentActor;
      console.log(document.getElementById("actor"+this.actorCount).firstChild.nodeValue)
      // document.getElementById("actor"+this.actorCount). = ;
      console.log(document.getElementById("button"+this.actorCount));
      // console.log(document.getElementById("button"+this.actorCount))
      this.actorCount+=1;
    }
  }
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

  model = {
    left: true,
    middle: false,
    right: false
  };
  reset(){
    this.genreList="";
    this.languageList ="";
    this.actorIDs="";

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
    console.log(this.actorIDs);
  }
  pullFinalMovie = () =>{
    // console.log(this.pageNumber.toString());
    this.svc.getEverythingMovie(this.actorIDs,this.genreList,this.releaseDateAfter,this.releaseDateBefore,this.languageList,this.goodMovies,this.minRuntime,this.maxRuntime,this.pageNumber.toString()).subscribe(data=>{
      console.log(data.json());
      this.finalData = data.json();
    });
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
  construct = () =>{
    console.log(this.genre===undefined);
    if (this.genre===undefined){    }
    else{
      console.log("here12345")
      this.pullGenre();
    }
    if (this.language===undefined){}
    else
      this.pullLanguage();
    if ((this.actorName===undefined)){(console.log("here1"))
    }
    else if ((this.isMovie==false)){console.log("here2")}
    else{
      console.log(this.actorName);
      this.splitted = this.actorName.split(" ");
      this.pullActors();}
    setTimeout(() => {
      console.log(this.genreList)
      console.log(this.actorIDs);
      this.pullFinalMovie();
    }, 1000);
    setTimeout(() => {
      this.randomFunction();
    }, 1200);
  }
  constructor(private svc:ConfigService){
    
    // this.setValues();

    // setTimeout(() => {
    //   this.construct()
    // }, 100);
  }
  randomFunct(){
    this.randomFunction();
  }
  ngOnInit() {
  }

}

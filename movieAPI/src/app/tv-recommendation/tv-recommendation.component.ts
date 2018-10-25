import { Component, OnInit, Injectable, Input } from '@angular/core';
// import { AppComponent } from '../app.component';
import { ConfigService } from '../recommendation-page/config.service';
import { SurveyComponent } from '../survey/survey.component';
@Component({
  selector: 'app-tv-recommendation',
  templateUrl: './tv-recommendation.component.html',
  styleUrls: ['./tv-recommendation.component.css']
})
export class TvRecommendationComponent implements OnInit {
  title;
  actorsMoviesTogether="";
  finalData;
  isMovie=false;
  pageNumber = 1;
  listOfHit = [];
  //Both
  genreList="Comedy";
  languageList="&language=en";
  maxRuntime="";
  minRuntime="";
  genre="";
  language="";
  //TV
  tvRating="";
  airedBefore="";
  airedAfter="";
  // setValues = () =>{
  //   console.log("Genre",this.util.genre)
  //   this.isMovie=this.util.isMovie;
  //   //Both
  //   this.genreList=this.util.genreList;
  //   if (this.maxRuntime.length>=1)
  //     this.maxRuntime="&with_runtime.lte="+this.util.maxRuntime;
  //   if (this.minRuntime.length>=1)
  //     this.minRuntime="&with_runtime.gte="+this.util.minRuntime;
  //   this.genre=this.util.genre;
  //   //TV
  //   //if (this.util.highRating.length>=1)
  //    // this.tvRating="&vote_average.gte="+this.util.tvRating;
  //   if (this.util.airedBefore.length>=1)
  //     this.airedBefore="&first_air_date.lte="+this.util.airedBefore+"01-01";
  //   if (this.util.airedAfter.length>=1)
  //     this.airedAfter="&first_air_date.gte="+this.util.airedAfter+"01-01";
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
  tvConstruct = () =>{
    if (this.genre.length>=1)
      this.pullGenre();
    if (this.language.length>=1)
      this.pullLanguage();
    setTimeout(() => {
      console.log(this.genreList)
       
      this.pullFinalTV();
    }, 1000);
    setTimeout(() => {
      this.tvRandomFunction();
    }, 1200);
  }
  pullFinalTV = () =>{
    this.svc.getEverythingTV(this.airedBefore,this.airedAfter,this.tvRating,this.genreList,this.maxRuntime,this.minRuntime,this.pageNumber.toString()).subscribe(data=>{
      console.log(data.json());
      this.finalData = data.json();
      console.log(this.finalData.results.length);
    });
  }
  constructor(private svc:ConfigService,private util: SurveyComponent){
    
    // this.setValues();

    setTimeout(() => {
      this.tvConstruct()
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
    console.log("here")
    this.tvRandomFunction();
  }
  ngOnInit() {
  }

}

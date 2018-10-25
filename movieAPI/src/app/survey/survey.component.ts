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
  currentActor="";
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
    this.currentActor = val.srcElement.value;
    if (this.actorName.length>=1)
      this.actorName += " "+val.srcElement.value;
    else 
      this.actorName= val.srcElement.value;
    this.addParagraph();
    val.srcElement.value = "";
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

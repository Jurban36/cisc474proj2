import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: Http) { }
  configUrl = 'https://api.themoviedb.org/3/search/person?api_key=9374cadd7f8f1a2add90862df0a725e1&language=en-US&query=anne%20hathaway&page=1&include_adult=false';
  testURL = "";
  genreURL="";
  languageURL = "";
  finalURL = "";
  testingMultiple = " "
  getConfig = ():Observable<any> => {
    const h: Headers=new Headers();
    return this.http.get(this.configUrl,{headers: h});
  }
  //You can search for an actor and get their ID here
  getActorNameMovie = (actorName: string):Observable<any> => {
    const h: Headers=new Headers();
    var splitted = actorName.split(" "); 
    let i =0;
    for (i=0;i<splitted.length;i++){}
    this.testURL = "https://api.themoviedb.org/3/search/person?api_key=9374cadd7f8f1a2add90862df0a725e1&language=en-US&query="+splitted[0]+"%20"+splitted[1]+"&page=1&include_adult=false"
    console.log(splitted);
    return this.http.get(this.testURL,{headers: h});
  }
  getActorPairsMovie = (actorName: string):Observable<any> => {
    const h: Headers=new Headers();
    var splitted = actorName.split(" "); 
    let i =0;
    for (i=0;i<splitted.length;i++){
      if (i==splitted.length-1){
        this.testingMultiple+=splitted[i];
      }
      else{this.testingMultiple+=splitted[i]+","}
    }
    this.testURL = "https://api.themoviedb.org/3/discover/movie?api_key=9374cadd7f8f1a2add90862df0a725e1&with_people="+this.testingMultiple+"&sort_by=vote_average.desc";
    console.log(this.testURL);
    return this.http.get(this.testURL,{headers: h});
  }


  getGenreMovie = ():Observable<any> => {
    const h: Headers=new Headers();
    this.languageURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=9374cadd7f8f1a2add90862df0a725e1&language=en-US"
    console.log(this.languageURL);
    return this.http.get(this.languageURL,{headers: h});
  }
  getLanguageMovie = ():Observable<any> => {
    const h: Headers=new Headers();
    this.genreURL = "https://api.themoviedb.org/3/configuration/languages?api_key=9374cadd7f8f1a2add90862df0a725e1";
    console.log(this.genreURL);
    return this.http.get(this.genreURL,{headers: h});
  }
  getEverythingMovie = (actors: string, Genre: string, releaseDate: string, language: string, rating: string, minRuntime: string, maxRunTime: string):Observable<any> => {
    const h: Headers=new Headers();
    var splitted = actors.split(" ");
    let i =0;
    this.testingMultiple="&with_people="
    for (i=0;i<splitted.length;i++){
      if (i==splitted.length-1){
        this.testingMultiple+=splitted[i];
      }
      else{this.testingMultiple+=splitted[i]+","}
    }
    this.finalURL = "https://api.themoviedb.org/3/discover/movie?api_key=9374cadd7f8f1a2add90862df0a725e1"+language+"&include_adult=false&include_video=false&page=1"+rating+releaseDate+Genre+actors+minRuntime+maxRunTime;
    console.log(this.finalURL);
    return this.http.get(this.finalURL,{headers: h});
  }
}

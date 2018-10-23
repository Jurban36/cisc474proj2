import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actorsMoviesTogether;
  genreList="&with_genres=";
  languageList="&language=";
  actorIDs = "&with_people=";
  actorName = "Ben Stiller Owen Wilson";
  minRuntime = "&with_runtime.gte=100";
  maxRuntime = "&with_runtime.lte=110";
  splitted = this.actorName.split(" ");
  title = 'movieAPI';
  releaseDateBefore = "&primary_release_date.lte=2010-01-01"
  releaseDateAfter = "&primary_release_date.gte=2010-01-01"
  goodMovies = "&vote_average.gte=6"
  badMovies = "&vote_average.lte=6"
  model = {
    left: true,
    middle: false,
    right: false
  };
  pullGenre = () =>{
    let genre = "Comedy";
    this.svc.getGenreMovie().subscribe(data=>{
      // this.genreList = data.json().genres;
      let i =0;
      for (i =0;i<data.json().genres.length;i++){
        if (data.json().genres[i].name==genre){
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
  // pullActorPairs = () =>{
  //   console.log("here")
  //   this.svc.getActorPairs(this.actorIDs).subscribe(data=>{
  //     this.actorsMoviesTogether = data.json();
  //   });
  // }
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
    this.svc.getEverythingMovie(this.actorIDs,this.genreList,this.releaseDateBefore,this.languageList,this.goodMovies,this.minRuntime,this.maxRuntime).subscribe(data=>{
      console.log(data.json());
    });
  }
  constructor(private svc:ConfigService){
    this.pullGenre();
    this.pullActors();
    this.pullLanguage();
    setTimeout(() => {
      console.log(this.genreList)
      console.log(this.actorIDs);
      this.pullFinalMovie();
    }, 1000);
      
    //DONT DELETE THIS!!!
    // this.svc.getConfig().subscribe(data=>{
    //   console.log(data.results);
    //   console.log(data.json());
    //   let testing = data.json();
    //   console.log(testing.results[0].known_for[0]);
    // });
  }
}

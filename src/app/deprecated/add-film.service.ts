import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddFilmService {

  movies = []

  constructor() {
  }

  addMovie(movieName:string) {

    //only add movie names != "" and remove spaces
    if(movieName.trim() != ""){
      this.movies.push(movieName.trim());
    }

  }
}

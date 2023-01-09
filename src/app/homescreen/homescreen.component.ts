import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent {
  films = ["assets/img/Filmcover.jpg","assets/img/Filmcover.jpg","assets/img/Filmcover.jpg","assets/img/Filmcover.jpg","assets/img/Filmcover.jpg","assets/img/Filmcover.jpg"]

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchMovies();
  }

  movieData: any;

  private fetchMovies(){
    const url = `${environment.backendUrl}/film`

    this.http.get(url)
      .subscribe(response => {
        this.movieData = response;

        console.log(this.movieData);
        this.films = [];
        for(let i = 0; i < this.movieData.length; i++){
          console.log(this.movieData[i].titel);
          console.log(this.movieData[i].bildLink);
          this.films.push(this.movieData[i].bildLink);
        }

      })
  }


}

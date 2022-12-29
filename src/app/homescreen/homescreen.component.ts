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
    this.getMovies();
  }

  //test HTTP Request from Backend
  movieData: any;
  getMovies(): void {

    const url = `${environment.backendUrl}/movie`
    // const url = environment.backendUrl + "/movie"; //alternativ Stringverkettung

    this.http.get(url).subscribe(response => {
      // handle response
      this.movieData = response;
      //console.log(response)
    });


  }


}

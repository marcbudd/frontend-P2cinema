import {Component, Input} from '@angular/core';
import {AddFilmService} from "../add-film.service";


@Component({
  selector: 'app-film-input',
  templateUrl: './film-input.component.html',
  styleUrls: ['./film-input.component.scss']
})
export class FilmInputComponent {
  @Input() movie_name: string;


  constructor(public fs: AddFilmService) {
    this.fs = fs;
  }


  clearInput() {
    this.movie_name = "";
  }

}

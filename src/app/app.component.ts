import { Component } from '@angular/core';
import {AddFilmService} from "./add-film.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend-P2cinema';

  // movies = ["Die Feuerzangenbowle", "Love Actually", "Kevin - Allein zu Haus"];

  constructor(public fs: AddFilmService) {

  }
}

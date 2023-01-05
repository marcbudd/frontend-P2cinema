
import { Component } from '@angular/core';


@Component({
  selector: 'app-kundendaten',
  templateUrl: './kundendaten.component.html',
  styleUrls: ['./kundendaten.component.scss']
})
export class KundendatenComponent {
  names =['Klara','Marek','Schwabi','Josi'];
  images = [];
  texts = ['2 Jahre alt', 'Gräbt gerne', 'Hamsterradfreak', 'Isst gerne'];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.component.html',
  styleUrls: ['./anfahrt.component.scss']
})
export class AnfahrtComponent {
  cinemas:any=[
    {cinemaLocation:"Mannheim",source:"assets/img/Mannheim.jpg",adresse: "Beste Kinostraße 1 68161 Mannheim", telefon:"999999", email:"KinoMannheim@mail.com"},
    {cinemaLocation:"Hamburg",source:"assets/img/Hamburg.jpg",adresse: "Beste Kinostraße 2 68161 Hamburg", telefon:"666666", email:"KinoHamburg@mail.com"},
    {cinemaLocation:"Stuttgart",source:"assets/img/Stuttgart.jpg",adresse: "Beste Kinostraße 3 68161 Stuttgart", telefon:"999666", email:"KinoStuttgart@mail.com"},
    {cinemaLocation:"Karlsruhe",source:"assets/img/Karlsruhe.jpg",adresse: "Beste Kinostraße 4 68161 Karlsruhe", telefon:"666999", email:"KinoKarlsruhe@mail.com"}
  ];
}

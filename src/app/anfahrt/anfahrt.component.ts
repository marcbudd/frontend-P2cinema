import { Component } from '@angular/core';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.component.html',
  styleUrls: ['./anfahrt.component.scss']
})
export class AnfahrtComponent {
  cinemas:any = [
    {cinemaLocation:"Mannheim",source:"assets/img/Mannheim.jpg",adresse: "Hafenstraße 2, 68161 Mannheim", telefon: "0621 2132184", email:"oscarMannheim@gmx.de"},
    {cinemaLocation:"Hamburg",source:"assets/img/Hamburg.jpg",adresse:"Simensstraße 12, 21140 Hamburg", telefon: "040 213789", email:"oscarHamburg@gmx.de"},
    {cinemaLocation:"Stuttgart",source:"assets/img/Stuttgart.jpg",adresse:"Bergstraße 23, 70173 Stuttgart", telefon: "0711 54617", email:"oscarStuttgart@gmx.de"},
    {cinemaLocation:"Karlsruhe",source:"assets/img/Karlsruhe.jpg",adresse: "Münstertraße 7, 76133 Karlsruhe", telefon: "0721 37190", email:"oscarKarlsruhe@gmx.de"}
  ];


}

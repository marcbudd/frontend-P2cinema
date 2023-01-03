import { Component } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent {
  datalistSpecials:any = [
    {specialname:"Kostümevent",source:"assets/img/Kostümevent.jpg",description: "Komm verkleidet mit Kostüm zu deinem Film", describtion2:" und erhalte ein Gratis Menü.🥤"},
    {specialname:"Popcornspecial",source:"assets/img/Popcornspecial.jpg",description:"Popcorn-Geschenk: Komme mit drei weiteren Personen", describtion2:"und erhalte einen Popcorneimer geschenkt! 🎁"},
    {specialname:"The Night Is Ours",source:"assets/img/movienight.jpg",description:"Filmmarathon über die ganze Nacht! Tauche mit vielen", describtion2:"anderen in die Welt der Filme ein. Die Filme", describtion3:"werden jeweils durch Abstimmung bestimmt. Die Tickets sind", description4:"nur an der Kasse erhältlich! 🎟"}
  ];
}

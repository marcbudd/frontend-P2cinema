import { Component } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent {
    datalistSpecials:any = [
      {specialname:"Kostümevent",source:"assets/img/Kostümevent.jpg",description: "Beschere dir und allen anderen ein einzigartiges Erlebnis! Komme verkleidet mit Kostüm zu deinem Film und erhalte ein Gratis Menü."},
                {specialname:"Popcornspecial",source:"assets/img/Popcornspecial.jpg",description:"Riesenpopcornangebot: Wenn du mit 4 weiteren Personen kommst, bekommt ihr einen großen Popcorneimer geschenkt."},
                {specialname:"The Night Is Ours",source:"assets/img/movienight.jpg",description:"Filmmarathon über die ganze Nacht! Tauche mit vielen anderen in die fantastische Welt der Filme ein. Die Filme werden jeweils von den Zuschauern durch Abstimmungen bestimmt und ein Preis im Wert von 100€ lässt sich gewinnen! Die Tickets sind nur an der Kasse erhältlich und nur für den jeweiligen Standort des Kaufes gültig."}
              ];
}

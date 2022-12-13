import { Component } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent {
    datalistSpecials:any = [
      {specialname:"Kostümevent",source:"assets/img/Kostümevent.jpg",description: "Beschere dir und allen anderen ein einzigartiges Erlebnis. Komme verkleidet in einem Kostüm zu deinem Film und erhalte ein Gratis Menü."},
                {specialname:"Popcornspecial",source:"assets/img/Popcornspecial.jpg",description:"Riesenpopcornangebot: Wenn ihr mit 5 Personen kommt bekommt ihr einen großen Popcorneimer geschenkt"},
                {specialname:"The Night is our",source:"assets/img/movienight.jpg",description:"Filmmarathon über die ganze Nacht. Tauche mit vielen anderen in die fantstische Welt der Filme ein. Die Filme werden von den Zuschauern durch Abszimmung bestimmt, der Preis beträgt 100 Euro und die Tickets sind nur an der Kasse erhältlich. Die Tickets sind nur für den jeweiligen Standort des Kaufes gültig."}  
              ];
}

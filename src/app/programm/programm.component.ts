import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.scss']
})
export class ProgrammComponent implements OnInit{
  existCity = ["Mannheim","Hamburg","Stuttgart","Karlsruhe"]
  selectedCity!: string;
  films = ["Film 1"];
  selectedFilm!: string;
  disabledFilm = true;
  setFilms(){
    if(this.selectedCity != null){
      for(let i of this.existCity){
       if(this.selectedCity == i){
         this.films = ["Datenbankzugriff","nötig","von Stadt asugehend","AvatarTheWayOfWater"];
        }
      }
      this.disabledFilm = false;
    }
  }
  // Datepicker 
  // Get Dates From Database
  
  disabledDatepicker = true;
  minDate = new Date(2022,12,12) ; 
  maxDate = new Date(2022,12,20);
  DatesToDisable = [new Date(2022,18,12),new Date(2022,14,12)]
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return !this.DatesToDisable.find(x=>x.getDay()==day)
  };
  // https://stackoverflow.com/questions/60043597/how-to-disable-angular-material-datepicker-dates-from-an-array-of-dates
  selectedDate!: Date;
  
  proofDisableDatepicker(){
    if(this.selectedFilm != null && this.selectedCity != null){
      this.disabledDatepicker = false;
    }
  }

  //Time
  times = ["Zeit","Datenbank","abfrage"];
  selectedTime!: string;
  disabledTime = true;
  proofDisableTime(){
    if(this.selectedDate != null){
      this.disabledTime = false;
    }
  }
  //button
  disabledButton = true;
  proofDisableButton(){
    if((this.selectedTime && this.selectedCity && this.selectedFilm && this.selectedDate) != null){
        this.disabledButton = false;
    }
  }
  //disabled foreground right
  disabledForegroundRight = true;
  proofDisabledForegroundRight(){
    if(this.selectedFilm != null){
      this.disabledForegroundRight = false;
    }
  }

  filmPicture = "";
  filmclassification = "";
  filmInformation = "";
  filmTrailerURL = "";
  setInformationForegroundRight(){
    //Datenbankabfrage
    this.filmPicture = "assets/img/Filmcover.jpg";
    this.filmclassification = "Genres Science Fiction, Abenteuer, Action & FantasyIm Verleih bei 20th Century Studios";
    this.filmInformation = "AVATAR 2 spielt mehr als ein Jahrzehnt nach den Ereignissen des ersten Films und erzählt die spannende Geschichte der Familie Sully (Jake, Neytiri und ihre Kinder): von dem Ärger, der sie verfolgt und was sie auf sich nehmen, um einander zu beschützen; sowie die dramatischen Erlebnisse und die Kämpfe, die sie führen, um zu überleben.";
    this.filmTrailerURL = "https://www.youtube-nocookie.com/embed/HHRRi0Hh6fM";
    this.ngOnInit();
  }
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.filmTrailerURL);
  }
  ngOnInit(): void {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.filmTrailerURL);
  }
}


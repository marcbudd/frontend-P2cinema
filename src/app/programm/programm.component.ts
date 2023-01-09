import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-programm',
  templateUrl: './programm.component.html',
  styleUrls: ['./programm.component.scss']
})
export class ProgrammComponent implements OnInit {

  programmData: any;
  cities = ["Stadt1"]
  selectedCity!: string;
  films = ["Film1"];
  selectedFilm!: string;
  disabledFilm = true;
  shows = ["Datum und Uhrzeit"]
  selectedShow!: string;
  disabledShow = true;


  //film information
  filmId = "";
  filmName = "";
  filmGenre = "";
  filmFSK = "";
  filmActors = "";
  filmPicture = "";
  filmInformation = "";
  filmTrailerURL = "";

  //for youtube link
  safeSrc: SafeResourceUrl;

  //paying method
  payingMethods = ["Reservieren"];
  selectedPayingMethod: string = "Reservieren";
  disabledPayingMethod = true;

  disabledButton = true;

  constructor(private sanitizer: DomSanitizer, private route: Router, private http: HttpClient) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.filmTrailerURL);
  }

  ngOnInit(): void {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.filmTrailerURL);
    this.fetchProgrammData();

  }

  private fetchProgrammData() {
    const url = `${environment.backendUrl}/vorstellung`

    this.http.get(url)
      .subscribe(response => {
        this.programmData = response;
        console.log(this.programmData)

        this.cities = [];
        for (let i = 0; i < this.programmData.length; i++) {
          let city = this.programmData[i].saal.kino.stadt;
          console.log(city)
          if (!(this.cities.includes(city))) {
            this.cities.push(city)
          }

        }
      })
  }

  //based on the city that was put in, all the movies that are shown in that city are added to the drop down menu
  setFilms() {
    if (this.selectedCity != null) {

      this.films = []; //set film array empty
      for (let i = 0; i < this.programmData.length; i++) { //iterate through programm data
        let city = this.programmData[i].saal.kino.stadt; //get stadt
        let film = this.programmData[i].film.titel; //get film title
        if (this.selectedCity === city && !(this.films.includes(film))) { //if city corresponds to the selected city and the film was not included yet
          this.films.push(film) //add film title to film array
        }

      }

      this.disabledFilm = false; // enable drop down

    }

  }

  //disabled foreground right
  disabledForegroundRight = true;

  proofDisabledForegroundRight() {
    if (this.selectedFilm != null) { //when film was selected to the following
      this.disabledForegroundRight = false; //show film information on right side
    }
  }

  //get links for FSK images
  getFskImageUrl(fsk: string): string {
    switch (fsk) {
      case "FSK0":
        return "assets/img/fskPictures/fsk0.jpeg";
      case "FSK6":
        return "assets/img/fskPictures/fsk6.jpeg";
      case "FSK12":
        return "assets/img/fskPictures/fsk12.png";
      case "FSK16":
        return "assets/img/fskPictures/fsk16.jpeg";
      case "FSK18":
        return "assets/img/fskPictures/fsk18.png";
      default:
        return "";
    }
  }


  setInformationForegroundRight() {
    //get information for the chosen film
    for (let i = 0; i < this.programmData.length; i++) { //iterate through the programm data to where title is found
      if (this.selectedFilm === this.programmData[i].film.titel) {

        //set film information
        this.filmId = this.programmData[i].film.id;
        this.filmPicture = this.programmData[i].film.bildLink;
        this.filmName = this.selectedFilm;
        this.filmGenre = this.programmData[i].film.genre;
        this.filmActors = this.programmData[i].film.schauspieler;
        this.filmInformation = this.programmData[i].film.beschreibung;
        this.filmFSK = this.getFskImageUrl(this.programmData[i].film.fsk)
        this.filmTrailerURL = this.programmData[i].film.trailerLink;
        break;
      }
    }
    this.ngOnInit();
  }

  //Choose time based on chosen movie and city
  proofDisableShow() {
    if (this.selectedFilm != null && this.selectedCity != null) {
      this.disabledShow = false;
    }
  }

  setShowTimes() {
    this.shows = [];
    //get times for the chosen city and film
    for (let i = 0; i < this.programmData.length; i++) { //iterate through the programm data to where title is found
      let city = this.programmData[i].saal.kino.stadt; //get stadt
      let film = this.programmData[i].film.titel; //get film title
      if (this.selectedFilm === film && this.selectedCity === city) {
        let date = this.programmData[i].datum;
        let time = this.programmData[i].zeit;
        let showTime = date + " - " + time + " Uhr";
        this.shows.push(showTime);
      }
    }
  }

  proofDisabledButton() {
    if ((this.selectedCity && this.selectedFilm && this.selectedShow && this.selectedPayingMethod) != null) {
      this.disabledButton = false;
    }
  }

  // on button click
  buttonClick(){
    let id = this.gettingID();
    this.route.navigate(['/reservation', id]);
  }

  gettingID(): string {
    //getting id for chosen show
    for (let i = 0; i < this.programmData.length; i++) { //iterate through the programm data to where title is found
      let city = this.programmData[i].saal.kino.stadt; //get stadt
      let film = this.programmData[i].film.titel; //get film title
      let showTime = this.programmData[i].datum + " - " + this.programmData[i].zeit + " Uhr";
      if (this.selectedFilm === film && this.selectedCity === city && this.selectedShow === showTime) {
        return this.programmData[i].id;
      }
    }

    //if not found:
    return "not found"
  }





  //old:

  // Datepicker
  // Get Dates From Database
  minDate = new Date() //sets minimum date to todays date
  maxDate = new Date(2023,5,31);
  DatesToDisable = [new Date(2022,18,12),new Date(2022,14,12)]
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return !this.DatesToDisable.find(x=>x.getDay()==day)
  };
  // https://stackoverflow.com/questions/60043597/how-to-disable-angular-material-datepicker-dates-from-an-array-of-dates
  selectedDate!: Date;

  disabledDatepicker = true
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
  // disabledButton = true;
  // proofDisableButton(){
  //   if((this.selectedTime && this.selectedCity && this.selectedFilm && this.selectedDate) != null){
  //     this.disabledButton = false;
  //   }
  // }

}

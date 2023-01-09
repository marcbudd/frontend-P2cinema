import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent {

  opened = false;
  //password
  hide = true;
  passwortInsert:any;
  password = new FormControl('', [Validators.required]);
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'Passwort benötigt';
    }else{
      return null
    }
  }
  //Filmname
  filmnameInsert: any;
  filmname = new FormControl('', [Validators.required]);
  getErrorMessageFilmname() {
    if (this.filmname.hasError('required')) {
      return 'Filmname benötigt';
    }else{
      return null
    }
  }
  //Beschreibung
  beschreibungInsert: any;
  beschreibung = new FormControl('', [Validators.required]);
  getErrorMessageBeschreibung() {
    if (this.beschreibung.hasError('required')) {
      return 'Beschreibung benötigt';
    }else{
      return null
    }
  }
  //Genre
  genreInsert: any;
  genre = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.genre.hasError('required')) {
      return 'Genre benötigt';
    }
    return this.genre.hasError('email') ? 'Not a valid email' : '';
  }

  altersfreigabeInsert: any;
  altersfreigabe = new FormControl('', [Validators.required]);
  getErrorMessageAltersfreigabe() {
    if (this.altersfreigabe.hasError('required')) {
      return 'Alterfreigabe benötigt';
    }else{
      return null
    }
  }
  //Button
  buttonClicked(){
    if((this.genreInsert && this.filmnameInsert && this.beschreibungInsert && this.passwortInsert) != null){
      // if(){ proof if user exist insert to Database
      //
      // }
      //register to database and send mail
    }
  }

}

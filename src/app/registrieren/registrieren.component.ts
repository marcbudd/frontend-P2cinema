import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.component.html',
  styleUrls: ['./registrieren.component.scss']
})
export class RegistrierenComponent {

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
  //Vorname
  vornameInsert: any;
  vorname = new FormControl('', [Validators.required]);
  getErrorMessageVorname() {
    if (this.vorname.hasError('required')) {
      return 'Vorname benötigt';
    }else{
      return null
    }
  }
  //Nachname
  nachnameInsert: any;
  nachname = new FormControl('', [Validators.required]);
  getErrorMessageNachname() {
    if (this.vorname.hasError('required')) {
      return 'Nachname benötigt';
    }else{
      return null
    }
  }
  //Email
  emailInsert: any;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'E-Mail benötigt';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  //Button
  buttonClicked(){
    if((this.emailInsert && this.vornameInsert && this.nachnameInsert && this.passwortInsert) != null){
      // if(){ proof if user exist insert to Database
      //
      // }
      //register to database and send mail
    }
  }
}

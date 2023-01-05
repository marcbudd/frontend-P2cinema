import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filmadd',
  templateUrl: './filmadd.component.html',
  styleUrls: ['./filmadd.component.scss']
})
export class FilmaddComponent {
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
  //Stadt
  stadtInsert: any;
  stadt = new FormControl('', [Validators.required]);
  getErrorMessageStadt() {
    if (this.stadt.hasError('required')) {
      return 'Stadt benötigt';
    }else{
      return null
    }
  }
  //Adresse
  adresseInsert: any;
  adresse = new FormControl('', [Validators.required]);
  getErrorMessageAdresse() {
    if (this.adresse.hasError('required')) {
      return 'Adresse benötigt';
    }else{
      return null
    }
  }
  //Mail
  mailInsert: any;
  mail = new FormControl('', [Validators.required]);
  getErrorMessageMail() {
    if (this.mail.hasError('required')) {
      return 'E-Mail benötigt';
    }
    return this.mail.hasError('email') ? 'Not a valid email' : '';
  }

  telefonInsert: any;
  telefon = new FormControl('', [Validators.required]);
  getErrorMessageTelefon() {
    if (this.telefon.hasError('required')) {
      return 'Telefonnummer benötigt';
    }else{
      return null
    }
  }
  //Button
  buttonClicked(){
    if((this.stadtInsert && this.adresseInsert && this.mailInsert && this.telefonInsert) != null){
      // if(){ proof if user exist insert to Database
      //
      // }
      //register to database and send mail
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-einloggen',
  templateUrl: './einloggen.component.html',
  styleUrls: ['./einloggen.component.scss']
})
export class EinloggenComponent {
    //Email
    emailInsert: any;
    email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'E-Mail benötigt';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
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
  
}

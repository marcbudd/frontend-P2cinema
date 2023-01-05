import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-kaufen',
  templateUrl: './kaufen.component.html',
  styleUrls: ['./kaufen.component.scss']
})
export class KaufenComponent {

  selectedType!:string;
  disabledButton = true;

  proofDisableButton(){
    if((this.selectedType) != null){
      this.disabledButton = false;
    }
  }

  color: ThemePalette = 'primary';


}

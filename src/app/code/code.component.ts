import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute){
  }

  id:any;
  sitzanzahlproReihe:any;
  Breite1Person:any;
  buttonBackgroundColor:any ="green";
  leinwand = "assets/img/leinwand.png";
  selectedTarif:any;
  selectedSitz:any;
  tarife = [{tarif:"Normal"},{tarif:"Student"}];
  gesamtpreis = 0;


  rows =[
    {row: 1, seatnumber:1, seat: "singleseat",booked: true, id: 1, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3 ,gueltigerPreis: 5},
    {row: 1, seatnumber:2,seat: "singleseat",booked: true, id: 2, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3,gueltigerPreis: 5},
    {row: 1, seatnumber:3,seat: "singleseat",booked: true, id: 3, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3,gueltigerPreis: 5},
    {row: 1, seatnumber:4,seat: "singleseat",booked: false, id: 4, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3,gueltigerPreis: 5},
    {row: 1, seatnumber:5,seat: "singleseat",booked: false, id: 5, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3,gueltigerPreis: 5},
    {row: 1, seatnumber:6,seat: "singleseat",booked: false, id: 6, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3,gueltigerPreis: 5},
    {row: 1, seatnumber:7,seat: "singleseat",booked: false, id: 7, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3,gueltigerPreis: 5},
    {row: 1, seatnumber:8,seat: "singleseat",booked: false, id: 8, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 1, seatnumber:9,seat: "singleseat",booked: true, id: 9, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:1,seat: "singleseat",booked: true, id: 10, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:2,seat: "singleseat",booked: true, id: 11, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:3,seat: "singleseat",booked: false, id: 12, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:4,seat: "singleseat",booked: false, id: 13, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:5,seat: "singleseat",booked: false, id: 14, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:6,seat: "singleseat",booked: true, id: 15, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:7,seat: "singleseat",booked: true, id: 16, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:8,seat: "singleseat",booked: true, id: 17, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 2, seatnumber:9,seat: "singleseat",booked: false, id: 18, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 3, seatnumber:1,seat: "doubleseat",booked: false, id: 19, img:"assets/img/pairseat.png",Person:2,selected:false, tarif:"Normal",normal: 20,rabatt: 13, gueltigerPreis: 20},
    {row: 3, seatnumber:2,seat: "singleseat",booked: false, id: 20, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 3, seatnumber:3,seat: "doubleseat",booked: false, id: 21, img:"assets/img/pairseat.png",Person:2,selected:false, tarif:"Normal",normal: 20,rabatt: 13, gueltigerPreis: 20},
    {row: 3, seatnumber:4,seat: "singleseat",booked: false, id: 22, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 3, seatnumber:5,seat: "singleseat",booked: false, id: 23, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 3, seatnumber:6,seat: "singleseat",booked: false, id: 24, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    {row: 3, seatnumber:7,seat: "singleseat",booked: false, id: 25, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5}
  ];
}

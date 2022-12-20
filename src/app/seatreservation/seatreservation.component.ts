import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seatreservation',
  templateUrl: './seatreservation.component.html',
  styleUrls: ['./seatreservation.component.scss']
})
export class SeatreservationComponent {
  constructor(private route: ActivatedRoute){   
  }
  ngOnInit() : void{
    this.route.snapshot.paramMap.get('id');
    this.id = this.route.snapshot.paramMap.get('id');
    this.rauminforamtionen();
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
      {row: 3, seatnumber:7,seat: "singleseat",booked: false, id: 25, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
      {row: 4, seatnumber:1,seat: "singleseat",booked: false, id: 26, img:"assets/img/singleSeat.png",Person:1,selected:false, tarif:"Normal",normal: 5,rabatt: 3, gueltigerPreis: 5},
    ];
    legenditems = [
      {img:"assets/img/singleSeat.png",itemdescription:"Einzelsitz"},
      {img:"assets/img/pairseat.png",itemdescription:"Paarsitz"},
      {img:"assets/img/gebucht.png",itemdescription:"Gebucht"},
      {img:"assets/img/ausgewählt.png",itemdescription:"Ausgewählt"},
      {img:"assets/img/verfügbar.png",itemdescription:"Verfügbar"}
    ];
    

  rauminforamtionen(){
    //Datenabfrage
    this.sitzanzahlproReihe = 9;
    this.Breite1Person=100/this.sitzanzahlproReihe;
  }
  gettingSeatWidth(Person:any){
    return (Person*this.Breite1Person);
  }
  classnameForSeat(booked:any){
    if(booked){
      return "seatBooked"
    }else{
      return "seatNotBooked"
    }
  }
  selectedSeats:any;
  clickOnBookable(seat:any){
    if(seat.booked){
      return seat.selectedSeat;;
    }else{
      if(true){//seat selectable question to backend
        seat.selected = !seat.selected;
        if(seat.selected){
          //speichern das seat selected ist
          
        }else{
          // seat entfernen
        }
        return seat.selected;
        // if(seat.selected){
        //   return seat.selectedSeat;
        // }else{
        //   return !seat.selectedSeat;
        // }
      }else{
        return null; //return not selectable
      }
    }
  }
  
  tarifaenderung(){
    if((this.selectedTarif && this.selectedSitz)!= null){
      for(let i = 0; i < this.rows.length ; i++) {
        let tempProofText ="Reihe: "+ this.rows[i].row + " Sitz: " + this.rows[i].seatnumber +" ("+this.rows[i].seat+")";
        if(tempProofText == this.selectedSitz){
          this.rows[i].tarif = this.selectedTarif;
          if(this.rows[i].tarif == "Normal"){
            this.rows[i].gueltigerPreis = this.rows[i].normal;
          }else{
            this.rows[i].gueltigerPreis = this.rows[i].rabatt;
          }

        }
      }
    }
  }

  gesamtpreisberechnung(){
    this.gesamtpreis = 0;
    for(let i = 0; i < this.rows.length ; i++) {
      if(this.rows[i].selected){
          this.gesamtpreis = this.gesamtpreis + this.rows[i].gueltigerPreis
      }
    }
  }
}

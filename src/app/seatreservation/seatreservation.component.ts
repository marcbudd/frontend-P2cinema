import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, of} from "rxjs";


@Component({
  selector: 'app-seatreservation',
  templateUrl: './seatreservation.component.html',
  styleUrls: ['./seatreservation.component.scss']
})
export class SeatreservationComponent{

  id: any;
  seatData: any;
  showData: any;

  sitzanzahlproReihe:any;
  Breite1Person:any;
  hoeheSitz: any
  buttonBackgroundColor:any ="green";
  leinwand = "assets/img/leinwand.png";
  selectedTarif:any;
  selectedSitz:any;
  tarife = [{tarif:"Normal"},{tarif:"Student"}];
  gesamtpreis = 0;

  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private routeWeiter: Router, private http: HttpClient){
  }

  ngOnInit() : void{
    this.id = this.route.snapshot.paramMap.get('id');

    this.fetchShowData();
    this.fetchSeatData();

  }

  fetchShowData(){
    const url = `${environment.backendUrl}/vorstellung`

    this.http.get(url)
      .subscribe(response => {
        this.showData = response;
        console.log(this.showData)

        //set width of the seats per person
        this.sitzanzahlproReihe = this.showData[0].saal.sitzplan.sitze;
        this.Breite1Person=100/this.sitzanzahlproReihe;
        console.log(this.sitzanzahlproReihe);


      })

  }

  fetchSeatData(){
    const url = environment.backendUrl + "/vorstellungsplatz/findByVorstellung/" + this.id;

    this.http.get(url)
      .subscribe(response => {
        this.seatData = response;
        console.log(this.seatData)

        this.rows = [];
        for(let i = 0; i < this.seatData.length; i++){
          let tempRow = this.seatData[i].sitzplatz.reihe;
          if(tempRow > 5){
            //eigentlich 8 x 12 Sitze, bei 12 Sitzen in einer Reihe passen dort jedoch nur 5 Reihen hin, diese überspringe ich hier erstmal
            //Sitzplan sollte angepasst werden: mehr Sitze in einer Reihe: dann werden die Sitze kleiner und es passen mehr Reihen dort hin
            //Sitze mit einer Reihe größer 5 werden also nicht hinzugefügt und können hier dann nicht gebucht werden
            continue; //springt direkt wieder in den nächsten Schleifendurchlauf
          }
          let tempSeatnumber = this.seatData[i].sitzplatz.sitzplatzNummer;
          let tempSeat = this.getSingleOrDoubleSeat(this.seatData[i].sitzplatz.sitzplatzkategorie);
          let tempBooked = !(this.seatData[i].status === "FREI");
          let tempId = this.seatData[i].id;
          let tempImg = this.getSeatTypeImageUrl(this.seatData[i].sitzplatz.sitzplatzkategorie);
          let tempPerson = this.getPersonNumber(this.seatData[i].sitzplatz.sitzplatzkategorie);
          let tempSelected = false;
          let tempTarif = "Normal";
          let tempNormal = this.getPrice(this.seatData[i].sitzplatz.sitzplatzkategorie);
          // let tempNormal = this.seatData[i].sitzplatzkategorie;
          let tempRabatt = 2.0;
          let tempGueltigerPreis = tempNormal;

          let addSeat  =
            {row: tempRow, seatnumber:tempSeatnumber, seat: tempSeat,booked: tempBooked, id: tempId, img:tempImg,Person: tempPerson,selected:tempSelected, tarif:tempTarif,normal: tempNormal,rabatt: tempRabatt ,gueltigerPreis: tempGueltigerPreis}


          this.rows.push(addSeat);

        }

        //sorting
        this.rows.sort((a, b) => {
          if (a.row !== b.row) {
            return b.row - a.row;
          }
          return a.seatnumber - b.seatnumber;
        });


        console.log(this.rows);

      })


  }

  getPersonNumber(seatType: string): number {
    if(seatType === "LOVESEAT"){
      return 2
    }

    //all the other seats are for one person only
    return 1

  }

  getSeatTypeImageUrl(seatType: string): string {
    switch (seatType) {
      case "PARKETT":
        return "assets/img/singleSeat.png";
      case "LOVESEAT":
        return "assets/img/singleSeat.png";
      default:
        return "";

    }
  }

  getSingleOrDoubleSeat(seatType: string): string {
    if(seatType === "LOVESEAT"){
      return "doubleseat"
    }

    //all the other seats are for one person only
    return "singleseat"

  }

  getPrice(seatType: string): number {
    //hier eigentlich Datenbankabfrage einfügen!!
    switch (seatType) {
      case "PARKETT":
        return 10.5;
      case "LOVESEAT":
        return 19.0;
      case "ROLLSTUHL":
        return 10.5;
      case "SESSEL":
        return 14.0
      default:
        return 0.0;

    }
  }

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
  legenditems = [
    {img:"assets/img/singleSeat.png",itemdescription:"Einzelsitz"},
    {img:"assets/img/pairseat.png",itemdescription:"Paarsitz"},
    {img:"assets/img/gebucht.png",itemdescription:"Gebucht"},
    {img:"assets/img/ausgewählt.png",itemdescription:"Ausgewählt"},
    {img:"assets/img/verfügbar.png",itemdescription:"Verfügbar"}
  ];


  //Methoden zur Darstellung der Sitze
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

  selectedSeats: any;
  clickOnBookable(seat:any): boolean{

    //URLs definieren
    const id = seat.id;
    // const id = "12eab980-8868-43ee-b159-c8858929e2a9"
    console.log(id);
    const reserviereUrl = environment.backendUrl + "/vorstellungsplatz/" + id + "/reservieren";
    const freigabeUrl = environment.backendUrl + "/vorstellungsplatz/" + id + "/freigeben";

    //if the seat was already selected by me: "unclick" it
    if(seat.selected == true){
      seat.selected = false; //not selected
      seat.booked = false; //not booked either
      this.http.put(freigabeUrl, {}).subscribe(response => { //free seat in the backend too
        console.log(response);
      })
      this.gesamtpreisberechnung()
      return seat.booked;
    }

    //http request tries to reservate seat: if it is already reservated: error & isFree = false
    let isFree;
    this.http.put(reserviereUrl, {})
      .subscribe(response => {
        isFree = true;

        //if the seat is free
        seat.selected = true; //seat was booked by this user/the current user
        seat.booked = true; // seat is booked in the backend too
        this.gesamtpreisberechnung()
        return seat.selected;
      })

    return seat.selected;

        // isFree = false;
        // if(isFree == false){ //if the seat was not free
        //   //else: seat was just booked by another user: the seating plan was not updated yet
        //   seat.booked = true;
        //   seat.selected = false;
        //   return seat.selected


    // if(seat.booked){
    //   return seat.selectedSeat;
    // }else{
    //
    //   if(true){//seat selectable question to backend
    //     seat.selected = !seat.selected;
    //
    //     if(seat.selected){
    //       //speichern das seat selected ist
    //
    //     }else{
    //       // seat entfernen
    //     }
    //     return seat.selected;
    //     // if(seat.selected){
    //     //   return seat.selectedSeat;
    //     // }else{
    //     //   return !seat.selectedSeat;
    //     // }
    //   }else{
    //     return null; //return not selectable
    //   }
    // }


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

    this.gesamtpreisberechnung()
  }

  gesamtpreisberechnung(){
    this.gesamtpreis = 0;
    for(let i = 0; i < this.rows.length ; i++) {
      if(this.rows[i].selected){
        this.gesamtpreis = this.gesamtpreis + this.rows[i].gueltigerPreis
      }
    }
  }

  // on button "Kaufen" click
  kaufenClick(){
    let seatIds = [];
    for(let i = 0; i < this.rows.length; i++){ //iterate through every place
      if(this.rows[i].selected){ //the seats that have been selected by the user are needed
        let id = this.rows[i].id;
        let bucheUrl = environment.backendUrl + "/vorstellungsplatz/" + id + "/buchen"
        //seats needs to be set from "RESERVIERT" to "GEBUCHT"
        this.http.put(bucheUrl, {});
        seatIds.push(id);
      }
    }

    console.log(seatIds);

    //Ticket needs to be created
    let newTicketUrl = environment.backendUrl + "/ticket/add"
    let userId = "4ee4750a-5791-4f65-a54b-d10c023fcdd7" //this is a sample ID of a test user
    const newTicket = {
      benutzerId: userId,
      vorstellungsplatzIds: seatIds
    }
    let ticketId = "test"
    this.http.post(newTicketUrl, newTicket).subscribe(response => {
      let ticket: any
      ticket = response;
      ticketId = ticket.id;
      this.routeWeiter.navigate(['/ticketinfo', ticketId]);
    });


  }

  disabledButton = true;
  proofDisableButton(){
    if((this.selectedSeats) != null){
      this.disabledButton = false;
    }
  }
}

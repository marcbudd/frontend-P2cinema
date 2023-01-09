import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-ticketinfo',
  templateUrl: './ticketinfo.component.html',
  styleUrls: ['./ticketinfo.component.scss']
})
export class TicketinfoComponent {

  id: any;
  ticketData: any;
  vorstellungsplatzList: any;
  gesamtPreis: any;
  datum: any;
  zeit: any;

  //film information
  filmId = "";
  filmName = "";
  filmGenre = "";
  filmFSK = "";
  filmActors = "";
  filmPicture = "";
  filmInformation = "";
  filmTrailerURL = "";

  constructor(private http: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() : void{
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchTicket();

  }

  fetchTicket(){
    const url = environment.backendUrl + "/ticket/find/" + this.id
    this.http.get(url).subscribe(response => {
      this.ticketData = response;
      console.log(this.ticketData);

      //assign data
      this.gesamtPreis = this.ticketData.gesamtpreis;
      this.vorstellungsplatzList = this.ticketData.vorstellungsplatzList;
      this.filmName = this.ticketData.vorstellungsplatzList[0].vorstellung.film.titel;
      this.filmGenre = this.ticketData.vorstellungsplatzList[0].vorstellung.film.genre;
      this.filmFSK = this.ticketData.vorstellungsplatzList[0].vorstellung.film.fsk;
      this.filmActors = this.ticketData.vorstellungsplatzList[0].vorstellung.film.schauspieler;
      this.filmPicture = this.ticketData.vorstellungsplatzList[0].vorstellung.film.bildLink;
      this.filmInformation = this.ticketData.vorstellungsplatzList[0].vorstellung.film.beschreibung;
      this.filmTrailerURL = this.ticketData.vorstellungsplatzList[0].vorstellung.film.trailerLink;

      this.datum = this.ticketData.vorstellungsplatzList[0].vorstellung.datum;
      this.zeit = this.ticketData.vorstellungsplatzList[0].vorstellung.zeit;
    })
  }


}

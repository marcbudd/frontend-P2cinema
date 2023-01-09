import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import {AdminpageComponent} from "./adminpage/adminpage.component";
import { HeaderComponent } from './header/header.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgrammComponent } from './programm/programm.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { SpecialsComponent } from './specials/specials.component';
import { AnfahrtComponent } from './anfahrt/anfahrt.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { EinloggenComponent } from './einloggen/einloggen.component';
import { RegistrierenComponent } from './registrieren/registrieren.component';
import { SeatreservationComponent } from './seatreservation/seatreservation.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { FilmaddComponent} from "./filmadd/filmadd.component";
import { KundendatenComponent} from "./kundendaten/kundendaten.component";
import { KaufenComponent} from "./kaufen/kaufen.component";
import { CodeComponent} from "./code/code.component";
import { TicketinfoComponent } from './ticketinfo/ticketinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomescreenComponent,
    ProgrammComponent,
    SpecialsComponent,
    AnfahrtComponent,
    ImpressumComponent,
    EinloggenComponent,
    RegistrierenComponent,
    SeatreservationComponent,
    RegistrierungComponent,
    AdminpageComponent,
    FilmaddComponent,
    KundendatenComponent,
    KaufenComponent,
    CodeComponent,
    TicketinfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

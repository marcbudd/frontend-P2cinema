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
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

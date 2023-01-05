import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnfahrtComponent } from './anfahrt/anfahrt.component';
import { EinloggenComponent } from './einloggen/einloggen.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProgrammComponent } from './programm/programm.component';
import { RegistrierenComponent } from './registrieren/registrieren.component';
import { SeatreservationComponent } from './seatreservation/seatreservation.component';
import { RegistrierungComponent } from './registrierung/registrierung.component';
import { SpecialsComponent } from './specials/specials.component';
import {AdminpageComponent} from "./adminpage/adminpage.component";
import {KundendatenComponent} from "./kundendaten/kundendaten.component";
import {FilmaddComponent} from "./filmadd/filmadd.component";
import {KaufenComponent} from "./kaufen/kaufen.component";
import {CodeComponent} from "./code/code.component";

const routes: Routes = [
{path: '', component: HomescreenComponent},
{path: 'programm', component: ProgrammComponent},
{path: 'specials', component: SpecialsComponent},
{path: 'anfahrt', component: AnfahrtComponent},
{path: 'impressum', component: ImpressumComponent},
{path: 'einloggen', component: EinloggenComponent},
{path: 'registrieren', component: RegistrierenComponent},
{path: 'seatreservation/:id', component: SeatreservationComponent},
{path: 'registrierung', component: RegistrierungComponent},
  {path: 'homescreen', component: HomescreenComponent},
  {path: 'adminpage', component: AdminpageComponent},
  {path: 'kundendaten', component: KundendatenComponent},
  {path: 'filmadd', component: FilmaddComponent},
  {path: 'kaufen', component: KaufenComponent},
  {path: 'code', component: CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

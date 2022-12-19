import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnfahrtComponent } from './anfahrt/anfahrt.component';
import { EinloggenComponent } from './einloggen/einloggen.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ProgrammComponent } from './programm/programm.component';
import { RegistrierenComponent } from './registrieren/registrieren.component';
import { SeatreservationComponent } from './seatreservation/seatreservation.component';
import { SpecialsComponent } from './specials/specials.component';

const routes: Routes = [
{path: '', component: HomescreenComponent},
{path: 'programm', component: ProgrammComponent},
{path: 'specials', component: SpecialsComponent},
{path: 'anfahrt', component: AnfahrtComponent},
{path: 'impressum', component: ImpressumComponent},
{path: 'einloggen', component: EinloggenComponent},
{path: 'registrieren', component: RegistrierenComponent},
{path: 'seatreservation/:id', component: SeatreservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

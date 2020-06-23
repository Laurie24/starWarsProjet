import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {VaisseauxComponent} from './components/vaisseaux/vaisseaux.component';
import {PlanetsComponent} from './components/planets/planets.component';
import {PlanetDetailComponent} from './components/planet-detail/planet-detail.component';
import {VaisseauDetailComponent} from './components/vaisseau-detail/vaisseau-detail.component';
import {AddVaisseauComponent} from './components/add-vaisseau/add-vaisseau.component';
import {AddPlanetComponent} from './components/add-planet/add-planet.component';
import {EditPlanetComponent} from './components/edit-planet/edit-planet.component';
import {EditVaisseauComponent} from './components/edit-vaisseau/edit-vaisseau.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'vaisseaux', component: VaisseauxComponent },
  { path: 'vaisseaux/add', component: AddVaisseauComponent },
  { path: 'vaisseaux/:id', component: VaisseauDetailComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/add', component: AddPlanetComponent},
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'planets/update/:id', component: EditPlanetComponent },
  { path: 'vaisseaux/update/:id', component: EditVaisseauComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

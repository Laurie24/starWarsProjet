import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../../services/planet.service';
import {Planet} from '../../models/planet';
import {ToastrService} from 'ngx-toastr';
import {LoggeurService} from '../../services/loggeur.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets: Planet[];
  constructor(private planetService: PlanetService, private toastr: ToastrService, private loggeurService: LoggeurService) { }

  ngOnInit(): void {
    this.planets = this.planetService.getAllPlanets();
    this.loggeurService.consoleLoader();
  }
  deletePlanete(planete: Planet){
    this.planets = this.planetService.deletePlanete(planete);
    this.toastr.success('La planète a bien été supprimée!', 'Succès!');
  }


}

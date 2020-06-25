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
  isLoading: boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this.planetService.getAllPlanets().subscribe((data: Planet[]) => {
      this.planets = data;
      this.isLoading = false;
      this.loggeurService.consoleLoader();
    });
  }
  deletePlanete(planete: Planet){
    this.isLoading = true;
    this.planetService.deletePlanete(planete.id).subscribe(data => {
      this.planetService.getAllPlanets().subscribe(newDataPlanet => {
        this.planets = newDataPlanet;
        this.isLoading = false;
        this.toastr.success('La planète a bien été supprimée!', 'Succès!');
      });
    });
  }


}

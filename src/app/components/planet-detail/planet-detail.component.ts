import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  id: number;
  planet: Planet;
  isLoading: boolean;
  constructor(private route: ActivatedRoute, private planetService: PlanetService) { }

  ngOnInit(){
    this.isLoading = true;
    this.planetService.getOnePlanetById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Planet) => {
      this.planet = data;
      this.isLoading = false;
    });
  }

}

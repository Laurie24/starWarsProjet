import { Component, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanetService} from '../../services/planet.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {
  planet: Planet;
  isLoading: boolean;
  constructor(private activatedRoute: ActivatedRoute, private planetService: PlanetService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.planetService.getOnePlanetById(id).subscribe((data: Planet) => {
      this.planet = data;
      this.isLoading = false;
    });
  }

  editPlanet(){
    this.planetService.edit(this.planet).subscribe(then => {
      this.router.navigate(['/planets']);
    });
    this.toastr.success('La planète a bien été éditée!', 'Succès!');
  }
}

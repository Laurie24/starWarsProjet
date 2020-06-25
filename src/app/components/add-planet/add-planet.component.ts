import { Component, OnInit } from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-planet',
  templateUrl: './add-planet.component.html',
  styleUrls: ['./add-planet.component.css']
})
export class AddPlanetComponent implements OnInit {
  planet = new Planet();
  isLoading: boolean;
  constructor( private  planetService: PlanetService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  submitPlanet(): void{
    this.isLoading = true;
    this.planetService.addPlanet(this.planet).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/planets']);
      this.toastr.success('La planète a bien été ajoutée!', 'Succès!');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {VaisseauService} from '../../services/vaisseau.service';
import {Vaisseau} from '../../models/vaisseau';
import {Planet} from '../../models/planet';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
  vaisseaux: Vaisseau[];
  constructor(private vaisseauService: VaisseauService, private toastr: ToastrService) { }
  isLoading: boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this.vaisseauService.getAllVehiculs().subscribe((data: Vaisseau[]) => {
      this.vaisseaux = data;
      this.isLoading = false;
    });
  }
  deleteVaisseau(vaisseau: Vaisseau){
    this.isLoading = true;
    this.vaisseauService.deleteVaisseau(vaisseau.id).subscribe(data => {
      this.vaisseauService.getAllVehiculs().subscribe(newDataPlanet => {
        this.vaisseaux = newDataPlanet;
        this.isLoading = false;
        this.toastr.success('Le vaisseau a bien été supprimé!', 'Succès!');
      });
    });
  }

}

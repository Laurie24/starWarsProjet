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

  ngOnInit(): void {
    this.vaisseaux = this.vaisseauService.getAllVehiculs();
  }
  deleteVaisseau(vaisseau: Vaisseau){
    this.vaisseaux = this.vaisseauService.deleteVaisseau(vaisseau);
    this.toastr.success('Le vaisseau a bien été supprimée!', 'Succès!');
  }

}

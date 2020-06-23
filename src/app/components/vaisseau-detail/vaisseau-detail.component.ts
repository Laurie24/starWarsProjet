import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vaisseau} from '../../models/vaisseau';
import {VaisseauService} from '../../services/vaisseau.service';

@Component({
  selector: 'app-vaisseau-detail',
  templateUrl: './vaisseau-detail.component.html',
  styleUrls: ['./vaisseau-detail.component.css']
})
export class VaisseauDetailComponent implements OnInit {
  id: number;
  vehicul: Vaisseau;
  constructor(private route: ActivatedRoute, private  vehiculService: VaisseauService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.vehicul = this.vehiculService.getOneVehiculById(this.id);
  }

}

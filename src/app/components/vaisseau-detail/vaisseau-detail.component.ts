import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Vaisseau} from '../../models/vaisseau';
import {VaisseauService} from '../../services/vaisseau.service';
import {Planet} from '../../models/planet';

@Component({
  selector: 'app-vaisseau-detail',
  templateUrl: './vaisseau-detail.component.html',
  styleUrls: ['./vaisseau-detail.component.css']
})
export class VaisseauDetailComponent implements OnInit {
  id: number;
  vehicul: Vaisseau;
  isLoading: boolean;
  constructor(private route: ActivatedRoute, private  vehiculService: VaisseauService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.vehiculService.getOneVehiculById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Vaisseau) => {
      this.vehicul = data;
      this.isLoading = false;
    });
  }

}

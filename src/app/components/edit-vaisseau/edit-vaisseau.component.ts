import { Component, OnInit } from '@angular/core';
import {Vaisseau} from '../../models/vaisseau';
import {ActivatedRoute, Router} from '@angular/router';
import {VaisseauService} from '../../services/vaisseau.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-vaisseau',
  templateUrl: './edit-vaisseau.component.html',
  styleUrls: ['./edit-vaisseau.component.css']
})
export class EditVaisseauComponent implements OnInit {
  vaisseau: Vaisseau;
  constructor(private activatedRoute: ActivatedRoute, private vaisseauService: VaisseauService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.vaisseau = this.vaisseauService.getOneVehiculById(id);
  }

  editVaisseau(){
    this.vaisseauService.edit(this.vaisseau);
    this.router.navigate(['/vaisseaux']);
    this.toastr.success('Le vaisseau a bien été éditée!', 'Succès!');
  }

}

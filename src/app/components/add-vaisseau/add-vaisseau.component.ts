import { Component, OnInit } from '@angular/core';
import {Vaisseau} from '../../models/vaisseau';
import {VaisseauService} from '../../services/vaisseau.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-vaisseau',
  templateUrl: './add-vaisseau.component.html',
  styleUrls: ['./add-vaisseau.component.css']
})
export class AddVaisseauComponent implements OnInit {
  vehicul: Vaisseau;
  isLoading: boolean;

  constructor(private vaisseauService: VaisseauService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.vehicul = new Vaisseau();
  }

  submitVaisseau(): void{
    this.isLoading = true;
    this.vaisseauService.addVaisseau(this.vehicul).subscribe(then => {
      this.isLoading = false;
      this.router.navigate(['/vaisseaux']);
      this.toastr.success('Le vaisseau a bien été ajoutée!', 'Succès!');
    });
}
}

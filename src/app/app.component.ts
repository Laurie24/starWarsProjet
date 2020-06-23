import { Component } from '@angular/core';
import {LoggeurService} from './services/loggeur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sWars';
  todayDate = new Date();
  developpeuse = 'Laurie Villeneuve';
  constructor() {
  }
}

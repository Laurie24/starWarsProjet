import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggeurService {
  constructor() {
  }
  consoleLoader(){
    console.log('Coucou');
  }
}

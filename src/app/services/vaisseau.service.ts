import { Injectable } from '@angular/core';
import {Vaisseau} from '../models/vaisseau';
import {Planet} from '../models/planet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaisseauService {
  vehiculs = [
    new Vaisseau(1, 'falcon.jpg','Faucon millenium', '34.75m', true, 10,'An extensively modified Corellian light freighter, the Millennium Falcon is a legend in smuggler circles and is coveted by many for being the fastest hunk of junk in the galaxy. Despite her humble origins and shabby exterior, the ship that made the Kessel Run in less than 12 parsecs has played a role in some of the greatest victories of the Rebel Alliance and the New Republic. The Falcon looks like a worn-out junker, but beneath her hull she’s full of surprises. A succession of owners, including Lando Calrissian and Han Solo, have made special modifications that boosted the freighter’s speed, shielding and firepower to impressive – and downright illegal – levels. The price of such tinkering? The Falcon can be unpredictable, with her hyperdrive particularly balky. Despite her flaws, she’s beloved by her owners – Han Solo and Chewbacca spent years searching the galaxy for the ship they once called home, rejoicing when they finally reclaimed her.'),
    new Vaisseau(2, 'xwing.jpeg','XWing', '12.48m', false, 2,'The Incom T-70 X-wing is the signature combat craft of the Resistance’s Starfighter Corps. Faster than the Alliance-era T-65s, Resistance X-wings are maneuverable enough to engage TIE fighters in dogfights, yet still hold considerable firepower. The credit-strapped Resistance relies on X-wings donated or lent by sympathetic New Republic senators and local security forces. Poe Dameron flew a customized, dark-hulled X-wing called Black One.')
  ];
  apiURL = 'http://localhost:3000/vaisseaux';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {
    this.vehiculs = [];
  }

  getAllVehiculs(): Observable<Vaisseau[]> {
    return this.http.get<Vaisseau[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getOneVehiculById(id: number): Observable<Vaisseau> {
    return this.http.get<Vaisseau>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addVaisseau(vehicul: Vaisseau): Observable<Vaisseau>{
    return this.http.post<Vaisseau>(this.apiURL, vehicul, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteVaisseau(id: number): Observable<Vaisseau>{
    return this.http.delete<Vaisseau>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(vaisseau: Vaisseau){
    return this.http.put<Vaisseau>(this.apiURL + '/' + vaisseau.id , vaisseau, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

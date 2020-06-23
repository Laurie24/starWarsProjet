import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';
import {callbackify} from 'util';


@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = [
    new Planet(1, 'alderaan.jpeg','Alderaan', 0, 'Galactic Empire', 199, 'If ever one needed an example of the irredeemable evil that was the Empire, turn to the shattered remains of Alderaan. An influential world, Alderaan was represented in the waning days of the Republic by such venerated politicians as Bail Antilles and Bail Organa. A peaceful world, Alderaan was bereft of weaponry in an era of galactic strife. It was not without spirit, however. Alderaan was one of the earliest supporters of the Alliance to Restore the Republic, though its officials prudently kept all ties to the Rebellion secret. Despite such discretion, the Empire knew it to be a haven of Rebel activity, and Grand Moff Tarkin targeted the beautiful world for reprisal as soon as the Death Star was operational. The massive primary weapon of the battle station obliterated Alderaan, leaving only a lifeless asteroid field behind.'),
    new Planet(2, 'tatooine.jpeg','Tatooine', 100, 'Hutt Clan', 1000, 'A harsh desert world orbiting twin suns in the galaxy’s Outer Rim, Tatooine is a lawless place ruled by Hutt gangsters. Many settlers scratch out a living on moisture farms, while spaceport cities such as Mos Eisley and Mos Espa serve as home base for smugglers, criminals, and other rogues. Tatooine’s many dangers include sandstorms, bands of savage Tusken Raiders, and carnivorous krayt dragons. The planet is also known for its dangerous Podraces, rampant gambling, and legalized slavery. Anakin Skywalker and Luke Skywalker both grew up on Tatooine, and Obi-Wan Kenobi spent years in hiding on this desolate world.')
  ];
  constructor() { }
  getAllPlanets(): Planet[] {
    return this.planets;
  }
  getOnePlanetById(id: number): Planet {
    return this.planets.filter(planet => planet.id === id)[0];
  }
  addPlanet(planet: Planet): void{
    this.planets.push(planet);
  }
  deletePlanete(planet: Planet): Planet[]{
    this.planets = this.planets.filter(planetToDelete => planet !== planetToDelete);
    return this.planets;
  }
  edit(planet: Planet): Planet[]{
    this.planets.filter(planetToUpdate => planet === planetToUpdate)[0] = planet;
    return this.planets;
  }
}

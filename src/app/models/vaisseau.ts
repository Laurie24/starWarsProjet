export class Vaisseau {
  id: number;
  photo: string;
  nom: string;
  dimension: string;
  lightSpeed: boolean;
  nbPassenger: number;
  description: string;
  constructor(id: number = null, photo: string = null, nom: string = null, dimension: string = null, lightSpeed: boolean = null, nbPassenger: number = null, description: string = null) {
    this.id = id;
    this.photo = photo;
    this.nom = nom;
    this.dimension = dimension;
    this.lightSpeed = lightSpeed;
    this.nbPassenger = nbPassenger;
    this.description = description;
  }
}

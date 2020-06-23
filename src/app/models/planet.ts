export class Planet {
  id: number;
  photo: string;
  nom: string;
  nbHabitant: number;
  allegiance: string;
  nbKmTerre: number;
  description: string;
  constructor(id: number = null, photo: string = null, nom: string = null, nbHabitant: number = null , allegiance: string = null , nbKmTerre: number = null, description: string = null) {
    this.id = id;
    this.photo = photo;
    this.nom = nom;
    this.nbHabitant = nbHabitant;
    this.allegiance = allegiance;
    this.nbKmTerre = nbKmTerre;
    this.description = description;
  }
}


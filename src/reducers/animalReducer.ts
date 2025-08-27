import type { Animal } from "../models/Animal";
import { setItem } from "../utils/localStorage";

export enum AnimalActionType {
  feedAnimal = 'FEEDANIMAL'
}

export type AnimalAction = {
  type: AnimalActionType;
  payload: string;
}

export const AnimalReducer = (animals: Animal[], action: AnimalAction) => {
  switch (action.type) {
    case AnimalActionType.feedAnimal: {
      const updatedAnimals = animals.map(animal => 
        animal.id === +action.payload 
          ? { ...animal, lastFed: new Date().toISOString() }
          : animal
      );

      setItem('animals', updatedAnimals)

      return {...animals, animals: updatedAnimals}
    }
    
    default:
      return animals 
  }
}
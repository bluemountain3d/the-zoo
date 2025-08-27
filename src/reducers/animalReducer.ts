import type { Animal } from "../models/Animal";

export enum AnimalActionType {
  feedAnimal = 'FEEDANIMAL'
}

export type AnimalAction = {
  type: AnimalActionType;
  payload: string;
}

export const AnimalReducer = (animals: Animal[], action: AnimalAction) => {
  switch (action.type) {
    case AnimalActionType.feedAnimal:
      return animals.map((animal) => {
        if (animal.id === +action.payload) {
          return {...animal, lastFed: new Date().toISOString()}
        }
        return animal;
      });
    
    default:
      return animals
  }
}
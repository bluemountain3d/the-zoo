import type { Animal } from "../models/Animal"
import { getAnimals } from "../services/animalService";

export type AnimalsLoader = {
  animals: Animal[];
}

export const animalsLoader = async (): Promise<AnimalsLoader> => {
  console.log('Loader called');
  try {
    const animals = await getAnimals();
    console.log('Animals loaded:', animals);
    return { animals };
  } catch (error) {
    console.error('Failed to load animals:', error);
    return { animals: [] };
  }  
}
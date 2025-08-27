import type { Animal } from "../models/Animal";
import { getItem, setItem } from "../utils/localStorage";
import { get } from "./serviceBase";

const BASE_URL = import.meta.env.VITE_API_BASE;

export const getAnimals = async (): Promise<Animal[]> => {
  // Försök hämta från localstorage
  const cachedAnimals = getItem('animals');
  if (cachedAnimals) {
    return cachedAnimals as Animal[];
  }

  // Om data inte finns i localstorage, hämta från API och spara i localstorage
  const res = await get<Animal[]>(BASE_URL);
  setItem('animals', res);
  return res;
}

export const getAnimalById = async (id: number): Promise<Animal | undefined> => {
  // Check för att se om animals finns i localstorage
  const cachedAnimals = getItem('animals');
  if (cachedAnimals) {
    const animals = cachedAnimals as Animal[];
    return animals.find(animal => animal.id === id);
  }

  // Om inte data finns
  return undefined
}
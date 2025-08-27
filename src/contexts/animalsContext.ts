import { createContext, type Dispatch } from "react";
import type { Animal } from "../models/Animal";
import type { AnimalAction } from "../reducers/animalReducer";

/**
 * Den här filen skapar ett tomt context med rätt typning och ska användas i en Provider-komponent
 */

export type AnimalsContextType = {
  animals: Animal[];
  dispatch: Dispatch<AnimalAction>;
};

export const AnimalsContext = createContext<AnimalsContextType | null>(null);
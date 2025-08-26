import { createContext } from "react";
import type { Animal } from "../models/Animal";

export type AnimalsContextType = {
  animals: Animal[]
};

export const AnimalsContext = createContext<AnimalsContextType>({
  animals: []
});
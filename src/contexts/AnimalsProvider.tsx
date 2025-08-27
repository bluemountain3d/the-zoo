import { type ReactNode, useReducer } from "react";
import type { Animal } from "../models/Animal";
import { AnimalReducer } from "../reducers/animalReducer";
import { AnimalsContext } from "./animalsContext";

/**
 * Den här komponenten hanterar djurens "globala State".
 * Tillhandahåller state och dispatch från "animalReducer" till hela applikationen via AnimalContext.
 */

type AnimalsProviderProps = {
  initialAnimals: Animal[];
  children: ReactNode;
}

export const AnimalsProvider = ({initialAnimals, children}: AnimalsProviderProps) => {
  const [animals, dispatch] = useReducer(AnimalReducer, initialAnimals);

  return (
    <AnimalsContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalsContext.Provider>
  )
}
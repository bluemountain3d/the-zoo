export const setItem = (key: string, value: unknown) => {
  // Använder type `unknown` för att kunna ange vilken datatyp som helst som sedan ska göras till en string i funktionen
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

export const getItem = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (error) {
    console.log(error);
  }
}
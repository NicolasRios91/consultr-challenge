import { ALL_HEROES_API } from "./constants";

export const getHeroes = async () => {
  try {
    const data = await fetch(ALL_HEROES_API);
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    throw error;
  }
};

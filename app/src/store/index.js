import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "../features/heroes";

export const store = configureStore({
  reducer: { heroes: heroesReducer },
});

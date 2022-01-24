import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/Recipe";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

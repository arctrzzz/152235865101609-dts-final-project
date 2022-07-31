import { configureStore } from "@reduxjs/toolkit";
import sliceRecipe from "../features/recipe/sliceRecipe";

export const store = configureStore({
  reducer: {
    recipe: sliceRecipe,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialStateRecipe = {
  title: "judul awal",
  menu: "menu awal",
};
const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialStateRecipe,
  reducers: {
    detailTitleReducer(state, keyword) {
      state.title = keyword;
    },
    detailMenuReducer(state) {
      state.menu = "menu baru";
    },
  },
});

//action
export const { detailTitleReducer, detailMenuReducer } = recipeSlice.actions;

//selector
export const selectTitle = (state) => state.recipe.title;
export const selectMenu = (state) => state.recipe.menu;

//reducer

export default recipeSlice.reducer;

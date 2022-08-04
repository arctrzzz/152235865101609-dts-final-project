import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateRecipe = {
  vegetarian: false,
  vegan: false,
  glutenFree: true,
  dairyFree: true,
  veryHealthy: true,
  cheap: false,
  veryPopular: true,
  sustainable: false,
  lowFodmap: false,
  weightWatcherSmartPoints: 3,
  gaps: "no",
  preparationMinutes: -1,
  cookingMinutes: -1,
  aggregateLikes: 361,
  healthScore: 89,
  creditsText: "Afrolems",
  license: "CC BY 4.0",
  sourceName: "Afrolems",
  pricePerServing: 908.06,
  extendedIngredients: [
    {
      id: 2009,
      aisle: "Spices and Seasonings",
      image: "chili-powder.jpg",
      consistency: "SOLID",
      name: "chili powder",
      nameClean: "chili powder",
      original: "1 teaspoon of chili powder",
      originalName: "chili powder",
      amount: 1.0,
      unit: "teaspoon",
      meta: [],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
        metric: {
          amount: 1.0,
          unitShort: "tsp",
          unitLong: "teaspoon",
        },
      },
    },
    {
      id: 11215,
      aisle: "Produce",
      image: "garlic.png",
      consistency: "SOLID",
      name: "garlic",
      nameClean: "garlic",
      original: "2 cloves of garlic",
      originalName: "garlic",
      amount: 2.0,
      unit: "cloves",
      meta: [],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "cloves",
          unitLong: "cloves",
        },
        metric: {
          amount: 2.0,
          unitShort: "cloves",
          unitLong: "cloves",
        },
      },
    },
    {
      id: 10014412,
      aisle: "Frozen",
      image: "ice-cubes.png",
      consistency: "SOLID",
      name: "ice cubes",
      nameClean: "ice",
      original: "Seasoning Cubes",
      originalName: "Seasoning Cubes",
      amount: 1.0,
      unit: "serving",
      meta: [],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "serving",
          unitLong: "serving",
        },
        metric: {
          amount: 1.0,
          unitShort: "serving",
          unitLong: "serving",
        },
      },
    },
    {
      id: 9159,
      aisle: "Produce",
      image: "lime.jpg",
      consistency: "SOLID",
      name: "limes",
      nameClean: "lime",
      original: "3 Limes",
      originalName: "Limes",
      amount: 3.0,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 3.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 3.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 11821,
      aisle: "Produce",
      image: "red-pepper.jpg",
      consistency: "SOLID",
      name: "red bell pepper",
      nameClean: "red pepper",
      original: "1 Red bell pepper",
      originalName: "Red bell pepper",
      amount: 1.0,
      unit: "",
      meta: ["red"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 1.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 10011282,
      aisle: "Produce",
      image: "red-onion.png",
      consistency: "SOLID",
      name: "red onion",
      nameClean: "red onion",
      original: "1 large Red onion",
      originalName: "Red onion",
      amount: 1.0,
      unit: "large",
      meta: ["red"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "large",
          unitLong: "large",
        },
        metric: {
          amount: 1.0,
          unitShort: "large",
          unitLong: "large",
        },
      },
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consistency: "SOLID",
      name: "salt",
      nameClean: "table salt",
      original: "2 tablespoons of Salt",
      originalName: "Salt",
      amount: 2.0,
      unit: "tablespoons",
      meta: [],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
        metric: {
          amount: 2.0,
          unitShort: "Tbsps",
          unitLong: "Tbsps",
        },
      },
    },
    {
      id: 10011819,
      aisle: "Produce;Ethnic Foods",
      image: "habanero-pepper.jpg",
      consistency: "SOLID",
      name: "scotch bonnet chili peppers",
      nameClean: "habanero chili",
      original: "4 scotch bonnet peppers",
      originalName: "scotch bonnet peppers",
      amount: 4.0,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 4.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 4.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 90560,
      aisle: "Gourmet",
      image: "escargot.png",
      consistency: "SOLID",
      name: "snails",
      nameClean: "escargot",
      original: "8 snails",
      originalName: "snails",
      amount: 8.0,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 8.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 8.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 11529,
      aisle: "Produce",
      image: "tomato.png",
      consistency: "SOLID",
      name: "tomatoes",
      nameClean: "tomato",
      original: "5 Large tomatoes",
      originalName: "Large tomatoes",
      amount: 5.0,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 5.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 5.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 4513,
      aisle: null,
      image: null,
      consistency: "SOLID",
      name: "vegetable cooking oil",
      nameClean: null,
      original: "1 cooking spoon of Vegetable Oil",
      originalName: "cooking spoon of Vegetable Oil",
      amount: 1.0,
      unit: "",
      meta: [],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 1.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
  ],
  id: 716381,
  title: "Nigerian Snail Stew",
  readyInMinutes: 45,
  servings: 1,
  sourceUrl: "http://www.afrolems.com/2015/12/08/nigerian-snail-stew/",
  image: "https://spoonacular.com/recipeImages/716381-556x370.jpg",
  imageType: "jpg",
  summary:
    'Nigerian Snail Stew might be just the main course you are searching for. For <b>$9.08 per serving</b>, this recipe <b>covers 45%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>363 calories</b>, <b>23g of protein</b>, and <b>5g of fat</b> each. Plenty of people made this recipe, and 361 would say it hit the spot. If you have chili powder, snails, limes, and a few other ingredients on hand, you can make it. To use up the ice cubes you could follow this main course with the <a href="https://spoonacular.com/recipes/nectarine-blackberry-and-pecan-sundaes-50465">Nectarine, Blackberry, and Pecan Sundaes</a> as a dessert. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. It is a good option if you\'re following a <b>gluten free, dairy free, and whole 30</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 99%</b>. This score is spectacular. Try <a href="https://spoonacular.com/recipes/nigerian-kidney-bean-stew-with-a-peanut-sauce-112643">Nigerian Kidney Bean Stew With a Peanut Sauce</a>, <a href="https://spoonacular.com/recipes/little-snail-rolls-369096">Little Snail Rolls</a>, and <a href="https://spoonacular.com/recipes/maple-snail-cookies-76877">Maple Snail Cookies</a> for similar recipes.',
  cuisines: [],
  dishTypes: ["lunch", "main course", "main dish", "dinner"],
  diets: ["gluten free", "dairy free", "paleolithic", "primal", "whole 30"],
  occasions: ["fall", "winter"],
  winePairing: {},
  instructions:
    "<p>In a bowl, wash the snails with lime and salt till all the slime is gone. Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat.Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat.Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat.Add your seasoning cubes and taste for salt.Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat.Serve with Rice, Pasta, Plantain, Yams or Potatoes.</p>",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "In a bowl, wash the snails with lime and salt till all the slime is gone.",
          ingredients: [
            {
              id: 90560,
              name: "escargot",
              localizedName: "escargot",
              image: "escargot.png",
            },
            {
              id: 9159,
              name: "lime",
              localizedName: "lime",
              image: "lime.jpg",
            },
            {
              id: 2047,
              name: "salt",
              localizedName: "salt",
              image: "salt.jpg",
            },
          ],
          equipment: [
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
          ],
        },
        {
          number: 2,
          step: "Place the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat.",
          ingredients: [
            {
              id: 0,
              name: "seasoning cube",
              localizedName: "seasoning cube",
              image: "stock-cube.jpg",
            },
            {
              id: 2009,
              name: "chili powder",
              localizedName: "chili powder",
              image: "chili-powder.jpg",
            },
            {
              id: 10211821,
              name: "bell pepper",
              localizedName: "bell pepper",
              image: "bell-pepper-orange.png",
            },
            {
              id: 11529,
              name: "tomato",
              localizedName: "tomato",
              image: "tomato.png",
            },
            {
              id: 10111333,
              name: "peppers",
              localizedName: "peppers",
              image: "green-pepper.jpg",
            },
            {
              id: 11215,
              name: "garlic",
              localizedName: "garlic",
              image: "garlic.png",
            },
            {
              id: 11282,
              name: "onion",
              localizedName: "onion",
              image: "brown-onion.png",
            },
            {
              id: 10014052,
              name: "scotch whiskey",
              localizedName: "scotch whiskey",
              image: "whiskey-bottle.jpg",
            },
            {
              id: 14412,
              name: "water",
              localizedName: "water",
              image: "water.png",
            },
            {
              id: 2047,
              name: "salt",
              localizedName: "salt",
              image: "salt.jpg",
            },
            {
              id: 4582,
              name: "cooking oil",
              localizedName: "cooking oil",
              image: "vegetable-oil.jpg",
            },
          ],
          equipment: [
            {
              id: 404732,
              name: "wooden spoon",
              localizedName: "wooden spoon",
              image: "wooden-spoon.jpg",
            },
            {
              id: 404752,
              name: "pot",
              localizedName: "pot",
              image: "stock-pot.jpg",
            },
          ],
          length: {
            number: 18,
            unit: "minutes",
          },
        },
        {
          number: 3,
          step: "Pour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat.",
          ingredients: [
            {
              id: 1002030,
              name: "pepper",
              localizedName: "pepper",
              image: "pepper.jpg",
            },
            {
              id: 11529,
              name: "tomato",
              localizedName: "tomato",
              image: "tomato.png",
            },
          ],
          equipment: [],
          length: {
            number: 10,
            unit: "minutes",
          },
        },
        {
          number: 4,
          step: "Pour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat.",
          ingredients: [
            {
              id: 1006615,
              name: "stock",
              localizedName: "stock",
              image: "chicken-broth.png",
            },
          ],
          equipment: [],
          length: {
            number: 5,
            unit: "minutes",
          },
        },
        {
          number: 5,
          step: "Add your seasoning cubes and taste for salt.",
          ingredients: [
            {
              id: 0,
              name: "seasoning cube",
              localizedName: "seasoning cube",
              image: "stock-cube.jpg",
            },
            {
              id: 2047,
              name: "salt",
              localizedName: "salt",
              image: "salt.jpg",
            },
          ],
          equipment: [],
        },
        {
          number: 6,
          step: "Add your snails and stir in and allow to stew for 2-4 minutes more on medium heat.",
          ingredients: [
            {
              id: 90560,
              name: "escargot",
              localizedName: "escargot",
              image: "escargot.png",
            },
            {
              id: 0,
              name: "stew",
              localizedName: "stew",
              image: "",
            },
          ],
          equipment: [],
          length: {
            number: 4,
            unit: "minutes",
          },
        },
        {
          number: 7,
          step: "Serve with Rice, Pasta, Plantain, Yams or Potatoes.",
          ingredients: [
            {
              id: 9277,
              name: "plantain",
              localizedName: "plantain",
              image: "plantains.jpg",
            },
            {
              id: 11352,
              name: "potato",
              localizedName: "potato",
              image: "potatoes-yukon-gold.png",
            },
            {
              id: 20420,
              name: "pasta",
              localizedName: "pasta",
              image: "fusilli.jpg",
            },
            {
              id: 20444,
              name: "rice",
              localizedName: "rice",
              image: "uncooked-white-rice.png",
            },
            {
              id: 11601,
              name: "yam",
              localizedName: "yam",
              image: "sweet-potato.png",
            },
          ],
          equipment: [],
        },
      ],
    },
  ],
  originalId: null,
  spoonacularSourceUrl: "https://spoonacular.com/nigerian-snail-stew-716381",
};

// {
//   title: "judul awal",
//   readyInMinutes: "waktu persiapan",
//   keyword: "resep-bakwan-sayur-renyah",
//   servings: "test",
//   image: "",
//   analyzedInstructions: [
//     {
//       steps: [
//         {
//           number: "",
//           step: "",
//           ingredients: [{ id: "", name: "" }],
//         },
//       ],
//     },
//   ],
//   instructions: "",
//   summary: "",
// };

const baseUrl = "https://api.spoonacular.com/recipes/";
const detailUrl = "/information?includeNutrition=false&";
const apikey = "apiKey=11ecbfcc9de34a729a9bd94fd062d1a9";

export const recipeAsync = createAsyncThunk(
  "recipe/fetchrecipe",
  async (id) => {
    const response = await axios.get(`${baseUrl}${id}${detailUrl}${apikey}`);
    return response.data;
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialStateRecipe,
  reducers: {
    detailIdsearch(state, action) {
      state.id = action.payload;
    },
    detailTitleReducer(state, action) {
      state.title = action.payload.title;
    },
    detailImageReducer(state, action) {
      state.image = action.payload.image;
    },
    detailStepReducer(state, action) {
      state.instructions = action.payload;
    },
    detailIngredientsReducer(state, action) {
      state.extendedIngredients = action.payload.extendedIngredients;
    },

    detailAllReducer(state, action) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(recipeAsync.pending, () => {
        console.log("loading ...");
      })
      .addCase(recipeAsync.fulfilled, (state, action) => {
        state = action.payload;
        console.log(state);
      })
      .addCase(recipeAsync.rejected, () => {
        console.log("terjadi error");
      });
  },
});

//action
export const { detailTitleReducer, detailIdsearch, detailAllReducer } =
  recipeSlice.actions;

//selector
export const selectTitle = (state) => state.recipe.title;
export const selectId = (state) => state.recipe.id;
export const selectImage = (state) => state.recipe.image;
export const selectinstruction = (state) => state.recipe.instructions;
export const selectIngredients = (state) => state.recipe.extendedIngredients;
export const selectAll = (state) => state.recipe;

export default recipeSlice.reducer;

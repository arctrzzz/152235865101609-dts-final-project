import React from "react";
import RecipeImage from "../components/RecipeImage";
import RecipeDescription from "../components/RecipeDescription";
import RecipeInggredients from "../components/RecipeInggredients";
import RecipeStep from "../components/RecipeStep";
import detailRecipe from "../data/detailRecipe.json";
import { Box, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
const DetailPage = () => {
  const image = detailRecipe.results.thumb;
  const description = detailRecipe.results.desc;
  const inggredients = detailRecipe.results.ingredient;
  const step = detailRecipe.results.step;
  const item = detailRecipe.results.needItem;
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          padding: "2em",
          borderRadius: "1em",
        }}
      >
        <RecipeImage image={image} />

        <Typography variant="h4" sx={{ margin: "1em" }}>
          {detailRecipe.results.title}
        </Typography>
        <br></br>
        <RecipeDescription description={description} />
        <Typography variant="h5">Bahan-Bahan</Typography>
        <RecipeInggredients inggredients={inggredients} />

        <Typography variant="h5">Langkah:</Typography>
        <RecipeStep step={step} />
      </Box>
    </div>
  );
};

export default DetailPage;

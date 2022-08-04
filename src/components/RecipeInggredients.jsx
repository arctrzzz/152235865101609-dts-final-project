import React from "react";
import { Box, Typography } from "@mui/material";

const RecipeInggredients = (props) => {
  return (
    <>
      {props.extendedIngredients.map((item) => {
        return (
          <Box key={item.id}>
            <Typography variant="body2">{item.original}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default RecipeInggredients;

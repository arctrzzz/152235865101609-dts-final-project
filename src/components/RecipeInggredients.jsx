import React from "react";
import { Box, Typography } from "@mui/material";

const RecipeInggredients = (props) => {
  return (
    <>
      {props.extendedIngredients.map((item) => {
        return (
          <Box key={item.id} sx={{ margin: "0em 0em 0em 02em" }}>
            <Typography variant="body1">- {item.original}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default RecipeInggredients;

import React from "react";
import { Box, Typography } from "@mui/material";

const RecipeInggredients = (props) => {
  return (
    <>
      {props.inggredients.map((item) => {
        return (
          <Box>
            <Typography variant="body2">{item}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default RecipeInggredients;

import React from "react";
import { Box, Typography } from "@mui/material";

const RecipeStep = (props) => {
  return (
    <>
      {props.step.map((step) => {
        return (
          <Box>
            <Typography variant="body2">{step}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default RecipeStep;

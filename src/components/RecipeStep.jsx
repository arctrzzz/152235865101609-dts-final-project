import React from "react";
import { Box, Typography } from "@mui/material";

const RecipeStep = (props) => {
  return (
    <>
      {props.detailstep.map((step) => {
        return (
          <Box key={step.id}>
            <Typography variant="body2">{step.number}</Typography>

            <Typography variant="body1">{step.step}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default RecipeStep;

import React from "react";
import { Box, Typography } from "@mui/material";

const RecipeStep = (props) => {
  return (
    <>
      {props.detailstep.map((step) => {
        return (
          <Box key={step.id} sx={{ display: "flex", margin: "0.5em" }}>
            <Typography variant="body1" sx={{ margin: " 0em 2em 0em 0em" }}>
              {step.number}
            </Typography>

            <Typography variant="body1">{step.step}</Typography>
          </Box>
        );
      })}
    </>
  );
};

export default RecipeStep;

import React from "react";
import { Typography } from "@mui/material";

const RecipeDescription = (props) => {
  return (
    <>
      <Typography variant="body1">{props.description}</Typography>
    </>
  );
};

export default RecipeDescription;

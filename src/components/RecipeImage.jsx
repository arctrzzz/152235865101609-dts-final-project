import React from "react";
import { Card, CardMedia } from "@mui/material";

const RecipeImage = (props) => {
  return (
    <>
      <Card sx={{ borderRadius: "1em" }}>
        <CardMedia component="img" image={props.image} alt="masakan" />
      </Card>
    </>
  );
};

export default RecipeImage;

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { detailIdsearch } from "../features/recipe/sliceRecipe";

import { useNavigate } from "react-router-dom";

const ThumbnailRecipeCard = (props) => {
  const dispatcher = useDispatch();

  const navigate = useNavigate();

  const cardClickHandler = (event) => {
    // dispatcher(recipeAsync(props.id));
    dispatcher(detailIdsearch(props.id));

    navigate("/detailpage");
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={cardClickHandler}>
          <CardMedia
            component="img"
            image={props.image}
            alt={props.title}
          ></CardMedia>
          <CardContent>
            <Typography variant="h6">{props.title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ThumbnailRecipeCard;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectTitle, selectMenu } from "../features/recipe/sliceRecipe";
import {
  detailMenuReducer,
  detailTitleReducer,
} from "../features/recipe/sliceRecipe";

import { useNavigate } from "react-router-dom";

const ThumbnailRecipeCard = (props) => {
  const titlestate = useSelector(selectTitle);
  const menustate = useSelector(selectMenu);
  const dispatcher = useDispatch();

  const [menu, setMenu] = useState(props.keyword);
  const navigate = useNavigate();

  const cardClickHandler = (event) => {
    console.log(event.target);
    console.log(menu);
    console.log(props.keyword);
    console.log(titlestate);
    console.log(menustate);
    dispatcher(detailMenuReducer());
    dispatcher(detailTitleReducer(props.title));
    console.log(titlestate);
    console.log(menustate);
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

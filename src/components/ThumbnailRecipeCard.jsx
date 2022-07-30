import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";

const ThumbnailRecipeCard = (props) => {
  const cardClickHandler = () => {
    console.log("test click");
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={cardClickHandler()}>
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

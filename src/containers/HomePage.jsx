import React, { useEffect, useState } from "react";
import axios from "axios";

import { Typography, Box, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ThumbnailRecipeCard from "../components/ThumbnailRecipeCard";

const HomePage = () => {
  const [listRecipe, setListRecipe] = useState([
    { id: "test", title: "test", image: "test", imageType: "test" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=11ecbfcc9de34a729a9bd94fd062d1a9"
        );
        setListRecipe(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        <div>
          <Carousel>
            {listRecipe.map((item) => {
              return (
                <Box key={item.id}>
                  <ThumbnailRecipeCard
                    title={item.title}
                    image={item.image}
                    key={item.id}
                    id={item.id}
                  />
                </Box>
              );
            })}
          </Carousel>
        </div>
        <Typography
          variant="h4"
          sx={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
        >
          pilihan menu baru{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {listRecipe.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{ width: "180px", margin: "1em", borderRadius: "2em" }}
              >
                <ThumbnailRecipeCard
                  title={item.title}
                  image={item.image}
                  key={item.id}
                  id={item.id}
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default HomePage;

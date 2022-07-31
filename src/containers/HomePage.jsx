import React from "react";

import listRecipe from "../data/listRecipe.json";
import { Card, Typography, Box, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ThumbnailRecipeCard from "../components/ThumbnailRecipeCard";

const HomePage = () => {
  const list = listRecipe.results;
  return (
    <>
      <Container>
        <div>
          <Carousel>
            {list.map((item) => {
              return (
                <Box>
                  <ThumbnailRecipeCard
                    title={item.title}
                    image={item.thumb}
                    key={item.key}
                    keyword={item.key}
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
          {list.map((item) => {
            return (
              <Box sx={{ width: "180px", margin: "1em", borderRadius: "2em" }}>
                <ThumbnailRecipeCard
                  title={item.title}
                  image={item.thumb}
                  key={item.key}
                  keyword={item.key}
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

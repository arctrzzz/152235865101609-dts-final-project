import React, { useEffect, useState } from "react";
import axios from "axios";

import { Typography, Box, Container, TextField, Button } from "@mui/material";

import ThumbnailRecipeCard from "../components/ThumbnailRecipeCard";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [finalSearchText, setFinalSearchText] = useState("");

  const [listRecipe, setListRecipe] = useState([
    { id: "test", title: "test", image: "test", imageType: "test" },
  ]);

  const textFieldHandler = (event) => {
    const result = event.target.value;
    setSearchText(result);
  };

  const buttonOnSearchHandler = (event) => {
    setFinalSearchText(searchText);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${finalSearchText}&number=10&apiKey=11ecbfcc9de34a729a9bd94fd062d1a9`
        );
        setListRecipe(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [finalSearchText]);

  return (
    <>
      <Container>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "2em",
            }}
          >
            {" "}
            <TextField
              size="small"
              onChange={textFieldHandler}
              label="search recipe"
              placeholder="type your desired recipe"
              sx={{
                width: "15em",
                backgroundColor: "#ffffff",
              }}
            ></TextField>
            <Button
              onClick={buttonOnSearchHandler}
              variant="contained"
              sx={{ width: "15em", backgroundColor: "" }}
            >
              search
            </Button>
          </Box>
        </div>
        <div></div>
        <Typography
          variant="h3"
          sx={{
            color: "#FFFFFF",
            display: "flex",
            justifyContent: "center",
            marginTop: "1em",
          }}
        >
          Hey...C'mon try this recipe !{" "}
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

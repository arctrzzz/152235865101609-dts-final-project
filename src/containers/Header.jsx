import React from "react";
import NavBar from "./NavBar";
import { Box, Typography, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            borderRadius: " 0 0 25px 25px",
            backgroundColor: "#ffffff",
            padding: "1em 20em 1em 20em",
          }}
        >
          <Typography variant="h2" sx={{ color: "#DD4A48" }}>
            RecipePedia
          </Typography>
          <Typography variant="caption" sx={{ color: "#DD4A48" }}>
            tired burning your kitchen? try this site recipe!
          </Typography>
          <NavBar />
        </Box>
        <Outlet />
      </Container>
    </>
  );
};

export default Header;

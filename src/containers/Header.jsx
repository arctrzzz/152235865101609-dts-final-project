import React from "react";
import NavBar from "./NavBar";
import { Typography, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Container
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Typography variant="h2" sx={{ color: "#605f5e" }}>
          RecipePedia
        </Typography>
        <Typography variant="caption" sx={{ color: "#605f5e" }}>
          tired burning your kitchen? try this site recipe!
        </Typography>
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
};

export default Header;

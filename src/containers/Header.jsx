import React from "react";
import NavBar from "./NavBar";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import listRecipe from "../data/listRecipe.json";
const Header = () => {
  return (
    <>
      <Typography variant="h1" sx={{ color: "#605f5e" }}>
        Final Project
      </Typography>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Header;

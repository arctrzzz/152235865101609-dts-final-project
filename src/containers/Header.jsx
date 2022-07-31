import React from "react";
import NavBar from "./NavBar";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
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

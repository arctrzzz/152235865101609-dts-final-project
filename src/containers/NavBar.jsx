import React from "react";
import { Box, Typography, Button, Link as LinkMui } from "@mui/material";
import { Link } from "react-router-dom";
import { logOut } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const logOutButtonHandler = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <>
      <Typography variant="h6" sx={{ color: "#ffffff" }}>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: "1em",
              gap: "0.5em",
              justifyContent: "center",
            }}
          >
            <Link to="/homepage">
              <LinkMui underline="hover" sx={{ color: "#DD4A48" }}>
                Home
              </LinkMui>
            </Link>
            <Link to="/detailpage">
              <LinkMui underline="hover" sx={{ color: "#DD4A48" }}>
                Detail Recipe
              </LinkMui>
            </Link>
            <Link to="/login">
              <LinkMui underline="hover" sx={{ color: "#DD4A48" }}>
                Login
              </LinkMui>
            </Link>
            <Link to="/register">
              <LinkMui underline="hover" sx={{ color: "#DD4A48" }}>
                Register
              </LinkMui>
            </Link>
          </Box>
          <Button size="small" onClick={logOutButtonHandler}>
            Logout
          </Button>
        </Box>
      </Typography>
    </>
  );
};

export default NavBar;

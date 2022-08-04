import React from "react";
import { Box, Typography, Button } from "@mui/material";
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "1em",
            gap: "0.5em",
            justifyContent: "center",
          }}
        >
          <Link to="/homepage">Home</Link>
          <Link to="/detailpage">Detail Recipe</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Box>
        <Button onClick={logOutButtonHandler}>Logout</Button>
      </Typography>
    </>
  );
};

export default NavBar;

import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = () => {
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
          <Link to="/loginpage">Login</Link>
          <Link to="/loginpage">Register</Link>
        </Box>
      </Typography>
    </>
  );
};

export default NavBar;

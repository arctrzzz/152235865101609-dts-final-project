import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyItems: "center",
          justifyContent: "center",
          backgroundColor: "#DD4A48",
          padding: "1em",
          borderRadius: "25px 25px 0 0",
        }}
      >
        <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
          Tito Cahyo P-2022
        </Typography>
      </div>
    </>
  );
};

export default Footer;

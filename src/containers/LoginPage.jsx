import React from "react";
import { Container, Card, Typography, TextField, Button } from "@mui/material";

const LoginPage = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Silakan Masuk</Typography>
        <Card
          variant="outlined"
          // sx={{ width: "30em", height: '30em"' }}
        >
          <TextField placeholder="e-mail" />
          <TextField placeholder="password" />
        </Card>

        <Button variant="contained" sx={{ margin: "2em" }}>
          Login
        </Button>
        <Typography variant="body1">belum memiliki akun?</Typography>
        <Button variant="text" sx={{ margin: "0.5em" }}>
          Register
        </Button>
      </Container>
    </div>
  );
};

export default LoginPage;

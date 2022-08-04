import React from "react";
import { Container } from "@mui/material";
import LoginRegisterCard from "../components/LoginRegisterCard";
const LoginPage = () => {
  return (
    <div>
      <Container>
        <LoginRegisterCard status="login" />
      </Container>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { Container } from "@mui/material";
import LoginRegisterCard from "../components/LoginRegisterCard";
const RegisterPage = () => {
  return (
    <div>
      <Container>
        <LoginRegisterCard status="register" />
      </Container>
    </div>
  );
};

export default RegisterPage;

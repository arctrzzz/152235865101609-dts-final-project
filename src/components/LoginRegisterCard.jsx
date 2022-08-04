import React, { useState, useEffect } from "react";
import { Container, Card, Typography, TextField, Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmail,
  loginWithEmail,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginRegisterCard = ({ status }) => {
  const navigate = useNavigate();

  // error: bila ada error yang diberikan
  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginWithEmail(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerWithEmail(credential.email, credential.password);
  };

  const buttonLoginRegisterHandler = () => {
    if (status === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/homepage");
    }
  }, [user, isLoading, navigate]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" sx={{ margin: "1em", color: "#DD4A48" }}>
        {status === "login" ? "Login" : "Register"}
      </Typography>
      <Card
        variant="outlined"
        // sx={{ width: "30em", height: '30em"' }}
      >
        <TextField
          placeholder="e-mail"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />
        <TextField
          placeholder="password"
          type="password"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />
      </Card>

      <Button
        variant="contained"
        sx={{ margin: "2em" }}
        onClick={buttonLoginRegisterHandler}
      >
        {status === "login" ? "Login" : "Register"}
      </Button>

      {status === "login" ? (
        <>
          <Typography variant="body1">belum memiliki akun?</Typography>
          <Link to="/register">
            <Button variant="text" sx={{ margin: "0.5em" }}>
              Register
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Typography variant="body1">sudah memiliki akun?</Typography>
          <Link to="/login">
            <Button variant="text" sx={{ margin: "0.5em" }}>
              Login
            </Button>{" "}
          </Link>
        </>
      )}
    </Container>
  );
};

export default LoginRegisterCard;

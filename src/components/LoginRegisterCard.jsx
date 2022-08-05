import React, { useState, useEffect } from "react";
import { Container, Card, Typography, TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmail,
  loginWithEmail,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginRegisterCard = () => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("login");

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

  const togleStatusOnClick = () => {
    if (status === "login") {
      setStatus("register");
    } else {
      setStatus("login");
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
      <Card variant="outlined">
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
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <Typography variant="body1">belum memiliki akun?</Typography>

              <Button
                variant="text"
                sx={{
                  margin: "0.5em",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={togleStatusOnClick}
              >
                Register
              </Button>
            </div>
          </Container>
        </>
      ) : (
        <>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "stretch",
            }}
          >
            <div>
              <Typography variant="body1">sudah memiliki akun?</Typography>
              <Button
                variant="text"
                sx={{
                  margin: "0.5em",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={togleStatusOnClick}
              >
                Login
              </Button>{" "}
            </div>
          </Container>
        </>
      )}
    </Container>
  );
};

export default LoginRegisterCard;

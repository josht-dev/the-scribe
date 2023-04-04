import React, { useState } from "react";
import {
  Link,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material/";

import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

export default function Login({ openModal, setOpenModal, loggedIn, setLoggedIn} ) {
  const handleClose = () => {
    setOpenModal(false);
  };

  const initialState = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);
  const [login] = useMutation(LOGIN_USER);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const logged = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      const token = data.login.token;
      Auth.login(token);
      if (Auth.loggedIn()) {
        setLoggedIn(true)
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <span id="test">test</span>
      <div>
        {/* Login Form */}
        <Dialog open={openModal} onClose={handleClose} component="form">
          <DialogTitle
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2.5rem" }}
          >
            Log in to your Account
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              sx={{ width: "85%" }}
              value={values.email}
              onChange={handleChange("email")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              sx={{ width: "85%" }}
              value={values.password}
              onChange={handleChange("password")}
            />
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={(event) => {
                handleClose();
                logged(event);
              }}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: "#1CB9B3",
                marginRight: "1rem",
                boxShadow:
                  "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
              }}
            >
              Log in
            </Button>
          </DialogActions>
          <DialogContent sx={{ textAlign: "center" }}>
            <DialogContentText>Not a member yet?</DialogContentText>
            <Link href="/register" underline="always">
              Create an Account
            </Link>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

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
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

export default function Register({ openModal, setOpenModal }) {
  const handleClose = () => {
    setOpenModal(false);
  };

  const initialState = {
    username: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const signup = async () => {
    try {
      const { data } = await addUser({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        },
      });
      const token = data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {/* Register Form */}
      <Dialog open={openModal} onClose={handleClose} component="form">
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Create an Account
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
            id="username"
            label="Username"
            type="string"
            fullWidth
            variant="outlined"
            sx={{ width: "85%" }}
            value={values.username}
            onChange={handleChange("username")}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
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
            type="email"
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
            onClick={() => {
              console.log("on click hit");
              handleClose();
              signup();
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
            Create an Account
          </Button>
        </DialogActions>

        <DialogContent sx={{ textAlign: "center" }}>
          <DialogContentText>Already a Member?</DialogContentText>
          <Link href="/login" underline="always">
            Log In
          </Link>
        </DialogContent>
      </Dialog>
    </div>

    // <div>
    //   <Paper open={open} onClose={handleClose}>
    //     <Typography variant="h5" component="h3">
    //       Create an Account
    //     </Typography>

    //     <form
    //       onSubmit={(event) => {
    //         console.log("on click hit");
    //         handleClose();
    //         signup(event);
    //       }}
    //     >
    //       <TextField
    //         label="UserName"
    //         id="margin-normal"
    //         name="username"
    //         defaultValue={values.username}
    //         helperText="Enter your username"
    //         onChange={handleChange("username")}
    //       />
    //       <TextField
    //         label="Email"
    //         id="margin-normal"
    //         name="email"
    //         defaultValue={values.email}
    //         helperText="e.g. name@gmail.com"
    //         onChange={handleChange("email")}
    //       />
    //       <TextField
    //         label="Password"
    //         id="margin-normal"
    //         name="password"
    //         defaultValue={values.password}
    //         helperText="e.g. name@gmail.com"
    //         onChange={handleChange("password")}
    //       />
    //       <Button type="submit" variant="contained" color="primary">
    //         Subscribe <Icon>send</Icon>
    //       </Button>
    //     </form>
    //   </Paper>
    // </div>
  );
}

import * as React from "react";
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

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button to load the Modal with the Login form */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>

      {/* Login Form */}
      <Dialog open={open} onClose={handleClose}>
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
            id="loginCreds"
            label="Username/Email"
            type="email"
            fullWidth
            variant="outlined"
            sx={{ width: "85%" }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="text"
            fullWidth
            variant="outlined"
            sx={{ width: "85%" }}
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
            onClick={handleClose}
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
  );
}

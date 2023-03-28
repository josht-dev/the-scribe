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

export default function Register() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Button to load the Modal with the Register form */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Register
      </Button>

      {/* Register Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: "2.5rem" }}
        >
          Create an Account
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
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
  );
}

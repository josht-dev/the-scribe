import React from "react"
import {
  Typography,
  Box
} from "@mui/material";

export default function Construction() {
return (
  <Box
    sx={{
      fontSize: "50rem",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      color: "white",
      width: "20%",
      height: "20%",
      backgroundColor: "#1CB9B3",
    }}
  >
    <Typography component="h1">Currently Under Construction</Typography>
  </Box>
);
}
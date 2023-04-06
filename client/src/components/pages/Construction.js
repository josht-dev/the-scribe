import React from "react"
import {
  Typography,
  Box
} from "@mui/material";

export default function Construction() {
return (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      color: "white",
      width: "fit-content",
      height: "fit-content",
      backgroundColor: "#1CB9B3",
      padding: '3rem',
      margin: 'auto',
      position: 'relative',
      top: '3rem'
    }}
  >
    <Typography component="h1" fontSize={64} >Currently Under Construction</Typography>
  </Box>
);
}
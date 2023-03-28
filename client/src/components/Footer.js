import React from "react";
import ContactIcon from "../assets/icons/contact-icon.svg";
import DevsIcon from "../assets/icons/devs-icon.svg";
import DonateIcon from "../assets/icons/donate-icon.svg";
import { AppBar, Container, Toolbar } from "@mui/material";

const styles = {
    footer: {
        position: "absolute",
        width: "100%",
        margin: "0.5rem",
        bottom: "1rem",
        display: "flex",  
        border: "1px solid black",
    },
    leftDiv: {
        float: "left",
        border: "1px solid red",
        width: "40%",
        display: "flex",
    },
    rightDiv: {
        border: "1px solid blue",
        width: "60%",
    },
    rightImg: {
        float: "right",
        backgroundColor: "#fff", 
        borderRadius: "0.25rem",
        boxShadow: "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
        width: "4.6rem",
        height: "4.6rem",
        margin: "0.25rem",
        padding: "0.25rem",
    },
    image: {
        backgroundColor: "#fff", 
        borderRadius: "0.25rem",
        boxShadow: "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
        width: "4.5rem",
        height: "4.5rem",
        margin: "0.25rem",
        padding: "0.25rem",
    },
}

export default function Footer() {
    return (
        <AppBar position="static" sx={{ 
            backgroundColor: "transparent",
            bottom: "1rem",
            position: "absolute",
        }} component='footer'>
        <Container disableGutters maxWidth="xl">
            <Toolbar disableGutters>
            <img style={styles.image} src={ContactIcon} alt="contact icon"></img>
            <img style={styles.image} src={DevsIcon} alt="devs icon"></img>
            <img style={styles.rightImg} src={DonateIcon} alt="donate icon"></img>
            </Toolbar>
         </Container>
        </AppBar>
    );
}
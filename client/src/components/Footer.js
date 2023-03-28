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
    },
    rightDiv: {
        border: "1px solid blue",
        width: "60%",
    },
    rightImg: {
        float: "right",
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
            <div style={styles.leftDiv}>
                <img src={ContactIcon} alt="contact icon"></img>
                <img src={DevsIcon} alt="devs icon"></img>
            </div>
            <div style={styles.rightDiv}>
                <img style={styles.rightImg} src={DonateIcon} alt="donate icon"></img>
            </div>
            </Toolbar>
         </Container>
        </AppBar>
    );
}
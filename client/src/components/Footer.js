import React from "react";
import ContactIcon from "../assets/icons/contact-icon.svg";
import DevsIcon from "../assets/icons/devs-icon.svg";
import DonateIcon from "../assets/icons/donate-icon.svg"

const styles = {
    footer: {
        position: "absolute",
        bottom: "1rem",
    }
}

export default function Footer() {
    return (
        <section style={styles.footer}>
            <div>
                <img src={ContactIcon} alt="contact icon"></img>
            </div>
            <div>
                <img ></img>
            </div>
        </section>
    );
}
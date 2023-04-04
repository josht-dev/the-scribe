import React from "react";

function Contact() {
    return (
        <div>
            <input type="name" placeholder="Name" id="name">
            </input>
            <input type="email" placeholder="Enter your email" id="email">
            </input>
            <input type="message" id="message">
            </input>
            <button>Submit</button>
        </div>
    )
}

export default Contact
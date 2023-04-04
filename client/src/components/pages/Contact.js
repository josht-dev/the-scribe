import React, { useState } from "react";

const styles = {
    
  };
  
  function Contact() {
    return (
      <div>
        
          <input type="name" placeholder="Name" id="name">
          </input>
          <input type="email" placeholder="Email" id="email">
          </input>
          <input type="message" id="message">
          </input>
          <button>Submit</button>
      </div>
    )
  }
  export default Contact
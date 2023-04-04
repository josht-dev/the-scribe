import React from "react";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
  },
  section: {
    position: "absolute",
    top: "10rem",
    width: "75rem",
    height: "50rem",
    backgroundColor: "#fff",
    borderRadius: ".25rem",
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    zIndex: 3,
  },
  titleBtn: {
    margin: "0.5rem",
    padding: "0.5rem 1.5rem",
    float: "left",
    backgroundColor: "#1CB9B3",
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "0.25rem",
    color: "#fff",
    display: "flex",
  },
  inputSection: {
    display: "flex",
    flexDirection: "column"
  },
  inputName: {
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "0.25rem",
    padding: "0.5rem", 
    margin: "1rem",
  },
  inputEmail: {
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "0.25rem",
    padding: "0.5rem",
    margin: "1rem",
  },
  inputMessage: {
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "0.25rem",
    padding: "10rem",
    margin: "1rem"
  },
  submitButton: {
    margin: "0.5rem",
    padding: ".5rem 1.5rem",
    float: "right",
    backgroundColor: "#1CB9B3",
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
      color: "#fff",
  }
  };
  
  function Contact() {
    return (
      <main style={styles.container}>
      <section style={styles.section}>
      <div>
        <span style={styles.titleBtn}>Contact Us</span>
          <div style={styles.inputSection}>
          <input style={styles.inputName} type="name" placeholder="Name">
          </input>
          <input style={styles.inputEmail} type="email" placeholder="Email">
          </input>
          <input style={styles.inputMessage} type="message" id="message">
          </input>
        </div>  
          <button style={styles.submitButton}>Submit</button>
      </div>
      </section>
      </main>
    )
  }

  export default Contact

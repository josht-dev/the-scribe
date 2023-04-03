import React from "react";

const styles = {
  titleInput: {
    width: "100%",
    height: "4.5rem",
    border: "0.1rem solid #1CB9B3",
    borderRadius: "0.25rem",
    textTransform: "uppercase",
    fontSize: "2.25rem",
    fontWeight: 500,
    lineHeight: "3rem",
    padding: "0.5rem",
  },
};

const EditPost = () => {
  return (
    <>
      <TextField
        id="outlined-flexible"
        label="Title"
        defaultValue={"Title your Post"}
      />
      <TextField
        id="outlined-flexible"
        label="Subject"
        defaultValue={"Title your Post"}
      />
      <TextField
        id="outlined-multiline-static"
        label="Body"
        defaultValue={"Title your Post"}
      />
    </>
  );
};

export default EditPost;

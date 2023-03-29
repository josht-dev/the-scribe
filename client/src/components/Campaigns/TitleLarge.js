import React from "react";

const styles = {
  titleInput: {
    width: '34rem',
    height: '4.5rem',
    border: '1px solid #1CB9B3',
    borderRadius: '0.25rem'
  },
}

export default function TitleLarge(props) {

  return (
    <input
      style={styles.titleInput} 
      type='text' 
      placeholder={props.placeholder} 
      readOnly 
      value={props.title} 
    ></input>
  );
}
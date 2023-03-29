import React from "react";

const styles = {
  titleInput: {
    width: '50%',
    height: '4.5rem',
    border: '1px solid #1CB9B3',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    fontSize: '2.25rem',
    fontWeight: 500,
    lineHeight: '3rem',
    padding: '0.5rem'
  },
}

export default function TitleLarge(props) {

  return (
    <input
      style={styles.titleInput} 
      type='text' 
      placeholder={props.placeholder} 
      readOnly 
  
    >{props.title}</input>
  );
}
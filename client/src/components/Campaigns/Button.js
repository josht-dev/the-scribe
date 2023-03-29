import React from 'react';

// Styling object
const styles = {
  titleBtn: {
    margin: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#1CB9B3',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    color: '#fff'
  }
};

export default function Button(props) {
  return (
      <span 
        style={styles.titleBtn}
      >{props.title}</span>
  );
}
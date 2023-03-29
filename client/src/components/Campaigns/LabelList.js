import React from 'react';

// Styling object
const styles = {
  label: {
    backgroundColor: '#1CB9B3',
    borderWidth: '1px 1px 0 1px',
    borderStyle: 'solid',
    borderRadius: '0.25rem 0.25rem 0 0',
    fontWeight: 500,
    fontSize: '1rem',
    padding: '0.75rem 2rem'
  }
};

export default function LabelList(props) {
  return(
    <span 
    style={styles.label}
    >{props.title}</span>
  );
}
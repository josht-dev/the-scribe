import React from 'react';

// Styling object
const styles = {
  label: {
    backgroundColor: '#1CB9B3',
    borderWidth: '1px 1px 0 1px',
    borderStyle: 'solid',
    borderRadius: '0.25rem 0 0.25rem 0',
    fontWeight: 500,
    fontSize: '0.75rem',
    padding: '0.5rem 0.75rem',
    color: '#fff',
    alignSelf: 'center'
  }
};

export default function LabelInModal(props) {
  return(
    <span 
    style={styles.label}
    >{props.title}</span>
  );
}
import React from 'react';

// Styling object
const styles = {
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBtn: {
    padding: '.25rem 0.75rem',
    backgroundColor: '#1CB9B3',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    color: '#fff'
  }
};

export default function Button(props) {
  return (
    <div style={styles.titleDiv}>
      <span 
        id={props.id} 
        style={styles.titleBtn} 
        onClick={() => {
          props.handleModalId(props.id);
          props.handleModalOpen();
        }}
      >{props.title}</span>
    </div>
  );
}
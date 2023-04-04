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
    backgroundColor: '#BADF9C',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    
  }
};

export default function Button(props) {
  // Output btns depending on type sent over in prop
  const isMainBtn = (
    props.id === 'main-story' ||
    props.id === 'side-quests' ||
    props.id === 'player-plots'
  )
    ? true : false;

  // Different ouptut for different buttons
  if (isMainBtn) {
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
  } else if (props.id === 'timeline') {
    // Timeline is a future feature
    return (
      <div style={styles.titleDiv}>
        <span
          id={props.id}
          style={styles.titleBtn}
        >{props.title}</span>
      </div>
    );
  } else if (props.adventure) {
    // Btn for adventures
    return (
      <div style={styles.titleDiv}>
        <span
          id={props.id}
          style={styles.titleBtn}
        >{props.title}</span>
      </div>
    );
  } else {
    return (
      <div style={styles.titleDiv}>
        <span
          id={props.id}
          style={styles.titleBtn}
        >{props.title}</span>
      </div>
    );
  }
}
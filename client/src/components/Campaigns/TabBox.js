import React, { useState } from 'react';

// Component styling
const styles = {
  article: {
    height: '100%',
    width: '100%'
  },
  titleBar: {
    width: '100%',
    height: '1.5rem',
    margin: '0.25rem 0',
    display: 'flex',
    textAlign: 'center'
  },
  rightTitle: {
    borderLeft: '0.1rem solid #1CB9B3',
    width: '50%'
  },
  leftTitle: {
    borderRight: '0.1rem solid #1CB9B3',
    width: '50%'
  },
  textBox: {
    height: '80%',
  },
  textarea: {
    border: '0.1rem solid #1CB9B3',
    borderRadius: '0.25rem',
    height: '100%',
    width: '100%',
    margin: '0',
    padding: '0.25rem'
  },
};

export default function TabBox(props) {
  // UseState and handle state function for tab switching
  const [isActive, setIsActive] = useState(true);
  const handleIsActive = () => setIsActive(!isActive);

  return (
    <article style={styles.article}>
      <div style={styles.titleBar}>
        <span
          style={styles.leftTitle} 
          className={isActive ? 'selectTabBox' : ''}
          onClick={handleIsActive}
        >setup</span>
        <span
          style={styles.rightTitle} 
          className={isActive ? '' : 'selectTabBox'}
          onClick={handleIsActive}
        >resolution</span>
      </div>
      <div style={styles.textBox}>
        <textarea
          style={styles.textarea}
          className={isActive ? '' : 'hidden'}
          defaultValue={props.setup} 
        ></textarea>
        <textarea
          style={styles.textarea}
          className={isActive ? 'hidden' : ''}
          defaultValue={props.resolution} 
        ></textarea>
      </div>
    </article>
  );
}
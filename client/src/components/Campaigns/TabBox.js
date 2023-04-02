import React, { useState } from 'react';

// Component styling
const styles = {
  article: {
    
  },
  titleBar: {},
  rightTitle: {},
  leftTitle: {},
  p: {
    border: '0.1rem solid #1CB9B3',
    borderRadius: '0.25rem'
  },
};

export default function TabBox(props) {
  // UseState and handle state function for tab switching
  const [ isActive, setIsActive ] = useState(true);
  const handleIsActive = () => setIsActive(!isActive);

  return (
    <article style={styles.article}>
      <div style={styles.titleBar}>
        <span
          style={styles.leftTitle} 
          onClick={handleIsActive} 
        >setup</span>
        <span
          style={styles.rightTitle} 
          onClick={handleIsActive} 
        >resolution</span>
      </div>
      <p style={styles.p} className={isActive ? '' : 'hidden'}>{props.setup}</p>
      <p style={styles.p} className={isActive ? 'hidden' : ''}>{props.resolution}</p>
    </article>
  );
}
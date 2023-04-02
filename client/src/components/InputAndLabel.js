import { useSlotProps } from '@mui/base';
import React from 'react';

const styles = {
  label: {
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color: '#191D23',
    textTransform: 'capitalize'
  },
  input: {
    width: '100%',
    height: '4rem',
    border: '0.1rem solid #1CB9B3',
    borderRadius: '0.25rem',
    fontSize: '2rem',
    padding: '0.25rem'
  }
}

export default function InputAndLabel(props) {
  return (
    <>
      <label
        style={styles.label}
        htmlFor='bigBad' 
      >{props.label}
      </label>
      <input
        style={styles.input} 
        type='text' 
        name='bigBad'
        id='bigBad' 
        readOnly 
        value={props.value}
      ></input>
    </>
  );
}
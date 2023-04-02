import { useSlotProps } from '@mui/base';
import React from 'react';

const styles = {
  label: {

  },
  input: {
    width: '18.75rem',
    height: '4rem'
  }
}

export default function InputAndLabel(props) {
  return (
    <div>
      <label
        for='bigBad' 
      >{props.title}
      </label>
      <input
        style={styles.input} 
        type='text' 
        name='bigBad'
        id='bigBad' 
        readOnly 
        value={props.value}
      ></input>
    </div>
  );
}
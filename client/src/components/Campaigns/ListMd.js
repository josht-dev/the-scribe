import React from 'react';
import LabelList from './LabelList';
import Button from './Button';

const styles = {
  titleBar: {
    width: '100%',
    height: '2.5rem',
    border: '1px solid red',
    display: 'flex'
  },
  addBtnDiv: {
    width: '100%',
    border: '1px solid blue',

  }
}

export default function ListMd(props) {

  return (
    <section>
      <div style={styles.titleBar}>
        <LabelList 
          title='adventures'
        />
        <div style={styles.addBtnDiv}>
          <Button 
            title='+'
          />
        </div>
      </div>



    </section>
  );
}
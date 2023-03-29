import React from 'react';
import LabelList from './LabelList';
import Button from './Button';

const styles = {
  section: {
    height: '100%',
    zIndex: '99',
    display: 'flex',
    flexDirection: 'column'
  },
  titleBar: {
    width: '100%',
    height: '2.5rem',
    display: 'flex'
  },
  addBtnDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '0.5rem'
  },
  listDivMd: {
    border: '1px solid #1CB9B3',
    borderRadius: '0 0.25rem 0.25rem 0.25rem',
    flexGrow: 1,
    backgroundColor: '#F5F5F5'
  }
}

export default function ListMd(props) {

  return (
    <section style={styles.section}>
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
      <article style={styles.listDivMd} className='list-scroll'>

      </article>
    </section>
  );
}
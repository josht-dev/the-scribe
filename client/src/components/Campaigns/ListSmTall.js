import React from 'react';
import LabelListSm from './LabelListSm';
import Button from './Button';

const styles = {
  section: {
    height: '100%',
    zIndex: '99',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.25rem'
  },
  titleBar: {
    width: '100%',
    height: '2rem',
    display: 'flex',
  },
  addBtnDiv: {
    marginLeft: 'auto',
    float: 'right',
    
    display: 'flex',
    paddingRight: '0.5rem',
    marginBottom: '0.25rem'
  },
  listDivSmTall: {
    border: '1px solid #1CB9B3',
    borderRadius: '0 0.25rem 0.25rem 0.25rem',
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    marginBottom: '0.5rem'
  },
  listCardSm: {
    backgroundColor: '#fff',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.5rem',
    height: '20%'
  },
  listCardSmTitle: {
    width: '100%',
    margin: '0 0.5rem',
    fontSize: '1rem'
  }
}

export default function ListSm(props) {
  return (
    <section style={styles.section}>
      <div style={styles.titleBar}>
        <LabelListSm
          title={props.title}
        />
        <div style={styles.addBtnDiv}>
          <Button
            title='+'
          />
        </div>
      </div>
      <article style={styles.listDivSmTall} className='list-scroll'>
        {props.objectives.map((card, index) => {
          return (
            <article
              style={styles.listCardSm}
              key={index}
            >
              <span style={styles.listCardSmTitle}>{card}</span>
            </article>
          );
        })}
      </article>
    </section>
  );
}
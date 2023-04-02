import React from 'react';
import LabelListSm from './LabelListSm';
import Button from './Button';

// Component styling
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
    flexShrink: '0',
    display: 'flex',
    paddingRight: '0.5rem',
    marginBottom: '0.25rem'
  },
  sortBtnDiv: {
    float: 'right',
    flexShrink: '0',
    display: 'flex',
    paddingRight: '0.5rem',
    marginBottom: '0.25rem'
  },
  listDivSm: {
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
}

export default function Storyboard(props) {
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
        <div style={styles.sortBtnDiv}>
          <Button
            title='sort'
          />
        </div>
      </div>
      <article style={styles.listDivSm} className='list-scroll'>
        {props.storyboards.map(card => {
          return (
            <article
              style={styles.listCardSm}
              key={card._id}
            >
              <span style={styles.listCardSmTitle}>test</span>
            </article>
          );
        })}
      </article>

    </section>
  );
}
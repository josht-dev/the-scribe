import React, { useState } from 'react';
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
    marginBottom: '0.25rem',
    fontSize: '0.75rem'
  },
  listDiv: {
    border: '0.1rem solid #1CB9B3',
    borderRadius: '0 0.25rem 0.25rem 0.25rem',
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    marginBottom: '0.5rem'
  },
  listCard: {
    backgroundColor: '#fff',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.5rem',
    height: '20%'
  },
  listCardTitle: {
    height: '100%',
    width: '100%',
    margin: '0',
    padding: '0.25rem',
    fontSize: '1rem',
    resize: 'none',
    border: 'none',
    outline: 'none'
  }
}

export default function Storyboard(props) {
  // Pulling list into a variable so it can be added to
  const initialList = props.storyboards;
  const [list, setList] = useState(initialList);
  // The onClick for adding new items
  const handleAdd = () => {
    // Deal with needing an unique id while item has not been added to db yet
    const newList = list.concat('NEW!');
    setList(newList);
  };
  return (
    <section style={styles.section}>
      <div style={styles.titleBar}>
        <LabelListSm
          title={props.title}
        />
        <div 
          style={styles.addBtnDiv}
          onClick={() => {
            handleAdd();
          }}
        >
          <Button
            title='+'
          />
        </div>
      </div>
      <article style={styles.listDiv} className='list-scroll'>
        {list.flatMap((card, index) => {
          return (
            <article
              style={styles.listCard}
              key={index}
            >
              <textarea
                style={styles.listCardTitle}
                defaultValue={card}
              ></textarea>
            </article>
          );
        })}
      </article>

    </section>
  );
}
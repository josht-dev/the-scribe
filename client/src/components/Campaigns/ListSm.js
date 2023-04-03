import React, { useState } from 'react';
import LabelListSm from './LabelListSm';
import Button from './Button';

// Component styling
const styles = {
  section: {
    height: '50%',
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
  listDivSm: {
    border: '0.1rem solid #1CB9B3',
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
    height: '100%',
    margin: '0',
    padding: '0.25rem',
    fontSize: '1.5rem',
    resize: 'none',
    border: 'none',
    outline: 'none'
  }
}

export default function ListSm(props) {
  // Check if this is a character
  const isCharacter = (props.type === 'pc' || props.type === 'npc')
    ? true : false;

  // A useState to hold the character list and update
  const [characters, setCharacters] = useState(props.characters);
  const handleCharacter = (character) => {

  };

  const cardOutput = (card) => {
    if (isCharacter) {
      return (
        <>
          <textarea
            style={styles.listCardSmTitle}
            defaultValue={card.characterName}
            readOnly
            onClick={() => {
              props.handleSetChar(card._id);
              props.handleModalId(props.type);
              props.handleModalOpen();
            }}
          ></textarea>
        </>
      );
    } else {
      return (
        <>
          <textarea
            style={styles.listCardSmTitle}
            defaultValue={card.characterName}
          ></textarea>
        </>
      );
    }
  }

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
      <article style={styles.listDivSm} className='list-scroll'>
        {props.characters.flatMap(card => {
          return (
            <article
              style={styles.listCardSm}
              key={card._id}
            >
              {cardOutput(card)}
            </article>
          );
        })}
      </article>
    </section>
  );
}
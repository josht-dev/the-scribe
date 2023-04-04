import React, { useState, useEffect } from 'react';
import LabelList from './LabelList';
import Button from './Button';



export default function ListMd(props) {
  /* This needed additonal design changes to be usable by a user
  // A useState to expand cards when clicked
  const [ cardState, setCardState ] = useState({_id: -1, expanded: false});
  const handleSetCardState = (id) => {
    setCardState({_id: id, expanded: !cardState.expanded});
  }
*/

// Pulling adventures into a variable so it can be added to
const initialList = props.adventures;
const [ list, setList] = useState(initialList);
// The onClick for adding new items
const handleAdd = () => {
  // Deal with needing an unique id while item has not been added to db yet
  const itemId = `none-${list.length++}`;
  const newList = list.concat(
    {_id: itemId, title: 'NEW ITEM!', playDate: '', status: ''}
  );
  setList(newList);
};
  
  // Component styling
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
      paddingRight: '0.5rem',
      fontSize: '0.75rem'
    },
    listDivMd: {
      border: '0.1rem solid #1CB9B3',
      borderRadius: '0 0.25rem 0.25rem 0.25rem',
      flexGrow: 1,
      backgroundColor: '#F5F5F5'
    },
    listCardMd: {
      backgroundColor: '#fff',
      boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
      borderRadius: '0.25rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '0.5rem',
      height: /*cardState._id == cardState._id && cardState.expanded 
        ? '100%' : '20%'*/ '40%',
    },
    listCardMdTitle: {
      width: '65%',
      margin: '0 0.5rem',
      fontSize: '1.5rem'
    },
    listCardMdDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    listCardTextarea: {
      width: '100%',
      height: '90%',
      padding: '0.5rem',
      fontSize: '1rem',
      resize: 'none',
      border: 'none',
      outline: 'none'
    }
  }

  // Function to determine if the cards should be expandable textareas
  // OR link to another modal
  const cardTypeRender = () => {
    if (props.type === 'text') {
      return (
        <>
          {list.flatMap(card => {
            return (
              <article
                style={styles.listCardMd}
                key={card._id}
              >
                <textarea
                  style={styles.listCardTextarea}
                  defaultValue={card.title}
                ></textarea>
              </article>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {props.adventures.flatMap(card => {
            return (
              <article
                style={styles.listCardMd}
                key={card._id}
              >
                <span style={styles.listCardMdTitle}>{card.title}</span>
                <div style={styles.listCardMdDetails}>
                  <span>Date: {card.playDate}</span>
                  <span>Status: {card.status}</span>
                </div>
              </article>
            );
          })}
        </>
      );
    }
  }



  return (
    <section style={styles.section}>
      <div style={styles.titleBar}>
        <LabelList
          title='adventures'
        />
        <div 
          style={styles.addBtnDiv}
          onClick={() => {
            handleAdd();
          }}
        >
          <Button
            title='+'
            adventure={true}
          />
        </div>
      </div>
      <article style={styles.listDivMd} className='list-scroll'>
        {cardTypeRender()}
      </article>
    </section>
  );
}
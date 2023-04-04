import React, { useState } from 'react';
import LabelInModal from './LabelInModal';
import InputAndLabel from '../InputAndLabel';
import ListSmTall from './ListSmTall';
import TabBox from './TabBox';
import Storyboard from './Storyboard';
import Button from './Button';
import TitleLarge from './TitleLarge';

export default function ModalLarge(props) {
  // Component styling
  const styles = {
    modalBackdrop: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    modal: {
      border: '0.2rem solid #000',
      boxSizing: 'border-box',
      backgroundColor: '#fff',
      borderShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '0.5rem',
      height: '40rem',
      width: '56.25rem',
      position: 'absolute',
      marginRight: 'auto',
      marginLeft: 'calc((75rem - 56.25rem)/2)',
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridGap: '0.25rem'
    },
    optionalBtns: {
      display: 'none' /*
        props.id === 'player-plots' || props.id === 'side-quests'
          ? 'initial' : 'none'*/,
      gridColumn: '2 / span 1',
      gridRow: '1 / span 1',
    },
    sortBtnDiv: {
      float: 'left',
      flexShrink: '0',
      display: 'flex',
      padding: '0.25rem',
      margin: '0.5rem 0.5rem 0 0.5rem',
      fontSize: '0.75rem'
    },
    addBtnDiv: {
      float: 'right',
      flexShrink: '0',
      display: 'flex',
      padding: '0.25rem',
      margin: '0.5rem 0.5rem 0 0.5rem',
      fontSize: '0.75rem'
    },
    removeBtnDiv: {
      float: 'right',
      gridColumn: '6 / span 1',
      gridRow: '1 / span 1',
      padding: '0.25rem',
      fontSize: '0.75rem'
    },
    mainAdversary: {
      gridColumn: '1 / span 2',
      gridRow: '2 / span 1',
      marginLeft: '0.5rem'
    },
    charName: {
      gridColumn: '1 / span 3',
      gridRow: '2 / span 1',
      padding: '0 0.5rem'
    },
    objectives: {
      gridColumn: '1 / span 2',
      gridRow: '3 / span 10',
      marginLeft: '0.5rem',
      marginBottom: '0.5rem'
    },
    tabBox: {
      gridColumn: '3 / span 4',
      gridRow: '3 / span 10',
      marginRight: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1.2rem'
    },
    tabBoxStory: {
      gridColumn: '3 / span 4',
      gridRow: '1 / span 3',
      marginRight: '0.5rem',
      display: 'flex',
      flexDirection: 'column'
    },
    storyDiv: {
      gridColumn: '3 / span 4',
      gridRow: '4 / span 9',
      marginRight: '0.5rem',
      marginBottom: '0.5rem'
    },
    statusDiv: {
      gridColumn: '4 / span 3',
      gridRow: '2 / span 1',
      marginRight: '0.5rem'
    },
    section: {
      height: '95%',
      width: '100%'
    },
    titleBar: {
      width: '100%',
      height: '1.5rem',
      margin: '0.25rem 0',
      display: 'flex',
      textAlign: 'center'
    },
    rightTitle: {
      borderLeft: '0.1rem solid #1CB9B3',
      width: '50%'
    },
    leftTitle: {
      borderRight: '0.1rem solid #1CB9B3',
      width: '50%'
    },
    charNotesDiv: {
      height: '100%',
      border: '0.1rem solid #1CB9B3',
      borderRadius: '0.25rem',
      flexGrow: 1,
      backgroundColor: '#F5F5F5',
    },
    noteCards: {

      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    addNote: {
      float: 'right',
      marginLeft: 'auto',
      display: 'flex',
      paddingRight: '0.5rem',
      marginBottom: '0.25rem',
      fontSize: '0.75rem'
    },
    listCardSm: {
      backgroundColor: '#fff',
      boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
      borderRadius: '0.25rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '0.25rem',
      height: '20%',
      width: '48%',
      border: '1px solid black'
    },
    listCardSmTitle: {
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0.25rem',
      fontSize: '1rem',
      resize: 'none',
      border: 'none',
      outline: 'none'
    }
  }

  // Pulling list into a variable so it can be added to
  const initialList =
    (props.modalData.characterNotes) ?
      props.modalData.characterNotes : [];

  const [list, setList] = useState(initialList);
  // The onClick for adding new items
  const handleAdd = () => {
    // Deal with needing an unique id while item has not been added to db yet
    const newList = list.concat('NEW!');
    setList(newList);
  };

  // Needed for the character notes / character sheet
  // UseState and handle state function for tab switching
  const [isActive, setIsActive] = useState(true);
  const handleIsActive = () => setIsActive(!isActive);

  // TODO - FUTURE FEATURE TO ADD MULTIPLE SIDE STORIES AND PLAYER PLOTS
  // Hold the useState for the dropdown of some modals
  /*
  const [ dropdown, setDropdown ] = useState([]);
  const handleDropdown = () => {}
  */

  // Is this a story from a campaign btn
  const isStory = () => {
    if (props.id === 'main-story' ||
      props.id === 'side-quests' ||
      props.id === 'player-plots') {
      return true;
    } else { return false }
  }
  // If the props.modalData is an array, handle differently
  const storyIsArray = Array.isArray(props.modalData);

  // Is this a character
  const isCharacter = () => {
    if (props.id === 'pc' || props.id === 'npc') {
      return true;
    } else { return false }
  }

  // Function to generate return data for the btn's on the single campaign page
  const campaignBtns = () => {
    // Switch label based on modal sent
    const inputLabel = () => {
      if (props.id === 'player-plots') {
        return 'focused player';
      } else {
        return 'main adversary';
      }
    }

    return (
      <section style={styles.modal} id='ModalLarge'>
        <LabelInModal
          title={props.title}
        />
        <div style={styles.optionalBtns}>
          <div style={styles.addBtnDiv}>
            <Button
              title='+'
            />
          </div>
          <div style={styles.sortBtnDiv}>
            <Button
              title='plots'
            />
          </div>
        </div>
        <div style={styles.mainAdversary}>
          <InputAndLabel
            label={inputLabel()}
            value={storyIsArray ? '' : props.modalData.bigBad}
          />
        </div>
        <div style={styles.objectives}>
          <ListSmTall
            title='objectives'
            objectives={storyIsArray ? [] : props.modalData.objectives}
          />
        </div>
        <div style={styles.tabBoxStory}>
          <TabBox
            setup={storyIsArray ? '' : props.modalData.setup}
            resolution={storyIsArray ? '' : props.modalData.resolution}
          />
        </div>
        <div
          style={styles.storyDiv}
        >
          <Storyboard
            title='storyboard'
            isArray={storyIsArray}
            storyboards={storyIsArray ? [] : props.modalData.storyboard}
          />
        </div>
      </section>
    );
  }

  // Function to generate return data for the character card clicked
  const characterClick = () => {

    // TODO - Add this btn back later with an onClick
    /*
    <div style={styles.removeBtnDiv}>
          <Button
            title='remove'
          />
        </div>
    */

    return (
      <section style={styles.modal} id='ModalLarge'>
        <LabelInModal
          title={props.title}
        />
        <div style={styles.charName}>
          <TitleLarge
            title={props.modalData.characterName}
            placeholder={'character name'}
          />
        </div>
        <div style={styles.statusDiv}>
          <InputAndLabel
            label='character status'
            value={props.modalData.characterStatus}
          />
        </div>
        <div style={styles.objectives}>
          <ListSmTall
            title='motivations'
            objectives={props.modalData.motivations}
          />
        </div>
        <div style={styles.tabBox}>
          <section style={styles.section}>
            <div style={styles.titleBar}>
              <span
                style={styles.leftTitle}
                className={isActive ? 'selectTabBox' : ''}
                onClick={handleIsActive}
              >character notes</span>
              <span
                style={styles.rightTitle}
                className={isActive ? '' : 'selectTabBox'}
                onClick={handleIsActive}
              >character sheet</span>
              <div
                style={styles.addNote}
                onClick={() => {
                  handleAdd()
                }}
              >
                <Button
                  title='+'
                />
              </div>
            </div>
            <article
              style={styles.charNotesDiv}
              className={isActive ? 'list-scroll' : 'hidden list-scroll'}
            >
              <div style={styles.noteCards} >
                {list.flatMap((card, index) => {
                  return (
                    <article
                      style={styles.listCardSm}
                      key={index}
                    >
                      <textarea
                        style={styles.listCardSmTitle}
                        defaultValue={card}
                      ></textarea>
                    </article>
                  );
                })}
              </div>
            </article>
            <article
              className={isActive ? 'hidden list-scroll' : 'list-scroll'}
            >
              <span style={styles.listCardSm}>COMING SOON</span>
            </article>
          </section>
        </div>

      </section>
    );
  }

  // Render the modal based on the modalId sent
  const switchModal = () => {
    if (isStory()) {
      return campaignBtns();
    }
    if (isCharacter()) {
      return characterClick();
    }
  }

  return (
    <>
      <div
        style={styles.modalBackdrop}
        onClick={(e) => {
          if (props.openModal) { props.handleModalOpen() }
        }}
      ></div>
      {switchModal()}
    </>
  );

}
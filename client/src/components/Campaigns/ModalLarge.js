import React, { useState} from 'react';
import LabelInModal from './LabelInModal';
import InputAndLabel from '../InputAndLabel';
import ListSmTall from './ListSmTall';
import TabBox from './TabBox';
import Storyboard from './Storyboard';
import Button from './Button';

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
    mainAdversary: {
      gridColumn: '1 / span 2',
      gridRow: '2 / span 1',
      marginLeft: '0.5rem'
    },
    objectives: {
      gridColumn: '1 / span 2',
      gridRow: '3 / span 10',
      marginLeft: '0.5rem',
      marginBottom: '0.5rem'
    },
    tabBox: {
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
    }
  }

  // TODO - FUTURE FEATURE TO ADD MULTIPLE SIDE STORIES AND PLAYER PLOTS
  // Hold the useState for the dropdown of some modals
  /*
  const [ dropdown, setDropdown ] = useState([]);

  const handleDropdown = () => {

  }
  */

  // If the props.modalData is an array, handle differently
  const storyIsArray = Array.isArray(props.modalData);

  // Render the modal based on the modalId sent
  const switchModal = () => {
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
        <div style={styles.tabBox}>
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
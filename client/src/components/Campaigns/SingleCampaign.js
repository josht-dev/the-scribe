import React, { useState } from 'react';
import TitleLarge from './TitleLarge';
import Button from './Button';
import ListMd from './ListMd';
import ListSm from './ListSm';
import ModalLarge from './ModalLarge';

// Component styles
const styles = {
  section: {
    border: '1px solid #1CB9B3',
    borderRadius: '0 0.25rem 0.25rem 0.25rem',
    margin: '0 0.5rem 0.5rem 0.5rem',
    height: '42.25rem',
    padding: '0.5rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(12 ,1fr)',
    gridGap: '0.25rem'
  },
  titleLeft: {
    gridColumn: '1 / span 3',
  },
  titleRight: {
    gridColumn: '4 / span 3',
  },
  charactersContainer: {
    gridColumn: '1 / span 2',
    gridRow: '2 / span 11'
  },
  btnBar: {
    gridColumn: '3 / span 4',
    gridRowStart: '2',
    display: 'flex',
    justifyContent: 'space-around',
  },
  adventureList: {
    gridColumn: '3 / span 4',
    gridRow: '3 / span 10'
  }
}

export default function SingleCampaign(props) {
  const [openModal, setOpenModal] = useState(false);

  // Handle opneing/closing this modal
  const handleModalOpen = () => setOpenModal(!openModal);

  const npcs = [];
  const pcs = [];

  // Spit characters into pc's and npc's
  props.campaign.characters.forEach(char => {
    // check if the character is an npc and push to appropriate array
    if (char.npc) {
      npcs.push(char);
    } else {
      pcs.push(char);
    }
  });

  // Tell ModalLarge which data to display
  const modalRender = () => {
    console.log('handleModalOpen hit');
    handleModalOpen();


  }

  return (
    <>
    <ModalLarge 
      openModal={openModal} 
      setOpenModal={setOpenModal} 
    />
    <section style={styles.section}>
        <div style={styles.titleLeft}>
          <TitleLarge
            placeholder='campaign title'
            title={props.campaign.title}
          />
        </div>
        <div style={styles.titleRight}>
          <TitleLarge
            placeholder='game system'
            title={props.campaign.game}
          />
        </div>
        <section style={styles.charactersContainer}>
          <ListSm 
            title='player characters'
            characters={pcs} 
          />
          <ListSm 
            title='non-player characters' 
            characters={npcs} 
          />
        </section>
        <div style={styles.btnBar}>
          <Button 
            title='main story' 
            handleModalOpen={handleModalOpen}
          />
          <Button 
            title='side quests' 
          />
          <Button 
            title='player plots' 
          />
          <Button 
            title='timeline' 
          />
        </div>
        <section style={styles.adventureList}>
          <ListMd 
            adventures={props.campaign.adventures}
          />
        </section>
    </section >
    </>
  );
}
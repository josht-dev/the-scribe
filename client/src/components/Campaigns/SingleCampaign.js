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

  // Modal useState code
  const [modalId, setModalId] = useState('none');
  const handleModalId = (id) => setModalId(id);

  const [openModal, setOpenModal] = useState(false);
  // Handle opening/closing this modal
  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };

  // Tell ModalLarge which data to display
  const renderModal = () => {
    if (openModal) {

      // Grab the title depending on btn used
      const title = () => {
        switch (modalId) {
          case 'main-story':
            return 'main story'
          case 'side-quests':
            return 'side story'
          default:
            break;
        }
      }

      // Set the campaign data to send to ModalLarge
      const modalData = () => {
        let data;
        switch (modalId) {
          case 'main-story':
            // Check if story exists
            if (props.campaign.story[0]) {
              data = props.campaign.story.find(story => {
                return story.main;
              });
            } else {
              // TODO - Check back when connected to backend
              // for empty _id field for story[{_id: ??}]
              data = {
                title: '',
                timeline: '',
                bigBad: '',
                main: true,
                side: false,
                player: false,
                storyboard: [],
                objectives: [],
                setup: '',
                resolution: '',
              };
            }
            
            return data;
          case 'side-quests':
            data = props.campaign.story.flatMap(story => {
              if (story.side) {
                return story;
              } else {
                return [];
              }
            });
            return data
          default:
            break;
        }
      }

      // Display modal with data appropriate to the user clicked


      // REMOVE - temp/testing code
      return (
        <ModalLarge 
          id={modalId}
          title={title()} 
          modalData={modalData()} 
          openModal={openModal} 
          handleModalOpen={handleModalOpen} 
        />
      );

    } else {
      // Modal is closed
      return;
    }

  }

  return (
    <>
    {renderModal()}
    <section style={styles.section} >
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
            id='main-story' 
            handleModalOpen={handleModalOpen}
            handleModalId={handleModalId}
          />
          <Button 
            title='side quests' 
            id='side-quests' 
            handleModalOpen={handleModalOpen}
            handleModalId={handleModalId}
          />
          <Button 
            title='player plots' 
            id='player-plots' 
            handleModalOpen={handleModalOpen}
            handleModalId={handleModalId}
          />
          <Button 
            title='timeline' 
            id='timeline' 
            handleModalOpen={handleModalOpen}
            handleModalId={handleModalId}
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
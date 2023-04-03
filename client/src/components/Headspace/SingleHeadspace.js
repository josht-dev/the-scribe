import React, { useState } from "react";
import TitleLarge from "../Campaigns/TitleLarge";
import Button from "../Campaigns/Button";
import ListMd from "../Campaigns/ListMd";
// import ListSm from "../Campaigns/ListSm";
import ModalLarge from "../Campaigns/ModalLarge";

// Component styles
const styles = {
  section: {
    border: "1px solid #1CB9B3",
    borderRadius: "0 0.25rem 0.25rem 0.25rem",
    margin: "0 0.5rem 0.5rem 0.5rem",
    height: "42.25rem",
    padding: "0.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(12 ,1fr)",
    gridGap: "0.25rem",
  },
  titleLeft: {
    gridColumn: "1 / span 3",
  },
  titleRight: {
    gridColumn: "4 / span 3",
  },
  charactersContainer: {
    gridColumn: "1 / span 2",
    gridRow: "2 / span 11",
  },
  btnBar: {
    gridColumn: "3 / span 4",
    gridRowStart: "2",
    display: "flex",
    justifyContent: "space-around",
  },
  adventureList: {
    gridColumn: "3 / span 4",
    gridRow: "3 / span 10",
  },
};

export default function SingleHeadspace(props) {
  // Modal useState code
  const [modalId, setModalId] = useState("none");
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
          case "main-story":
            return "main story";

          default:
            break;
        }
      };

      // Set the campaign data to send to ModalLarge
      const modalData = () => {
        switch (modalId) {
          case "main-story":
            const data = props.campaign.story.find((story) => {
              return story.main;
            });
            return data;
          default:
            break;
        }
      };

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
  };

  return (
    <>
    {renderModal()}
    <section style={styles.section} >
        <div style={styles.titleLeft}>
          <TitleLarge
            placeholder='headspace post title'
            title={props.headspace.title}
          />
        </div>
        <div style={styles.titleRight}>
          <TitleLarge
            placeholder='game system'
            title={props.campaign.game}
          />
        </div>
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

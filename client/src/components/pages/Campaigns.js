import React, { useState, useEffect, useRef, useContext, createContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { QUERY_USER_CAMPAIGNS } from '../../utils/queries';
import Auth from '../../utils/auth';
import Tab from '../Campaigns/Tab';
import Button from '../Campaigns/Button';
import TitleLarge from '../Campaigns/TitleLarge';
import ListMd from '../Campaigns/ListMd';
import ListSm from '../Campaigns/ListSm';
import ModalLarge from '../Campaigns/ModalLarge';

const Context = createContext();

// Component Styling
const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2
  },
  section: {
    position: 'absolute',
    top: '10rem',
    width: '75rem',
    height: '50rem',
    backgroundColor: '#fff',
    borderRadius: '.25rem',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    zIndex: 3
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    width: '75rem',
  },
  titleBtn: {
    margin: '0.5rem',
    padding: '.5rem 1.5rem',
    float: 'left',
    backgroundColor: '#1CB9B3',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    color: '#fff'
  },
  tabContainer: {
    margin: '0.5rem 0.5rem 0 0.5rem',
    display: 'flex'
  },
  addBtnDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    fontSize: '1rem',
    margin: '0.5rem 0',
    padding: '.5rem 1.5rem',
  },
  saveBtnDiv: {
    fontSize: '1rem',
    margin: '0.5rem 0',
    padding: '.5rem 1.5rem',
  }
};

const campaignStyles = {
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

// Campaign list stylings
const listStyles = {
  listDivLarge: {
    border: '0.1rem solid #1CB9B3',
    borderRadius: '0 0.25rem 0.25rem 0.25rem',
    margin: '0 0.5rem 0.5rem 0.5rem',
    height: '42.25rem',
    backgroundColor: '#F5F5F5',
  },
  listCardLarge: {
    backgroundColor: '#fff',
    boxShadow: '0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    borderRadius: '0.25rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0.5rem',
    height: '20%'
  },
  listCardLargeTitle: {
    width: '70%',
    margin: '0 0.5rem',
    fontSize: '2rem'
  },
  listCardLargeDetails: {
    display: 'flex',
    flexDirection: 'column'
  },
};


// Component that renders the tabs
const TabContainer = () => {
  const { currentTab, setCurrentTab, tabList } = useContext(Context);
  return (
    <div style={styles.tabContainer} id='tabContainer'>
      {tabList.flatMap(item => {
        return (<Tab
          currentTab={currentTab}
          handleTabChange={setCurrentTab}
          tab={item}
          key={item.id}
        />)
      })}
    </div>
  );
}


// Component that renders the list of campaigns
const CampaignList = () => {
  const { tabList, setTabList, allCampaigns } = useContext(Context);

  // Event listener that will add a new tab on card click
  const onAddBtnClick = (event) => {
    // Get the campaign id and title from the article data attributes
    const title = () => {
      const childTitle = event.nativeEvent.srcElement.parentElement.dataset.title;
      const parentTitle = event.nativeEvent.srcElement.dataset.title;
      const nestedTitle = event.nativeEvent.srcElement.parentElement.parentElement.dataset.title;

      return childTitle || parentTitle || nestedTitle;
    }
    const id = () => {
      const childId = event.nativeEvent.srcElement.parentElement.dataset.campaignid;
      const parentId = event.nativeEvent.srcElement.dataset.campaignid;
      const nestedId = event.nativeEvent.srcElement.parentElement.parentElement.dataset.campaignid;

      return childId || parentId || nestedId;
    }

    const propObj = {
      id: id(),
      title: title()
    }

    // Check if tab with campaignid/key already exists
    let dup = false;
    for (let i = 0; i < tabList.length; i++) {
      if (tabList[i].id === propObj.id) {
        dup = true;
      }
    }

    if (!dup) {
      // Add a new tab
      setTabList(tabList.concat(propObj));
    } else {
      return;
    }
  }

  return (
    <section style={listStyles.listDivLarge} className='list-scroll'>
      {allCampaigns.flatMap(card => {
        return (
          <article
            style={listStyles.listCardLarge}
            key={card._id}
            data-campaignid={card._id}
            data-title={card.gameName}
            onClick={onAddBtnClick}
          >
            <span style={listStyles.listCardLargeTitle}>{card.gameName}</span>
            <div style={listStyles.listCardLargeDetails}>
              <span>game: {card.ruleSet}</span>
              <span>Updated: {card.modifiedAt}</span>
            </div>
          </article>
        );
      })}
    </section>
  );
}


const SingleCampaign = () => {
  const { currentTab, allCampaigns } = useContext(Context);

  // A useState to old the currently selected character
  const [currentChar, setCurrentChar] = useState('');
  const handleSetChar = (id) => {
    setCurrentChar(id)
  };

  // Modal useState code
  const [modalId, setModalId] = useState('none');
  const handleModalId = (id) => setModalId(id);
  // Handle opening/closing this modal
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };

  // Hold this campaigns data
  let selectedCampaign;
  for (const x in allCampaigns) {
    if (allCampaigns[x]._id == currentTab) {
      selectedCampaign = allCampaigns[x];
      break;
    }
  }

  const npcs = [];
  const pcs = [];

  // Spit characters into pc's and npc's
  if (selectedCampaign.characters) {
    selectedCampaign.characters.forEach(char => {
      // check if the character is an npc and push to appropriate array
      if (char.npc) {
        npcs.push(char);
      } else {
        pcs.push(char);
      }
    });
  }

  // Tell ModalLarge which data to display
  const renderModal = () => {

    if (openModal) {
      // Grab the title depending on btn used
      const title = () => {
        switch (modalId) {
          case 'main-story':
            return 'main story';
          case 'side-quests':
            return 'side story';
          case 'player-plots':
            return 'player plots';
          case 'pc':
            return 'player character';
          case 'npc':
            return 'non-player character';
          default:
            break;
        }
      }
      // Set the campaign data to send to ModalLarge
      const modalData = () => {
        let data;
        let story;
        if (!selectedCampaign.storyOutline) {
          story = [];
        } else {
          story = selectedCampaign.storyOutline;
        }
        let characters;
        if (!selectedCampaign.characters) {
          characters = [];
        } else {
          characters = selectedCampaign.characters;
        }
        // REMOVE THIS LATER
        let oneStory;
        switch (modalId) {
          case 'main-story':
            // Check if story exists
            if (story[0]) {
              data = story.find(story => {
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
                storyBoard: [],
                objectives: [],
                setup: '',
                resolution: '',
              };
            }

            return data;
          case 'side-quests':
            // TODO - Set back to allow story array
            data = story.flatMap(story => {
              if (story.side) {
                return story;
              } else {
                return [];
              }
            });
            // REMOVE THIS IN THE FUTURE
            oneStory = data[0];
            if (!oneStory) {
              oneStory = {
                title: '',
                timeline: '',
                bigBad: '',
                main: false,
                side: true,
                player: false,
                storyBoard: [],
                objectives: [],
                setup: '',
                resolution: '',
              };
            }

            return /*data*/ oneStory;
          case 'player-plots':
            // TODO - Set back to allow story array
            data = story.flatMap(story => {
              if (story.player) {
                return story;
              } else {
                return [];
              }
            });
            // REMOVE THIS IN THE FUTURE
            oneStory = data[0];
            if (!oneStory) {
              oneStory = {
                title: '',
                timeline: '',
                bigBad: '',
                main: false,
                side: false,
                player: true,
                storyBoard: [],
                objectives: [],
                setup: '',
                resolution: '',
              };
            }

            return /*data*/ oneStory;
          case 'pc':
            data = characters.find(char => {
              return char._id == currentChar;
            });

            // Check if this is a new character
            if (!data) {
              data = {
                _id: currentChar,
                characterName: "Hi! I'm New!",
                characterStatus: '',
                characterSheet: '',
                npc: 'pc',
                campaignId: selectedCampaign._id,
                motivations: [],
                characterNotes: []
              };
            }

            return data;
          case 'npc':
            data = characters.find(char => {
              return char._id == currentChar;
            });

            // Check if this is a new character
            if (!data) {
              data = {
                _id: currentChar,
                characterName: "Hi! I'm New!",
                characterStatus: '',
                characterSheet: '',
                npc: 'npc',
                campaignId: selectedCampaign._id,
                motivations: [],
                characterNotes: []
              };
            }

            return data;
          default:
            break;
        }
      }

      // Display modal with data appropriate to the user clicked

      // REMOVE - temp/testing code
      return (
        <ModalLarge
          id={modalId}
          characterid={currentChar}
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
      <section style={campaignStyles.section} >
        <div style={campaignStyles.titleLeft}>
          <TitleLarge
            placeholder='campaign title'
            title={selectedCampaign.title}
          />
        </div>
        <div style={campaignStyles.titleRight}>
          <TitleLarge
            placeholder='game system'
            title={selectedCampaign.game}
          />
        </div>
        <section style={campaignStyles.charactersContainer}>
          <ListSm
            title='player characters'
            characters={pcs}
            type='pc'
            openModal={openModal}
            handleModalOpen={handleModalOpen}
            handleSetChar={handleSetChar}
            handleModalId={handleModalId}
          />
          <ListSm
            title='non-player characters'
            characters={npcs}
            type='npc'
            openModal={openModal}
            handleModalOpen={handleModalOpen}
            handleSetChar={handleSetChar}
            handleModalId={handleModalId}
          />
        </section>
        <div style={campaignStyles.btnBar}>
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
            title='future feature'
            id='timeline'
          /*handleModalOpen={handleModalOpen}
          handleModalId={handleModalId}*/
          />
        </div>
        <section style={campaignStyles.adventureList}>
          <ListMd
            type='text'
            adventures={selectedCampaign.adventures}
          />
        </section>
      </section >
    </>
  );
}


// Component that holds the main content
const MainContent = () => {
  const { currentTab, tabList, setTabList, allCampaigns } = useContext(Context);

  // Render the content based on what tab is currently selected
  const renderPage = () => {
    // Check current tab
    if (currentTab == -1) {
      // Render the list of user campaigns
      return <CampaignList />
    } else {
      // Render the campaign matching the id in the current tab
      return <SingleCampaign />
    }
  }

  return (<>{renderPage()}</>);
}


// Component that manages the state variables, useContext, page components, and user data
function NewCampaign({ children }) {
  // Hold the initial query user campaign data
  const dbData = useRef([]);

  // Hold the state of the current tab used for switching between tabs
  const [currentTab, setCurrentTab] = useState('-1');
  // Hold the entire list of tabs opened by the user
  const [tabList, setTabList] = useState([{ id: -1, title: 'your campaigns' }]);

  const [allCampaigns, setAllCampaigns] = useState([]);

  // Once query returns data, load it into allCampaigns state
  useEffect(() => {
    setAllCampaigns(dbData.current);
  }, [dbData.current]);

  // Query the DB for the user's campaigns
  const { loading, error, data } = useQuery(QUERY_USER_CAMPAIGNS, {
    variables: { profileId: Auth.getProfile().data.profile },
    onCompleted: (completedData) => {
      dbData.current = completedData.userCampaigns.campaigns;
    }
  })

  //Store the useState to propagate it down components that need it
  const contextValue = {
    currentTab, setCurrentTab, tabList, setTabList, allCampaigns
  };

  // The onClick for adding new items
  const handleAdd = () => {
    // Deal with needing an unique id while item has not been added to db yet
    let num = allCampaigns.length;
    const itemId = `none-${num++}`;
    const newList = allCampaigns.concat({
      _id: itemId,
      gameName: 'new campaign!',
      ruleSet: 'game time',
      adventures: [],
      characters: [],
      storyOutline: []
    });
    setAllCampaigns(newList);
    setCurrentTab(currentTab);
  };

  return (
    <main
      style={styles.container}
    >
      <section style={styles.section}>
        <div style={styles.titleDiv}>
          <span style={styles.titleBtn}>campaigns</span>

          {currentTab == -1 ? (
            <div
              style={styles.addBtnDiv}
              onClick={() => {
                { handleAdd() }
              }}
            >
              {<Button
                title='new'
              />}
            </div>
          ) : (
            <div>
              <div
                style={styles.addBtnDiv}
                onClick={() => {
                  {/* handleSave() */ }
                }}
              >
                <Button
                  title='save'
                />
              </div>
            </div>
          )}

        </div>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <Context.Provider value={contextValue}>
            {children}
          </Context.Provider>
        )}

      </section>
    </main >
  );
}

// Main page for Campaign
const Campaigns = () => {
  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <NewCampaign>
            <TabContainer />
            <MainContent />

          </NewCampaign>
        </>
      ) : (
        <div>Please log in to view content...</div>
      )}
    </>
  )
}

export default Campaigns;
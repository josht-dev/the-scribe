import React, { useState } from "react";
import Tab from '../Campaigns/Tab';
import CampaignList from '../Campaigns/CampaignList';
import SingleCampaign from "../Campaigns/SingleCampaign";

// Testing data
const campaignArray = [
  {
    _id: 1,
    title: 'fist full of credits',
    game: 'ffg star wars',
    modifiedAt: '2023-01-08 16:42:33',
    adventures: [
      {
        _id: 'A1',
        title: 'Meeting at a tavern!',
        status: 'completed',
        playDate: '2023-01-08 16:42:33'
      },
      {
        _id: 'A2',
        title: 'A murder of Goblins!',
        status: 'Upcoming',
        playDate: '2023-01-20 16:42:33'
      },
      {
        _id: 'A3',
        title: 'Meet Mr. Black...',
        status: 'Upcoming',
        playDate: '2023-01-30 16:42:33'
      },
      {
        _id: 'A4',
        title: 'title',
        status: 'Upcoming',
        playDate: '2023-01-30 16:42:33'
      },
      {
        _id: 'A5',
        title: 'title',
        status: 'Upcoming',
        playDate: '2023-01-30 16:42:33'
      },
      {
        _id: 'A6',
        title: 'title',
        status: 'Upcoming',
        playDate: '2023-01-30 16:42:33'
      },
    ],
    characters: [
      {
        _id: 0,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: false,
        campaignId: [
          1,
          2
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame',
          'Live life to the fullest',
          'Live life to the fullest',
          'Live life to the fullest',
          'Live life to the fullest',
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 1,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: false,
        campaignId: [
          1,
          2
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 2,
        characterName: 'Ken Kenobi',
        characterStatus: '',
        characterSheet: '',
        npc: true,
        campaignId: [
          1,
          2
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 3,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: true,
        campaignId: [
          1,
          2
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 4,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: true,
        campaignId: [
          1
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 5,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: true,
        campaignId: [
          1
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 6,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: true,
        campaignId: [
          1
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 7,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: true,
        campaignId: [
          1
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 8,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: true,
        campaignId: [
          1
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
      {
        _id: 9,
        characterName: 'ben Kenobi',
        characterStatus: 'missing',
        characterSheet: '',
        npc: true,
        campaignId: [
          1
        ],
        motivations: [
          'Live life to the fullest',
          'Gain fame'
        ],
        characterNotes: [
          'the character has gone missing after the big explosion'
        ]
      },
    ]
  },
  {
    _id: 2,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 3,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 4,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 5,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 6,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 7,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 8,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 9,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
  {
    _id: 10,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33'
  },
];

// Styling object
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
  }
};


function Campaigns() {
  const [tabList, setTabList] = useState([{ id: -1, campaignTitle: 'your campaigns' }]);

  // Current selected tab state
  const [currentTab, setCurrentTab] = useState('-1');

  // Function to handle the tab change
  const handleTabChange = (tab) => setCurrentTab(tab);

  // Render main content modal/page
  const renderPage = () => {
    if (currentTab == -1) {
      // Render the list of campaigns
      return <CampaignList
        tabList={tabList}
        setTabList={setTabList}
        campaignArray={campaignArray}
      />
    } else {
      // Get index of currentTab based on _id
      const tabIndex = campaignArray.findIndex(item => {
        return item._id == currentTab;
      });
      // Render a single campaign
      return <SingleCampaign 
        campaign={campaignArray[tabIndex]}
      />
    }
  }

  // Return the large modal/page
  return (
    <main style={styles.container}>
      <section style={styles.section}>
        <>
          <div style={styles.titleDiv}>
            <span style={styles.titleBtn}>campaigns</span>
          </div>
          <div style={styles.tabContainer} id='tabContainer'>
            {tabList.map(item => {
              return (<Tab
                currentTab={currentTab}
                handleTabChange={handleTabChange}
                tab={item}
                key={item.id}
              />)
            })}
          </div>
        </>
        {renderPage()}
      </section>
    </main>
  );
}


export default Campaigns;
import React, { useState, useRef, useEffect } from "react";
import Tab from '../Campaigns/Tab';
import CampaignList from '../Campaigns/CampaignList';
import SingleCampaign from "../Campaigns/SingleCampaign";
import Button from '../Campaigns/Button';
import { gql, useQuery } from "@apollo/client";
import { QUERY_SINGLE_PROFILE, QUERY_USERS, QUERY_CAMPAIGNS, QUERY_SINGLE_CAMPAIGN } from '../../utils/queries'
import { InMemoryCache } from '@apollo/client';


import Auth from '../../utils/auth';


// Testing data
/*
const campaignArray = [
  {
    _id: 1,
    title: 'fist full of credits',
    game: 'ffg star wars',
    modifiedAt: '2023-01-08 16:42:33',
    adventures: [
      {
        _id: 'A1',
        status: 'completed',
        playDate: '2023-01-08 16:42:33',
        title: `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.

        Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.
        
        Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?`
      },
      {
        _id: 'A2',
        status: 'Upcoming',
        playDate: '2023-01-20 16:42:33',
        title: `Chocolate cake macaroon jelly beans candy gummi bears gummi bears cake. Soufflé ice cream sweet roll ice cream biscuit sweet. Pastry macaroon toffee lollipop jelly beans marshmallow. Oat cake bonbon chupa chups pudding fruitcake biscuit topping ice cream cake. Sweet roll topping biscuit chocolate cake brownie jelly-o jelly. Dragée biscuit tart muffin jelly beans halvah bonbon donut.

        Bonbon jelly gummi bears apple pie chocolate pudding sweet roll. Biscuit bear claw chocolate bar toffee topping halvah. Dessert marzipan marshmallow dessert cotton candy. Carrot cake toffee croissant chocolate cake oat cake brownie. Marshmallow cake pastry liquorice tootsie roll croissant pastry muffin. Wafer marzipan jelly-o dessert jelly tootsie roll.`
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
        campaignId: 1,
        motivations: [
          'Live life to the fullest',
          'Gain fame',
          'Live life to the fullest',
          'Live life to the fullest',
          'Live life to the fullest',
          'Live life to the fullest',
        ],
        characterNotes: [
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
          'the character has gone missing after the big explosion',
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
    ],
    story: [
      {
        _id: '1',
        title: '',
        timeline: '',
        bigBad: 'Dr. Evil',
        main: true,
        side: false,
        player: false,
        storyboard: [
          'This is a general note for the gm to keep in mind',
          'This adversary did a thing',
          'This is a secret evil corporation!',
        ],
        objectives: [
          'find the castle',
          'save the princess'
        ],
        setup: 'This is the setup for the story.',
        resolution: 'Here is how the story was resolved for later reference.'
      },
      {
        _id: '2',
        title: '',
        timeline: '',
        bigBad: 'Dr. Evil side 1',
        main: false,
        side: true,
        player: false,
        storyboard: [
          'This is a general note for the gm to keep in mind',
          'This adversary did a thing',
          'This is a secret evil corporation!',
        ],
        objectives: [
          'find the castle',
          'save the princess'
        ],
        setup: 'This is the setup for the story.',
        resolution: 'Here is how the story was resolved for later reference.'
      },
      {
        _id: '3',
        title: '',
        timeline: '',
        bigBad: 'Dr. Evil side 2',
        main: false,
        side: true,
        player: false,
        storyboard: [
          'This is a general note for the gm to keep in mind',
          'This adversary did a thing',
          'This is a secret evil corporation!',
        ],
        objectives: [
          'find the castle',
          'save the princess'
        ],
        setup: 'This is the setup for the story.',
        resolution: 'Here is how the story was resolved for later reference.'
      }
    ]
  },
  {
    _id: 2,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33',
    adventures: [],
    characters: [],
    story: []
  },
  {
    _id: 3,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33',
    adventures: [],
    characters: [],
    story: []
  },
  {
    _id: 4,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33',
    adventures: [],
    characters: [],
    story: []
  },
  {
    _id: 5,
    title: 'title',
    game: 'dnd',
    modifiedAt: '2023-01-08 16:42:33',
    adventures: [],
    characters: [],
    story: []
  }
];
*/
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




function Campaigns() {

  const { loading, data } = useQuery(QUERY_CAMPAIGNS);
   const campaigns = data?.campaigns || [];

  // const campaigns = async () => {
  //   const allCampaigns = await data?.campaigns;
  // }
 

  // console.log(campaigns());

// let myCampaigns = Auth.getProfile().data.args._doc.profile[0].campaigns;

// const getMyCampaigns = async () => {
//   let data = await campaigns();

//   const myData = await data.filter((arr) => {
//     return myCampaigns.includes(arr._id);
//   });
// console.log(myData);
//   return myData;
// }

// let myData = campaigns.filter((arr) => {
//        return myCampaigns.includes(arr._id);
//      });

// console.log(myData);


// const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

  // const { todo } = client.readQuery({
  //   query: READ_TODO,
  //   // Provide any required variables in this object.
  //   // Variables of mismatched types will return `null`.
  //   variables: {
  //     id: 5,
  //   },
  // });
//   const { data, loading, error } = useQuery(QUERY_USERS);

// function getUser() {
//   return useQuery(QUERY_USERS);
// }
//     const user = useQuery(QUERY_USERS);
//     //console.log('user query');
//     //console.log(user);


  // const { loading, error, data } = useQuery(GET_DOGS);
  // const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
  //   variables: { breed },
  // });
  
  
 //const profileId = user.data.user.profile[0]._id;
 ////console.log(profileId);

  //const profile = useQuery(QUERY_SINGLE_PROFILE, {profileId: 'toasterrage'});
 
  //console.log(profile);



  const [tabList, setTabList] = useState([{ id: -1, title: 'your campaigns' }]);

  // Current selected tab state
  const [currentTab, setCurrentTab] = useState('-1');

  // Function to handle the tab change
  const handleTabChange = (tab) => setCurrentTab(tab);

  // Pulling list into a variable so it can be added to and saved
  const initialList = campaigns;
  const [allCampaigns, setAllCampaigns] = useState([]);
   useEffect(() => { 
    setAllCampaigns(initialList)
      
    }, []);

 
  // test
  //let allCampaigns = initialList;
  //console.log('initial allcampaign data');
  //console.log(allCampaigns);
  // const setAllCampaigns = (data) => {
  //   allCampaigns = data;
  //   //console.log('new all campaign data');
  //   //console.log(allCampaigns);
  // }

  // The onClick for adding new items
  const handleAdd = () => {
    // Deal with needing an unique id while item has not been added to db yet
    const itemId = `none-${allCampaigns.length++}`;
    const newList = allCampaigns.concat({
      _id: itemId,
      gameName: 'new campaign!',
      ruleSet: 'game time',
      modifiedAt: '',
      adventures: [],
      characters: [],
      story: []
    });
    setAllCampaigns(newList);
    setCurrentTab(currentTab);
  };

  //const [currentCampaign, setCurrentCampaign] = useState();
  let currentCampaign = useRef('');
  // const setCurrentCampaign = (id) => {currentCampaign = id}
  //console.log('currentCampaign: ' + currentCampaign.current);
  const handleCurrentCampaign = (data) => {
    //console.log('setting current campaign');
    //console.log(data);
    // setCurrentCampaign(data);
    currentCampaign = data;
  }



  // Update campaign with saved data
  /*The data obj takes a value to update or an array to update*/
  const handleSave = () => {
    // Get current data
    //console.log(currentCampaign);

    //let newCampaign = 
    // update story array

    // update adventures array

    // update characters array

    // update entire campaign


  }

  // Render main content modal/page
  const renderPage = () => {
    if (currentTab == -1) {
      // Render the list of campaigns
      return <CampaignList
        tabList={tabList}
        setTabList={setTabList}
        campaignArray={allCampaigns}
        list={allCampaigns}
      />
    } else {
      let data;
      // Get data for currentTab
      for (const x in allCampaigns) {
        if (allCampaigns[x]._id == currentTab) {
          data = allCampaigns[x];
          break;
        }
      }
      // Set current campaign
      handleCurrentCampaign(data);
      //console.log('check current campaign data');
      //console.log(currentCampaign);
      return <SingleCampaign
        campaign={data}
      />

      // const tabIndex = list.findIndex((item, index) => {
        
      //   console.log('tabIndex find hit');
      //   console.log(currentTab);
      //   console.log(item);
      //   console.log('array meth index: ' + index);
      //   return item._id == currentTab;
      // });
      // Render a single campaign
      // return <SingleCampaign
      //   campaign={list[tabIndex]}
      // />
    }
  }

  // Render a save btn when on a campaign
  function SaveBtn() {
    // this btn should only rentder on single campaign pages
    if (currentTab != -1) {
      return (
        <div>
        <div
          style={styles.addBtnDiv}
          onClick={() => {
            handleSave()
          }}
        >
          <Button
            title='save'
          />
        </div>
        </div>
      );
    } else {
      return (<></>)
    }

  }

  // Return the large modal/page
  return (
    <main
      style={styles.container}
    >
      <section style={styles.section}>
        <>
          <div style={styles.titleDiv}>
            <span style={styles.titleBtn}>campaigns</span>
            <div
              style={styles.addBtnDiv}
              onClick={() => {
                handleAdd()
              }}
            >
              <Button
                title='new'
              />
            </div>
            <SaveBtn />
          </div>
          <div style={styles.tabContainer} id='tabContainer'>
            {tabList.flatMap(item => {
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
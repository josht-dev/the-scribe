import React, { useState, useEffect, useRef, useContext, createContext } from "react";
import { gql, useQuery } from "@apollo/client";
import Auth from '../../utils/auth';
import { QUERY_USER_CAMPAIGNS } from '../../utils/queries';
import Tab from '../Campaigns/Tab';
import Button from '../Campaigns/Button';


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




// // Render a save btn when on a campaign
// function SaveBtn() {
//   // this btn should only rentder on single campaign pages
//   // if (currentTab != -1) {
//   if (true) {
//     return (
//       <div>
//         <div
//           style={styles.addBtnDiv}
//           onClick={() => {
//             {/* handleSave() */ }
//           }}
//         >
//           <Button
//             title='save'
//           />
//         </div>
//       </div>
//     );
//   } else {
//     return (<></>)
//   }
// }


// // Grab the user's profileId that was passed back when they logged in
// // const getProfileId = () => {
// //   let myProfileId = Auth.getProfile().data.profile;

// //   // REMOVE - Log used for testing
// //   console.log('my profileID: ' + myProfileId);

// //   return myProfileId;
// // }

// // Get the profileId to send to the DB
// // const profileId = getProfileId();
// const Context = createContext();

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

  console.log('campaignlist hit');
  console.log('allCampaigns recieved');
  console.log(allCampaigns);
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











// Component that holds the main content
const MainContent = () => {
  const { currentTab, tabList, setTabList, allCampaigns } = useContext(Context);

  console.log('mainContent hit');
  console.log(allCampaigns);

  // Render the content based on what tab is currently selected
  const renderPage = () => {
    // Check current tab
    if (currentTab == -1) {
      console.log('render if hit');
      // Render the list of user campaigns
      return <CampaignList />
    } else {








    }
  }

  return (<>{renderPage()}</>);
}



function NewCampaign({ children }) {


  //   // Hold the state of the current tab used for switching between tabs
  //   const [currentTab, setCurrentTab] = useState('-1');
  //   console.log(currentTab);
  //   // Hold the entire list of tabs opened by the user
  //   const [tabList, setTabList] = useState([{ id: -1, title: 'your campaigns' }]);
  //   // Hold all the user campaign data
  //   const [allCampaigns, setAllCampaigns] = useState([]);

  //   // Query the DB for the user's campaigns
  //   // const { loading, error, data } = useQuery(QUERY_USER_CAMPAIGNS, {
  //   //   variables: { profileId: Auth.getProfile().data.profile }
  //   // });


  //   // useEffect(() => {
  //   //   setLoading(true);
  //   //   const getData = async() => {
  //   //     const { data } = useQuery(QUERY_USER_CAMPAIGNS, {
  //   //         variables: { profileId: Auth.getProfile().data.profile }
  //   //       });




  //   //   }

  //   //   setData(getData());


  //   // }, []);

  //   // console.log(data.userCampaigns.campaigns);








  //   // const dbData = useRef();

  //   // Query the DB for the user's campaigns
  //   // const { loading, error, data } = useQuery(QUERY_USER_CAMPAIGNS, {
  //   //   variables: { profileId: Auth.getProfile().data.profile },
  //   //   onCompleted: (completedData) => {
  //   //     console.log('in oncomepte');
  //   //     console.log(completedData);
  //   //     //setAllCampaigns(completedData.userCampaigns.campaigns);
  //   //   }
  //   // });

  //   // // console.log('testing oncomplete');
  //   //  console.log(data.userCampaigns.campaigns);

  //   // if (loading) { return 'Loading...' };
  //   // if (error) { return `Error! ${error.message}` };








  //   // console.log('check usestate');
  //   // console.log(allCampaigns);
  //   //Store the useState to propagate it down components that need it
  //   const contextValue = {
  //     currentTab, setCurrentTab, tabList, setTabList, allCampaigns
  //   };

  const dbData = useRef([]);

  // Hold the state of the current tab used for switching between tabs
  const [currentTab, setCurrentTab] = useState('-1');
  console.log(currentTab);
  // Hold the entire list of tabs opened by the user
  const [tabList, setTabList] = useState([{ id: -1, title: 'your campaigns' }]);

  const [allCampaigns, setAllCampaigns] = useState([]);

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
  if (!loading) {
    console.log('query data')
    console.log(data.userCampaigns.campaigns);

   // dbData.current = data.userCampaigns.campaigns;

    console.log('state data')
    console.log(allCampaigns);
  }


      //Store the useState to propagate it down components that need it
    const contextValue = {
      currentTab, setCurrentTab, tabList, setTabList, allCampaigns
    };


  return (
    <main
      style={styles.container}
    >
      <section style={styles.section}>
        <div style={styles.titleDiv}>
          <span style={styles.titleBtn}>campaigns</span>
          <div
            style={styles.addBtnDiv}
            onClick={() => {
              {/* handleAdd() */ }
            }}
          >
            {/* <Button
              title='new'
            /> */}
          </div>
          {/* <SaveBtn /> */}
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


const Campaign = () => {
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

export default Campaign;
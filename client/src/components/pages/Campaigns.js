import React, { useState, useRef, useEffect } from "react";
import Tab from '../Campaigns/Tab';
import CampaignList from '../Campaigns/CampaignList';
import SingleCampaign from "../Campaigns/SingleCampaign";
import Button from '../Campaigns/Button';
import { gql, useQuery } from "@apollo/client";
import { QUERY_USER_CAMPAIGNS } from '../../utils/queries';

import Auth from '../../utils/auth';








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

// Get the profileId so user campaigns can be pulled
// const getProfileId = () => {
//   let myCampaigns = Auth.getProfile().data.profile;
//   console.log('my profileID: ' + myCampaigns);
//   console.log(myCampaigns);
//   console.log(typeof myCampaigns);

//   return myCampaigns;
// }

// function UseQuery() {
//  // Query the DB for the user's campaigns
//  const { loading, error, data } = useQuery(QUERY_USER_CAMPAIGNS, {
//   variables: { profileId: Auth.getProfile().data.profile },
//   onCompleted: (completedData) => {
//     console.log('in oncomepte');
//     console.log(completedData.userCampaigns.campaigns);

   

//     //setAllCampaigns(completedData.userCampaigns.campaigns);
//   }
// });
//    if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;
// console.log('test');
// return data.userCampaigns.campaigns
// }


async function Campaigns() {

  // const profileId = getProfileId();




  // Current selected tab state
  const [currentTab, setCurrentTab] = useState('-1');
  const [tabList, setTabList] = useState([{ id: -1, title: 'your campaigns' }]);
  // Function to handle the tab change
  const handleTabChange = (tab) => setCurrentTab(tab);
  // Pulling list into a variable so it can be added to and saved
  const [allCampaigns, setAllCampaigns] = useState([]);

  // // Query the DB for the user's campaigns
  // const { loading, error, data } = useQuery(QUERY_USER_CAMPAIGNS, {
  //   variables: { profileId: Auth.getProfile().data.profile },
  //   onCompleted: (completedData) => {
  //     console.log('in oncomepte');
  //     console.log(completedData.userCampaigns.campaigns);

     

  //     //setAllCampaigns(completedData.userCampaigns.campaigns);
  //   }
  // });


  // const { loading, error, data } = useQuery(Query_USER_CAMPAIGNS, {
  //   variables: { profileId }
  // }
  // );
  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;



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
  //let currentCampaign = useRef('');
  // const setCurrentCampaign = (id) => {currentCampaign = id}
  //console.log('currentCampaign: ' + currentCampaign.current);
  const handleCurrentCampaign = (data) => {
    //console.log('setting current campaign');
    //console.log(data);
    // setCurrentCampaign(data);
    //currentCampaign = data;
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
import React, { useState, useEffect, useContext, createContext, Suspense } from "react";
import { gql, useQuery } from "@apollo/client";
import Auth from '../../utils/auth';
import { QUERY_USER_CAMPAIGNS } from '../../utils/queries';
import Tab from '../Campaigns/Tab';
import CampaignList from '../Campaigns/CampaignList';
import SingleCampaign from "../Campaigns/SingleCampaign";
import Button from '../Campaigns/Button';


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


/*
function TabList({ tabList }) {
  let currentTab = 0;
  let handleTabChange = 0;
  return (
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
  );
}
*/
// Render a save btn when on a campaign

function SaveBtn() {
  // this btn should only rentder on single campaign pages
  // if (currentTab != -1) {
  if (true) {
    return (
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
    );
  } else {
    return (<></>)
  }
}




/*
const Context = createContext();

const ChildWithCount = () => {
  const { count, setCount } = useContext(Context);
  console.log('ChildWithCount re-renders');
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <p>Child</p>
    </div>
  );
};

const ExpensiveChild = () => {
  console.log('ExpensiveChild re-renders');
  return <p>Expensive child</p>;
};

const CountContext = ({ children }) => {
  const [count, setCount] = useState(0);
  const contextValue = { count, setCount };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};


<CountContext>
      <ChildWithCount />
      <ExpensiveChild />
    </CountContext>
*/






// Grab the user's profileId that was passed back when they logged in
const getProfileId = () => {
  let myProfileId = Auth.getProfile().data.profile;

  // REMOVE - Log used for testing
  console.log('my profileID: ' + myProfileId);

  return myProfileId;
}

// Get the profileId to send to the DB
const profileId = getProfileId();
const Context = createContext();



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






function NewCampaign({ children }) {
  console.log(children);
  // Hold the state of the current tab used for switching between tabs
  const [currentTab, setCurrentTab] = useState('-1');
  console.log(currentTab);
  // Hold the entire list of tabs opened by the user
  const [tabList, setTabList] = useState([{ id: -1, title: 'your campaigns' }]);
  // Hold all the user campaign data
  const [allCampaigns, setAllCampaigns] = useState([]);

  const { loading, error, data } = useQuery(QUERY_USER_CAMPAIGNS, {
    variables: { profileId }
  }, { onCompleted: setAllCampaigns }
  );
  if (loading) { return 'Loading...' };
  if (error) { return `Error! ${error.message}` };


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



        <Context.Provider value={contextValue}>
          {children}
        </Context.Provider>



      </section>
    </main >
  );
}

const App = () => {
  return (
    <NewCampaign>
      <TabContainer />

    </NewCampaign>
  )
}






export default App;
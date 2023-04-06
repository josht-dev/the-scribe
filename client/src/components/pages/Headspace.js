import React, { useState, useRef, useEffect } from "react";
import Tab from "../Campaigns/Tab";
import HeadspaceList from "../Headspace/HeadspaceList";
import SingleHeadspace from "../Headspace/SingleHeadspace";
import Button from '../Campaigns/Button';
import HeadpaceForm from "../Headspace/HeadSpaceForm"

import { useQuery } from "@apollo/client";
import { QUERY_USERPOSTS } from "../../utils/queries";
import Auth from '../../utils/auth';

// Styling object
const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
  },
  section: {
    position: "absolute",
    top: "10rem",
    width: "75rem",
    height: "50rem",
    backgroundColor: "#fff",
    borderRadius: ".25rem",
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    zIndex: 3,
  },
  titleDiv: {
    display: "flex",
    alignItems: "center",
    width: "75rem",
  },
  titleBtn: {
    margin: "0.5rem",
    padding: ".5rem 1.5rem",
    float: "left",
    backgroundColor: "#1CB9B3",
    boxShadow:
      "0px 3px 5px -2px rgba(0, 0, 0, 0.2), 0px 2px 3px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "0.25rem",
    color: "#fff",
  },
  tabContainer: {
    margin: "0.5rem 0.5rem 0 0.5rem",
    display: "flex",
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


export default function Headspace() {

  const dbData = useRef([]);

  // Current selected tab state
  const [currentTab, setCurrentTab] = useState("-1");

  const [tabList, setTabList] = useState([
    { id: -1, title: "Headspace" },
  ]);

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => { setUserPosts(dbData.current) }, [dbData.current]);

  const { loading, data } = useQuery(QUERY_USERPOSTS, {
    onCompleted: (completedData) => {
      dbData.current = completedData.userPosts;
    }
  });

  // Function to handle the tab change
  const handleTabChange = (tab) => setCurrentTab(tab);

  // Render main content modal/page
  const renderPage = () => {
    if (currentTab == -1) {
      // Render the list of headspace posts

      return (
        <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <HeadspaceList
              tabList={tabList}
              setTabList={setTabList}
              userPosts={userPosts}
            />
          )}
        </>
      );
    } else {
      // Get index of currentTab based on _id
      const tabIndex = userPosts.findIndex((item) => {
        return item._id === currentTab;
      });
      // Render a single headspace post
      return <SingleHeadspace userPost={userPosts[tabIndex]} username={Auth.getProfile().data.username} />;
    }
  }
  console.log(userPosts);
  // The onClick for adding new items
  const handleAdd = () => {
    // Deal with needing an unique id while item has not been added to db yet
    let num = userPosts.length;
    const itemId = `none-${num++}`;
    const newList = userPosts.concat({
      _id: itemId,
      username: '',
      title: 'unsaved new post',
      subject: 'unsavedPost',
      body: 'you should put your thoughts here',
      comments: []
    });
    setUserPosts(newList);
    setCurrentTab(currentTab);
  };


  // Return the large modal/page
  return (
    <>
      {Auth.loggedIn() ? (

        <main
          style={styles.container}
        >
          <section style={styles.section}>
            <>
              <div style={styles.titleDiv}>
                <span style={styles.titleBtn}>Headspace</span>

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
                        {/* handleSave()  */ }
                      }}
                    >
                      <Button
                        title='save'
                      />
                    </div>
                  </div>
                )}
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

      ) : (
        <div>Please log in to view content...</div>
      )
      }
    </>
  )
}

import React, { useState } from "react";
import Tab from "../Campaigns/Tab";
import HeadspaceList from "../Headspace/HeadspaceList";
import SingleHeadspace from "../Headspace/SingleHeadspace";
import HeadpaceForm from "../Headspace/HeadSpaceForm"

import { useQuery } from "@apollo/client";
import { QUERY_USERPOSTS } from "../../utils/queries";

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
};

export default function Headspace() {
    const { loading, data } = useQuery(QUERY_USERPOSTS);
    const userPosts = data?.userPosts || [];
  const [tabList, setTabList] = useState([
    { id: -1, title: "Headspace" },
  ]);

  // Current selected tab state
  const [currentTab, setCurrentTab] = useState("-1");

  // Function to handle the tab change
  const handleTabChange = (tab) => setCurrentTab(tab);

  // Render main content modal/page
  const renderPage = () => {
    if (currentTab == -1) {
      // Render the list of headspace posts



      return (
        <HeadspaceList
          tabList={tabList}
          setTabList={setTabList}
          //headspaceArray={headspaceArray}
          userPosts={userPosts}
        />

      );
    } else {
      // Get index of currentTab based on _id
      const tabIndex = headspaceArray.findIndex((item) => {
        return item._id === currentTab;
      });
      // Render a single headspace post
      return <SingleHeadspace headspaceArray={headspaceArray[tabIndex]} />;
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
            <span style={styles.titleBtn}>Headspace</span>
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
)}

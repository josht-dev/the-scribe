import React, { useState } from "react";
import Tab from "../Campaigns/Tab";
import HeadspaceList from "../Headspace/HeadspaceList";
import SingleHeadspace from "../Headspace/SingleHeadspace";

const headspaceArray = [
  // Empty Array Item for Seeds
  //! CreatedAt?
  //   {
  //     _id: "0",
  //     title: "",
  //     subject: "",
  //     body: "",
  //     username: "",
  //     comments: [
  //       {
  //         _id: "C0",
  //         commentBody: "",
  //         commentWriter: "",
  //       },
  //     ],
  //     category: "",
  //   },

  {
    _id: "1",
    title: "Can I get some help with loot distribution?",
    subject: "",
    body: "Here is a post from a GM. Seeks advice or help on their story, player situations, or practically anything else related to running tabletop RPGs.",
    username: "JoshT-Dev",
    comments: [
      {
        _id: "C1",
        commentBody: "Wow, you can comment on Posts, too!",
        commentWriter: "artiecannv",
      },
    ],
    category: "",
  },
  {
    _id: "2",
    title: "New Player Chacters",
    subject: "",
    body: "Using the post system to show off the new charcter models I've made.",
    username: "randomguy21",
    comments: [
      {
        _id: "C2",
        commentBody: "Cool concepts man",
        commentWriter: "bartjackson6",
      },
    ],
    category: "",
  },
  {
    _id: "3",
    title: "Lorem Ipsum",
    subject: "",
    body: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    username: "bartjackson6",
    comments: [
      {
        _id: "C3",
        commentBody: "Cool!",
        commentWriter: "randomguy21",
      },
    ],
    category: "",
  },
  {
    _id: "4",
    title: "Curabitur Vitae Nunc",
    subject: "",
    body: "Fermentum et sollicitudin ac orci phasellus egestas tellus. Nunc sed blandit libero volutpat sed cras.",
    username: "artiecannv",
    comments: [
      {
        _id: "C4",
        commentBody: "First Post",
        commentWriter: "Josht-GM",
      },
    ],
    category: "",
  },
  {
    _id: "5",
    title: "Placeholder Post",
    subject: "",
    body: "Let's see if I can actually get these to pull up on the modal",
    username: "thequeen",
    comments: [
      {
        _id: "C5",
        commentBody: "... is that the queen?",
        commentWriter: "brit",
      },
    ],
    category: "",
  },
];

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
  const [tabList, setTabList] = useState([
    { id: -1, campaignTitle: "Headspace" },
  ]);

  // Current selected tab state
  const [currentTab, setCurrentTab] = useState("-1");

  // Function to handle the tab change
  const handleTabChange = (tab) => setCurrentTab(tab);

  // Render main content modal/page
  const renderPage = () => {
    if (currentTab === -1) {
      // Render the list of headspace posts
      return (
        <HeadspaceList
          tabList={tabList}
          setTabList={setTabList}
          HeadspaceArray={headspaceArray}
        />
      );
    } else {
      // Get index of currentTab based on _id
      const tabIndex = headspaceArray.findIndex((item) => {
        return item._id === currentTab;
      });
      // Render a single headspace post
      return <SingleHeadspace campaign={headspaceArray[tabIndex]} />;
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
)}

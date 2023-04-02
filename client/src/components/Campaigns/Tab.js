import React from "react";

// Styling object
const styles = {
  tab: {
    padding: "0.5rem 1rem",
    marginRight: "0.25rem",
    borderWidth: "2px 2px 0px 2px",
    borderStyle: "solid",
    borderColor: "#1CB9B3",
    borderRadius: "0.25rem 0.25rem 0 0",
    fontWeight: 500,
  },
};

export default function CampaignTabs(props) {
  // Event listener for campaign tab click
  const onTabClick = (event) => {
    // Get the campaignid
    const campaignId = event.nativeEvent.srcElement.dataset.campaignid;
    // Validate that this tab is NOT already open
    if (props.currentTab !== campaignId) {
      // Change the currentTab state
      props.handleTabChange(campaignId);
    }
  };

  return (
    <span
      style={styles.tab}
      className={props.tab.id == props.currentTab ? "selectedTab" : ""}
      data-campaignid={props.tab.id}
      onClick={onTabClick}
    >
      {props.tab.campaignTitle}
    </span>
  );
}

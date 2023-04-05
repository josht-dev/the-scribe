import { useQuery, gql } from '@apollo/client';
import React, { useState } from 'react';

/*
const MY_QUERY = gql`
  query MyQuery {
    users {
      _id
      email
      username
    }
  }
`
*/

/*
const TEST_QUERY = gql`
  query TestQuery($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      campaigns {
        _id
        gameName
        ruleSet
        notes
        adventures {
          _id
          encounters
          notes
          objectives
          resolution
          setup
          title
        }
      }
    }
  }
`
*/

const Query_USER_CAMPAIGNS = gql`
  query getUserCampaigns($profileId: ID!) {
  userCampaigns(profileId: $profileId) {
    _id
    about
    profileUser
    profilePicture
    campaigns {
      _id
      gameName
      ruleSet
      genre
      notes
      storyOutline {
        _id
        campaign
        objectives
        timeline
        bigBad
        main
        side
        player
        storyBoard
        title
      }
      adventures {
        _id
        title
        setup
        resolution
        notes
        objectives
        encounters
        campaign
      }
      characters {
        _id
        characterName
        characterStatus
        motivations
        characterNotes
        characterSheet
        npc
      }
      currentDateInGame
    }
  }
}
`

/*
campaignId: 642d1eb92b281059c3f81329
*/



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
    width: "45rem",
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
  logoStyle: {
    display: "flex",
    justifyContent: "center",
  },
  imgStyle: {
    height: "4.6rem",
    width: "4.6rem",
    margin: "2rem"
  },
  aboutStyle: {},
};

function TestPage() {
  const profileId = '642bef9c81917242133a870b';

  const { loading, error, data } = useQuery(Query_USER_CAMPAIGNS, {
    variables: { profileId }
  }
  );
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <main style={styles.container}>
      <section style={styles.section}>
        <>
          <div style={styles.titleDiv}>
            <span style={styles.titleBtn}>test page</span>
          </div>
        </>
        <p>Testing</p>

      </section>
    </main>
  );
}

// {data.users.map((x, index) => (
//   <div
//     key={index}
//   >
//     <div style={styles.titleDiv}>
//       <span style={styles.titleBtn}>{x._id}</span>
//     </div>
//     <div style={styles.titleDiv}>
//       <span style={styles.titleBtn}>{x.username}</span>
//     </div>
//     <div style={styles.titleDiv}>
//       <span style={styles.titleBtn}>{x.email}</span>
//     </div>
//   </div>
// ))}

export default TestPage;
import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query getSingleuser {
    user {
      _id
      username
      email
      profile {
        _id
      }
      userPosts {
        _id
        title
        body
        # createdAt
      }
    }
  }
`;

export const QUERY_USERPOSTS = gql`
  query getUserPosts {
    userPosts {
      _id
      body
      subject
      title
      username
      comments {
        commentBody
        commentWriter
      }
    }
  }
`;

export const QUERY_SINGLE_USERPOST = gql`
  query getSingleUserPost($userPostId: ID!) {
    userPost(userPostId: $userPostId) {
      _id
      body
      subject
      title
      username
      comments {
        commentBody
        commentWriter
      }
    }
  }
`;

// for future dev
// export const QUERY_COMMENTS = gql`
//   query getComments {
//     comments {
//       _id
//       commentBody
//       userPost {
//         _id
//       }
//     }
//   }
// `;
// export const QUERY_SINGLE_COMMENT = gql`
//   query getSingleComment($commentId: ID!) {
//     comments(commentId: $commentId) {
//       _id
//       commentBody
//       userPost {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_REACTIONS = gql`
//   query getReactions($commentId: ID!) {
//     reactions(commentId: $commentId) {
//       comments {
//         _id
//       }
//       reactionBody
//     }
//   }
// `;

export const QUERY_PROFILES = gql`
  query getProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      profileUser
      profilePicture
    }
  }
`;
export const QUERY_SINGLE_PROFILE = gql`
  query getSingleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      about
      profilePicture
      profileUser
      campaigns {
        _id
        currentDateInGame
        gameName
        genre
        notes
        ruleSet
        adventures {
          _id
          campaign
          encounters
          notes
          objectives
          resolution
          setup
          title
        }
        characters {
          _id
          characterName
          characterNotes
          characterSheet
          characterStatus
          motivations
          npc
        }
        storyOutline {
          _id
          bigBad
          campaign
          main
          objectives
          player
          side
          storyBoard
          timeline
          title
        }
      }
    }
  }
`;

export const QUERY_CAMPAIGNS = gql`
  query getCampaigns {
    campaigns {
      _id
      gameName
      ruleSet
    }
  }
`;
export const QUERY_SINGLE_CAMPAIGN = gql`
  query getSingleCampaign($campaignId: ID!) {
    campaign(campaignId: $campaignId) {
      _id
      currentDateInGame
      gameName
      genre
      notes
      ruleSet
      adventures {
        _id
        campaign
        encounters
        notes
        objectives
        resolution
        setup
        title
      }
      characters {
        _id
        characterName
        characterNotes
        characterSheet
        characterStatus
        motivations
        npc
      }
      storyOutline {
        _id
        bigBad
        campaign
        main
        objectives
        player
        side
        storyBoard
        timeline
        title
      }
    }
  }
`;

export const QUERY_USER_CAMPAIGNS = gql`
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
`;



export const QUERY_STORIES = gql`
  query getStories {
    stories {
      _id
      side
      player
      main
      bigBad
      campaign
      objectives
      storyBoard
      timeline
      title
    }
  }
`;
export const QUERY_SINGLE_STORY = gql`
  query getSinleStory($storyId: ID!) {
    story(storyId: $storyId) {
      _id
      bigBad
      campaign
      main
      objectives
      player
      side
      storyBoard
      timeline
      title
    }
  }
`;

export const QUERY_ADVENTURES = gql`
  query getAdventures {
    adventures {
      _id
      campaign
      encounters
      notes
      objectives
      resolution
      setup
      title
    }
  }
`;
export const QUERY_SINGLE_ADVENTURE = gql`
  query getSingleAdventure($adventureId: ID!) {
    adventure(adventureId: $adventureId) {
      _id
      campaign
      encounters
      notes
      objectives
      resolution
      setup
      title
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getCharacters {
    characters {
      _id
      characterName
      characterNotes
      characterSheet
      characterStatus
      motivations
      npc
    }
  }
`;
export const QUERY_SINGLE_CHARACTER = gql`
  query getSingleCharacter($characterId: ID!) {
    character(characterId: $characterId) {
      _id
      characterName
      characterNotes
      characterSheet
      characterStatus
      motivations
      npc
    }
  }
`;

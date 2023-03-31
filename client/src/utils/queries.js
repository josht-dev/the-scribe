import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      userPosts {
        _id
        title
        body
        createdAt
      }
    }
  }
`;

export const QUERY_USERPOSTS = gql`
  query getUserPosts {
    userPosts {
      _id
      title
      body
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_SINGLE_USERPOST = gql`
  query getSingleUserPost($userPostId: ID!) {
    userPost(userPostId: $userPostId) {
      _id
      title
      body
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      commentBody
      userPost {
        _id
      }
    }
  }
`;
export const QUERY_SINGLE_COMMENT = gql`
  query getSingleComment($commentId: ID!) {
    comments(commentId: $commentId) {
      _id
      commentBody
      userPost {
        _id
      }
    }
  }
`;

export const QUERY_REACTIONS = gql`
  query getReactions($commentId: ID!) {
    reactions(commentId: $commentId) {
      comments {
        _id
      }
      reactionBody
    }
  }
`;

export const QUERY_PROFILES = gql`
  query getProfiles {
    profiles {
      user {
        _id
        username
      }
      about
    }
  }
`;
export const QUERY_SINGLE_PROFILE = gql`
  query getSingleProfile($userId: ID!) {
    profile($userID: userId) {
      user {
        _id
        username
      }
      about
    }
  }
`;

export const QUERY_CAMPAIGNS = gql`
  query getCampaigns {
    campaigns {
      profile {
        _id
      }
      gameName
      ruleSet
      genre
    }
  }
`;
export const QUERY_SINGLE_CAMPAIGN = gql`
  query getSingleCampaign($campaignId: ID!) {
    campaign(campaignId: $campaignId) {
      _id
      profile {
        _id
      }
      gameName
      ruleSet
      genre
    }
  }
`;

export const QUERY_STORIES = gql`
  query getStories {
    stories {
      _id
      campaign {
        _id
      }
      main
      side
      player
      title
    }
  }
`;
export const QUERY_SINGLE_STORY = gql`
  query getSingleStory($storyId: ID!) {
    story(storyId: $storyId) {
      _id
      campaign {
        _id
      }
      main
      side
      player
      title
    }
  }
`;

export const QUERY_ADVENTURES = gql`
  query getAdventures {
    adventures {
      _id
      campaign {
        _id
      }
      title
    }
  }
`;
export const QUERY_SINGLE_ADVENTURE = gql`
  query getSingleAdventure($adventureId: ID!) {
    adventure(adventureId: $adventureId) {
      _id
      campaign {
        _id
      }
      title
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  query getCharacters {
    characters {
      characterName
    }
  }
`;
export const QUERY_SINGLE_CHARACTER = gql`
  query getSingleCharacter($characterName: String!) {
    character(characterName: $characterName) {
      characterName
    }
  }
`;

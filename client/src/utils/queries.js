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
  query getComments($commentBody: String!, $userPostId: String!) {
    addComment(commentBody: $commentBody, userPostId: $userPostId) {
      _id
      commentBody
      userPost {
        _id
      }
    }
  }
`;

export const QUERY_REACTIONS = gql`
  mutation addReaction($commentId: String!, $reactionBody: String!) {
    addReaction(commentId: $commentId, reactionBody: $reactionBody) {
      comments {
        _id
      }
      reactionBody
    }
  }
`;

export const QUERY_PROFILES = gql`
  mutation addProfile($username: String!, $about: String!) {
    addProfile(username: $username, about: $about) {
      user {
        _id
        username
      }
      about
    }
  }
`;
export const QUERY_SINGLE_PROFILE = gql`
  mutation addProfile($username: String!, $about: String!) {
    addProfile(username: $username, about: $about) {
      user {
        _id
        username
      }
      about
    }
  }
`;

export const QUERY_CAMPAIGNS = gql`
  mutation addCampaign(
    $profileId: String!
    $gameName: String!
    $ruleSet: String!
    $genre: String!
  ) {
    addCampaign(
      profileId: $profileId
      gamename: $gameName
      ruleSet: $ruleSet
      genre: $genre
    ) {
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
  mutation addCampaign(
    $profileId: String!
    $gameName: String!
    $ruleSet: String!
    $genre: String!
  ) {
    addCampaign(
      profileId: $profileId
      gamename: $gameName
      ruleSet: $ruleSet
      genre: $genre
    ) {
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
  mutation addStory(
    $campaignId: String!
    $main: String!
    $side: String!
    $player: String!
    $title: String!
  ) {
    addStory(
      campaignId: $campaignId
      main: $main
      side: $side
      player: $player
      title: $title
    ) {
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
  mutation addStory(
    $campaignId: String!
    $main: String!
    $side: String!
    $player: String!
    $title: String!
  ) {
    addStory(
      campaignId: $campaignId
      main: $main
      side: $side
      player: $player
      title: $title
    ) {
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
  mutation addAdventure($campaignId: String!, $title: String!) {
    addAdventure(campaignId: $campaignId, title: $title) {
      campaign {
        _id
      }
      title
    }
  }
`;
export const QUERY_SINGLE_ADVENTURE = gql`
  mutation addAdventure($campaignId: String!, $title: String!) {
    addAdventure(campaignId: $campaignId, title: $title) {
      campaign {
        _id
      }
      title
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  mutation addCharacter($characterName: String!) {
    addCharacter(characterName: $characterName) {
      characterName
    }
  }
`;
export const QUERY_SINGLE_CHARACTER = gql`
  mutation addCharacter($characterName: String!) {
    addCharacter(characterName: $characterName) {
      characterName
    }
  }
`;

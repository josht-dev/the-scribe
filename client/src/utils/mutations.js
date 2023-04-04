import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USERPOST = gql`
  mutation addUserPost($title: String!, $body: String!, $username: String!) {
    addUserPost(title: $title, body: $body, username: $username) {
      title
      body
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentBody: String!, $userPostId: ID!) {
    addComment(commentBody: $commentBody, userPostId: $userPostId) {
      _id
      commentBody
      userPost {
        _id
      }
    }
  }
`;

export const ADD_REACTION = gql`
  mutation addReaction($commentId: ID!, $reactionBody: String!) {
    addReaction(commentId: $commentId, reactionBody: $reactionBody) {
      comments {
        _id
      }
      reactionBody
    }
  }
`;

export const ADD_PROFILE = gql`
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

export const ADD_CAMPAIGN = gql`
  mutation addCampaign(
    $profileId: ID!
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

export const ADD_STORY = gql`
  mutation addStory(
    $campaignId: ID!
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

export const ADD_ADVENTURE = gql`
  mutation addAdventure($campaignId: ID!, $title: String!) {
    addAdventure(campaignId: $campaignId, title: $title) {
      campaign {
        _id
      }
      title
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation addCharacter($characterName: String!) {
    addCharacter(characterName: $characterName) {
      characterName
    }
  }
`;

import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
      username
      profile {
        _id
        campaigns {
          _id
          gameName
          genre
          notes
          ruleSet
          currentDateInGame
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
        }
      }
    }
  }
}

`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        profile {
          _id
        }
      }
    }
  }
`;

export const ADD_USERPOST = gql`
  mutation addUserPost($title: String!, $body: String!, $subject: String!) {
    addUserPost(title: $title, body: $body, subject: $subject) {
      _id
      body
      subject
      title
      username
    }
  }
`;

//future dev
// export const ADD_COMMENT = gql`
//   mutation addComment($commentBody: String!, $userPostId: ID!) {
//     addComment(commentBody: $commentBody, userPostId: $userPostId) {
//       _id
//       commentBody
//       userPost {
//         _id
//       }
//     }
//   }
// `;

// export const ADD_REACTION = gql`
//   mutation addReaction($commentId: ID!, $reactionBody: String!) {
//     addReaction(commentId: $commentId, reactionBody: $reactionBody) {
//       comments {
//         _id
//       }
//       reactionBody
//     }
//   }
// `;

export const ADD_PROFILE = gql`
  mutation addProfile($about: String) {
    addProfile(about: $about) {
      _id
      about
      profilePicture
      profileUser
    }
  }
`;

export const ADD_CAMPAIGN = gql`
  mutation addCampaign($gameName: String!, $profileId: ID!) {
    addCampaign(gameName: $gameName, profileId: $profileId) {
      _id
      gameName
    }
  }
`;

export const ADD_STORY = gql`
  mutation addStory(
    $title: String
    $main: Boolean
    $side: Boolean
    $player: Boolean
    $campaignId: ID
  ) {
    addStory(
      title: $title
      main: $main
      side: $side
      player: $player
      campaignId: $campaignId
    ) {
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

export const ADD_ADVENTURE = gql`
  mutation addAdventure($title: String!, $campaignId: ID!) {
    addAdventure(title: $title, campaignId: $campaignId) {
      _id
      title
    }
  }
`;

export const ADD_CHARACTER = gql`
  mutation AddCharacter(
    $characterName: String!
    $npc: Boolean!
    $campaignId: ID!
  ) {
    addCharacter(
      characterName: $characterName
      npc: $npc
      campaignId: $campaignId
    ) {
      _id
      characterName
      npc
    }
  }
`;

export const ADD_COMMENT = gql`
mutation AddComment($commentBody: String!, $userPostId: ID) {
  addComment(commentBody: $commentBody, userPostId: $userPostId) {
    _id
    commentBody
    commentWriter
  }
}
`

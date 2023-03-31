const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userPosts(userPostId: ID!): UserPost
  }

  type UserPost {
    _id: ID
    title: String
    subject: String
    body: String
    username(userId: ID!): User
    comments: [Comment]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID
    postId(userPostId: ID!): UserPost
    commentBody: String
    username(userId: ID!): User
    reactions: [Reaction]!
  }

  type Reaction {
    _id: ID
    reactionId(commentId: ID!): Comment
    reactionBody: String
    username(userId: ID!): User
  }

  type Profile {
    _id: ID
    about: String
    campaigns(campaignId: ID!): Campaign
    username(userId: ID!): User
    profilePicture: String
  }

  type Campaign {
    _id: ID
    gameName: String
    ruleSet: String
    genre: String
    notes: String
    storyOutline(storyId: ID!): Story
    adventures(adventureId: ID!): Adventure
    characters(characterId: ID!): Character
  }

  type Story {
    _id: ID
    campaignId(campaignId: ID!): Campaign
    characters(characterId: ID!): Character
    timeline: String
    bigBad: String
    main: Boolean
    side: Boolean
    player: Boolean
    storyBoard: String
    title: String
  }

  type Character {
    characterName: String
    characterStatus: String
    motivations: String
    characterNotes: String
    characterSheet: String
    npc: Boolean
    campaignId(campaignId: ID!): Campaign
  }

  type Adventure {
    title: String
    setup: String
    resolution: String
    notes: String
    objectives: String
    characters(characterId: ID!): Character
    encounters: String
    campaignId(campaignId: ID!): Campaign
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    userPosts: [UserPost]!
    userPost(userPostId: ID!): UserPost
    campaigns: [Campaign]!
    campaign(campaignId: ID!): Campaign
    stories: [Story]!
    story(storyId: ID!): Story
    reactions: [Reaction]!
    reaction(reactionId: ID!): Reaction
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    comments: [Comment]!
    comment(commentId: ID!): Comment
    characters: [Character]!
    character(characterId: ID!): Character
    adventures: [Adventure]!
    adventure(adventureId: ID!): Adventure
    individual: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    modifyUser(username: String!, email: String!, password: String!): User
    removeUser(userId: ID!): User
    login(email: String!, password: String!): Auth
    addUserPost(title: String!, username: ID!, body: String!): UserPost
    modifyUserPost(title: String!, username: ID!, body: String!): UserPost
    removeUserPost(userPostId: ID!): UserPost
    addCampaign(gameName: String!, ruleSet: String, genre: String): Campaign
    modifyCampaign(gameName: String!, ruleSet: String, genre: String): Campaign
    removeCampaign(campaignId: ID!, userId: ID): Campaign
    addStory(
      title: String
      campaignId: ID!
      main: Boolean
      side: Boolean
      player: Boolean
    ): Story
    modifyStory(
      title: String
      timeline: String
      bigBad: String
      main: Boolean
      side: Boolean
      player: Boolean
      storyBoard: String
    ): Story
    removeStory(storyId: ID!): Story
    addReaction(reactionBody: String!, username: ID!): Reaction
    modifyReaction(reactionBody: String!): Reaction
    removeReaction(reactionId: ID!): Reaction
    addProfile(username: ID!, about: String): Profile
    modifyProfile(about: String!, profilePicture: String!): Profile
    removeProfile(profileId: ID!, userId: ID): Profile
    addComment(commentBody: String!): Comment
    modifyComment(commentBody: String!): Comment
    removeComment(commentId: ID!): Comment
    addCharacter(characterName: String!): Character
    modifyCharacter(characterName: String!): Character
    removeCharacter(characterId: ID!, userId: ID): Character
    addAdventure(title: String!): Adventure
    modifyAdventure(
      title: String!
      setup: String
      resolution: String
      notes: String
      objectives: String
      encounters: String
    ): Adventure
    removeAdventure(adventureId: ID!): Adventure
  }
`;

module.exports = typeDefs;

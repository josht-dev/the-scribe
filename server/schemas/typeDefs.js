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
    createdAt: Date
    username(userId: ID!): User
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    postId(userPostId: ID!): UserPost
    commentBody: String
    username(userId: ID!): User
    createdAt: Date
    reactions: [reactionSchema]!
  }

  type Reaction {
    _id: ID
    reactionId(commentId: ID!): Comment
    reactionBody: String
    username(userId: ID!): User
    createdAt: Date
  }

  type Profile {
    _id: ID
    about: String
    campaigns(campaignId: ID!): Campaigns
    username(userId: ID!): User
    profilePicture: String 
  }

  type Campaign {
    _id: ID
    gameName: String
    ruleSet: String
    createdAt: Date
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
 }

 type Mutation {
  addUser(username: String!, email: String!, password: String!): User
  modifyUser(username: String!, email: String!, password: String!): User
  removeUser(userId: ID!): User
  addUserPost(title: String!, username: ID!, body: String!): UserPost
  modifyUserPost(title: String!, username: ID!, body: String!): UserPost
  removeUserPost(userPostId: ID!): UserPost
  addCampaign(gameName: String!): Campaign
  modifyCampaign(gameName: String!): Campaign
  removeCampaign(campaignId: ID!, userId: ID): Campaign
  addStory(campaignId: ID!): Story
  modifyStory(campaignId: ID!): Story
  removeStory(storyId: ID!, userId: ID): Story
  addReaction(commentId: ID!, reactionBody: String!, username: ID!): Reaction
  modifyReaction(reactionBody: String!): Reaction
  removeReaction(reactionId: ID!): Reaction
  addProfile(username: ID!): Profile
  modifyProfile(about: String!, profilePicture: String!): Profile
  removeProfile(profileId: ID!, userId: ID): Profile
  addComment(postId: ID!, commentBody: String!): Comment
  modifyComment(commentBody: String!): Comment
  removeComment(commentId: ID!): Comment
  addCharacter(characterName: String!): Character
  modifyCharacter(characterName: String!): Character
  removeCharacter(characterId: ID!, userId: ID): Character
  addAdventure(title: String!): Adventure
  modifyAdventure(title: String!): Adventure
  removeAdventure(adventureId: ID!, userId: ID): Adventure
 }
`;

module.exports = typeDefs;

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userPosts(userPostId: ID!): UserPost
    profile(profileId: ID!): Profile
    campaigns(campaignId: ID!): Campaign
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
    commentBody: String
    commentWriter: String
  }

  type Reaction {
    _id: ID
    reactionBody: String
    reactionWriter: String
  }

  type Profile {
    _id: ID
    about: String
    profileUser: String
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
    profileUser: String
  }

  type Story {
    _id: ID
    campaign: String
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
    profiles: [Profile]!
    profile(profileId: ID!): Profile
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
    addUserPost(title: String!, body: String!, subject: String!): UserPost
    modifyUserPost(title: String!, body: String!): UserPost
    removeUserPost(userPostId: ID!): UserPost
    addCampaign(gameName: String!, ruleSet: String!, genre: String!): Campaign
    modifyCampaign(gameName: String!, ruleSet: String, genre: String): Campaign
    removeCampaign(campaignId: ID!, userId: ID): Campaign
    addStory(
      title: String
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
    addReaction(reactionBody: String!, commentId: ID!): UserPost
    modifyReaction(reactionBody: String!): Reaction
    removeReaction(reactionId: ID!): Reaction
    addProfile(about: String!): Profile
    modifyProfile(about: String!, profilePicture: String!): Profile
    removeProfile(profileId: ID!): Profile
    addComment(commentBody: String!, userPostId: ID!): UserPost
    modifyComment(commentBody: String!): Comment
    removeComment(commentId: ID!): Comment
    addCharacter(characterName: String!, npc: Boolean!): Character
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

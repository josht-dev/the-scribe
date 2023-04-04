const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    userPosts: [UserPost]!
    profile: [Profile]!
  }

  type UserPost {
    _id: ID!
    title: String!
    subject: String!
    body: String!
    username: String!
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
    campaigns: [Campaign]
  }

  type Campaign {
    _id: ID
    gameName: String
    ruleSet: String
    genre: String
    notes: [String]
    storyOutline: [Story]
    adventures: [Adventure]
    characters: [Character]
    currentDateInGame: String
  }

  type Story {
    _id: ID
    campaign: String
    objectives: [String]
    timeline: String
    bigBad: String
    main: Boolean
    side: Boolean
    player: Boolean
    storyBoard: [String]
    title: String
  }

  type Character {
    _id: ID
    characterName: String
    characterStatus: String
    motivations: [String]
    characterNotes: [String]
    characterSheet: String
    npc: Boolean
  }

  type Adventure {
    _id: ID
    title: String
    setup: String
    resolution: String
    notes: [String]
    objectives: [String]
    encounters: [String]
    campaign: String
  }

  type Query {
    users: [User]
    user(username: String!): User
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
    modifyUser(
      username: String!
      email: String!
      password: String
      newPassword: String
      userId: ID
    ): User
    removeUser(userId: ID!): User
    login(email: String!, password: String!): Auth
    addUserPost(title: String!, body: String!, subject: String!): UserPost
    updateUserPost(
      title: String!
      body: String!
      subject: String!
      userPostId: ID!
    ): UserPost
    removeUserPost(userPostId: ID!): UserPost
    addCampaign(
      gameName: String!
      profileId: ID!
    ): Campaign
    modifyCampaign(
      gameName: String!
      ruleSet: String!
      genre: String
      notes: [String]
      currentDateInGame: String
      campaignId: ID!
    ): Campaign
    removeCharacter(characters: ID, campaignId: ID): Campaign
    removeCampaign(campaignId: ID!, userId: ID): Campaign
    addStory(
      title: String
      main: Boolean
      side: Boolean
      player: Boolean
      campaign: String
      storyBoard: [String]
      objectives: [String]
      bigBad: String
      timeline: String
      campaignId: ID
    ): Story
    modifyStory(
      title: String
      timeline: String
      bigBad: String
      main: Boolean
      side: Boolean
      player: Boolean
      storyBoard: [String]
      objectives: [String]
      storyId: ID
    ): Story
    removeStory(storyId: ID!): Story
    addReaction(reactionBody: String!, commentId: ID!): UserPost
    modifyReaction(reactionBody: String!): Reaction
    removeReaction(reactionId: ID!): Reaction
    addProfile(about: String): Profile
    modifyProfile(about: String!, profilePicture: String!): Profile
    removeProfile(profileId: ID!): Profile
    addComment(commentBody: String!, userPostId: ID!): UserPost
    modifyComment(commentBody: String!): Comment
    removeComment(commentId: ID!): Comment
    addCharacter(
      characterName: String!
      npc: Boolean!
      campaignId: ID!
    ): Character
    modifyCharacter(
      characterName: String!
      characterStatus: String
      motivations: [String]
      characterNotes: [String]
      characterSheet: String
      characterId: ID
    ): Character
    deleteCharacter(characterId: ID!, userId: ID): Character
    addAdventure(title: String!, campaignId: ID!): Adventure
    modifyAdventure(
      title: String!
      setup: String
      resolution: String
      notes: [String]
      objectives: [String]
      encounters: [String]
      adventureId: ID
    ): Adventure
    removeAdventure(adventureId: ID!): Adventure
    addComment(commentBody: String!):UserPost
  }
`;

module.exports = typeDefs;

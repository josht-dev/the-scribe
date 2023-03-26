const {gql} = require('apollo-server-express');

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
    // fix id association later
    _id: ID
    postId(userPostId: ID!): UserPost
    commentBody: String
    username(userId: ID!): User
    createdAt: Date
    reactions: [reactionSchema]!
  }

  type Reaction {
    // fix id association later
    _id: ID
    //reactionId: ID
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
    story(storyId: ID!): Story
  }

  type Story {
    // fix id association later
    _id: ID
    // storyId: ID
    storyOutline: String
    npc: String
    pc: String
  }

  type Character {
    // Need help with association
    characterName: String
    characterStatus: String
    motivations: String
    characterNotes: String
    characterSheet: String
    npc: Boolean
    campaignId: ID
  }
  //come back to forum as it may not need to be stored

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
 }


`;

module.exports = typeDefs;
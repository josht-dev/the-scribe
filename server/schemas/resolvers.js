const {
  User,
  UserPost,
  Story,
  Reaction,
  Profile,
  Adventure,
  Comment,
  Character,
  Campaign,
} = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().sort({ createdAt: -1 });
    },
    user: async (parent, {userId}) => {
      return User.findOne({_id: userId});
    },
    userPosts: async () => {
      return UserPost.find().sort({createdAt: 1});
    },
    userPost: async (parent, {userPostId})=> {
      return UserPost.findOne({_id: userPostId});
    },
    campaigns: async () => {
      return Campaign.find().sort({createdAt: 1});
    },
    campaign: async (parent, {campaignId}) => {
      return Campaign.findOne({_id: campaignId});
    },
    stories: async () => {
      return Story.find().sort({createdAt: 1});
    },
    story: async (parent, {storyId}) => {
      return Story.findOne({_id: storyId})
    },
    reactions: async () => {
      return Reaction.find().sort({createdAt: 1});
    },
    reaction: async (parent, {reactionId}) => {
      return Reaction.findOne({_id: reactionId})
    },
    profiles: async () => {
      return Profile.find().sort({createdAt: 1});
    },
    profile: async (parent, {profileId}) => {
      return Profile.findOne({_id: profileId})
    },
    comments: async () => {
      return Comment.find().sort({createdAt: 1})
    },
    comment: async (parent, {commentId}) => {
      return Comment.findOne({ _id: commentId });
    },
    characters: async () => {
      return Character.find().sort({createdAt: 1})
    },
    character: async (parent, {characterId}) => {
      return Character.findOne({ _id: characterId });
    },
    adventures: async () => {
      return Adventure.find().sort({createdAt: 1})
    },
    adventure: async (parent, {adventureId}) => {
      return Adventure.findOne({ _id: adventureId });
    }  
  }
}

module.exports = resolvers;
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
      return User.find({}, "-password").sort({ createdAt: -1 });
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }, "-password")
      .populate("UserPost");
    },
    userPosts: async () => {
      return UserPost.find().sort({ createdAt: 1 })
      .populate("User")
      .populate("Comment");
    },
    userPost: async (parent, { userPostId }) => {
      return UserPost.findOne({ _id: userPostId })
        .populate("User")
        .populate("Comment");
    },
    campaigns: async () => {
      return Campaign.find().sort({ createdAt: 1 });
    },
    campaign: async (parent, { campaignId }) => {
      return Campaign.findOne({ _id: campaignId })
      .populate("Story")
      .populate("Adventure")
      .populate("Character");
    },
    stories: async () => {
      return Story.find().sort({ createdAt: 1 })
      .populate("Campaign");
    },
    story: async (parent, { storyId }) => {
      return Story.findOne({ _id: storyId })
      .populate("Campaign")
      .populate("Character");
    },
    reactions: async () => {
      return Reaction.find().sort({ createdAt: 1 })
      .populate("User")
      .populate("Comment");
    },
    reaction: async (parent, { reactionId }) => {
      return Reaction.findOne({ _id: reactionId })
        .populate("User")
        .populate("Comment");
    },
    profiles: async () => {
      return Profile.find().sort({ createdAt: 1 })
      .populate("User");
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId })
      .populate("User")
      .populate("Campaign");
    },
    comments: async () => {
      return Comment.find()
        .sort({ createdAt: 1 })
        .populate("User")
        .populate("UserPost");
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId })
        .populate("User")
        .populate("UserPost");
    },
    characters: async () => {
      return Character.find().sort({ createdAt: 1 })
      .populate("Campaign");
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId })
      .populate("Campaign");
    },
    adventures: async () => {
      return Adventure.find().sort({ createdAt: 1 })
      .populate("Character");
    },
    adventure: async (parent, { adventureId }) => {
      return Adventure.findOne({ _id: adventureId })
      .populate("Character");
    },
  },

  Mutation: {
    addUser: async (parent, {username, email, password}) => {
       const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  },
};

module.exports = resolvers;

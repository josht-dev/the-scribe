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
      return User.findOne({ _id: userId }, "-password").populate("UserPost");
    },
    userPosts: async () => {
      return UserPost.find()
        .sort({ createdAt: 1 })
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
      return Story.find().sort({ createdAt: 1 }).populate("Campaign");
    },
    story: async (parent, { storyId }) => {
      return Story.findOne({ _id: storyId })
        .populate("Campaign")
        .populate("Character");
    },
    reactions: async () => {
      return Reaction.find()
        .sort({ createdAt: 1 })
        .populate("User")
        .populate("Comment");
    },
    reaction: async (parent, { reactionId }) => {
      return Reaction.findOne({ _id: reactionId })
        .populate("User")
        .populate("Comment");
    },
    profiles: async () => {
      return Profile.find().sort({ createdAt: 1 }).populate("User");
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
      return Character.find().sort({ createdAt: 1 }).populate("Campaign");
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId }).populate("Campaign");
    },
    adventures: async () => {
      return Adventure.find()
        .sort({ createdAt: 1 })
        .populate("Character")
        .populate("Campaign");
    },
    adventure: async (parent, { adventureId }) => {
      return Adventure.findOne({ _id: adventureId })
        .populate("Character")
        .populate("Campaign");
    },
    individual: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("UserPost");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUserPost: async (parent, { title, body }, context) => {
      if (context.user) {
        const userPost = await UserPost.create({
          title,
          body,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { userPosts: userPost._id } }
        );

        return userPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { commentBody }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      if (context.userPost) {
        const comment = await Comment.create({
          commentBody,
          userPostId: context.userPost.postId,
        });

        await UserPost.findOneAndUpdate(
          { _id: context.userPost._id },
          { $addToSet: { comments: comment._id } }
        );
        return Comment;
      }
      throw new Error("No Post Found!!");
    },
    addReaction: async (parent, { commentId, reactionBody }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return Comment.findOneAndUpdate(
        { _id: commentId },
        { $addToSet: { reactions: reactionBody } },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    addProfile: async (parent, { about }, context) => {
      if (context.user) {
        const profile = await Profile.create({
          username: context.user.username,
          about,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { profiles: profile._id } }
        );
        return Profile;
      }
      throw new AuthenticationError(
        "You must be logged in to view your profile!"
      );
    },
    addCampaign: async (parent, { gameName, ruleSet, genre }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      if (context.profile) {
        const campaign = await Campaign.create({
          profile: context.profile.campaigns,
          gameName,
          ruleSet,
          genre,
        });
        await Profile.findOneAndUpdate(
          { _id: context.profile._id },
          { $addToSet: { campaigns: campaign._id } }
        );
        return Campaign;
      }
      throw new Error("No campaign found by that name!!");
    },
    addStory: async (parent, { main, side, player, title }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      if (context.campaign) {
        const story = await Story.create({
          campaign: context.campaign.campaignId,
          main,
          side,
          player,
          title,
        });
        await Campaign.findOneAndUpdate(
          { _id: context.campaign._id },
          { $addToSet: { stories: story._id } }
        );
        return Story;
      }
      throw new Error("No story found by that name!!");
    },
    addAdventure: async (parent, { title }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      if (context.campaign) {
        const adventure = await Adventure.create({
          campaign: context.campaign.campaignId,
          title,
        });
        await Campaign.findOneAndUpdate(
          { _id: context.campaign._id },
          { $addToSet: { adventures: adventure._id } }
        );
        return Adventure;
      }
      throw new Error("No Adventures found by that name!!");
    },
    addCharacter: async (parent, {characterName}, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return Character.create({characterName})
    },
    removeUser: async (parent, args, context) => {
      if (context.user){
        // return User.findOneAndDelete({
        //   username:context.user.username
        // })
        const user = await User.findOneAndDelete(
          {
            username:context.user.username
          }
        )
        if (user){
          const profile = await Profile.findOneAndDelete({
            username: context.user.username,
          });
          if (profile) {
            const campaign = await Campaign.findOneAndDelete(
              {
                campaigns: context.profile.campaigns
              }
            )
            if (campaign) {
              const story = await Story.findOneAndDelete(
                {
                  campaignId: context.campaign.storyId
                }
              )
            }
            if(campaign){
              const character = await Character.findOneAndDelete(
                {
                  campaignId: context.campaign.characters
                }
              )
            }
            if (campaign){
              const adventure = await Adventure.findOneAndDelete(
                {
                  campaignId: context.campaign.adventures                
                }
              )
            }
          }
        } 
        return User.findOneAndDelete({
          username: context.user.username,
        });
      }
    },
    removeUserPost: async (parent, {userPostId}, context) => {
        if (context.user) {
          const userPost = await UserPost.findOneAndDelete({
            _id: userPostId,
            username: context.user.username,
          });

          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { userPost: userPost._id } }
          );

          return UserPost;
        }
        throw new AuthenticationError("You need to be logged in!");
    }
  },
};

module.exports = resolvers;

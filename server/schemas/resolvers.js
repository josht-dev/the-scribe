const {
  User,
  UserPost,
  Story,
  Profile,
  Adventure,
  Character,
  Campaign,
} = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({}, "-password").sort({ createdAt: -1 });
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }, "-password");
    },
    userPosts: async () => {
      return UserPost.find()
        .sort({ createdAt: 1 })
        .populate({ path: "username" })
    },
    userPost: async (parent, { userPostId }) => {
      return UserPost.findOne({ _id: userPostId })
        .populate({ path: "username" })
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
    // reactions: async () => {
    //   return Reaction.find()
    //     .sort({ createdAt: 1 })
    //     .populate({ path: "username" })
    //     .populate("Comment");
    // },
    // reaction: async (parent, { reactionId }) => {
    //   return Reaction.findOne({ _id: reactionId })
    //     .populate("User")
    //     .populate("Comment");
    // },
    profiles: async () => {
      return Profile.find().sort({ createdAt: 1 });
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate({
        path: "campaigns",
      });
    },
    // comments: async () => {
    //   return Comment.find()
    //     .sort({ createdAt: 1 })
    //     .populate({ path: "commentWriter" })
    // },
    // comment: async (parent, { commentId }) => {
    //   return Comment.findOne({ _id: commentId })
    //     .populate({ path: "commentWriter" })
    // },
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
    addUserPost: async (parent, { title, body, subject }, context) => {
      if (context.user) {
        const userPost = await UserPost.create({
          title,
          body,
          subject,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { userPosts: userPost._id } }
        );

        return userPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // for future dev
    // addComment: async (parent, { commentBody }, context) => {
    //   if (!context.user) {
    //     throw new AuthenticationError("You need to be logged in!");
    //   }
    //   if (context.body.variables.userPostId) {
    //     const comment = await Comment.create(
    //       {
    //         commentBody,
    //         postId: context.userPostId,
    //       },
    //     );

    //      console.info(comment);
    //     await UserPost.findOneAndUpdate(
    //       { _id: context.body.variables.userPostId },
    //       { $addToSet: { comments: comment._id} }
    //     );
    //     console.info(comment._id);
    //     return Comment;

    //   }
    //   throw new Error("No Post Found!!");
    // },
    addComment: async (parent, { userPostId, commentBody}, context) => {
      if (context.user) {
        return UserPost.findOneAndUpdate(
          { _id: userPostId},

          {
            $addToSet: {
              comments:  {commentBody, commentWriter: context.user.username},
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // for future dev
    // addReaction: async (parent, { commentId, reactionBody }, context) => {
      // if (!context.user) {
      //   throw new AuthenticationError("You need to be logged in!");
      // }
      // return Comment.findOneAndUpdate(
      //   { _id: commentId },
      //   { $addToSet: { reactions: reactionBody } },
      //   {
      //     new: true,
      //     runValidators: true,
      //   }
      // );
    //    if (context.user) {
    //      return UserPost.findOneAndUpdate(
    //        { _id: commentId},

    //        {
    //          $addToSet: {
    //            comments: {commentWriter: context.user.username, reactions: { reactionBody, reactionWriter: context.user.username }},
    //          },
    //        },
    //        {
    //          new: true,
    //        }
    //      );
    //    }
    //    throw new AuthenticationError("You need to be logged in!");
    // },
    addProfile: async (parent, { about }, context) => {
      if (context.user) {
        const profile = await Profile.create({
          profileUser: context.user.username,
          about,
      });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { profiles: profile._id } }
        );
        return profile;
      }
      throw new AuthenticationError(
        "You must be logged in to view your profile!"
      );
    },
    addCampaign: async (parent, { gameName, ruleSet, genre }, context) => {
         if (context.user) {
        const campaign = await Campaign.create({
          profileUser: context.user.username,
          gameName,
          ruleSet,
          genre,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { campaigns: campaign._id } }
        );
        return campaign;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addStory: async (parent, { main, side, player, title, campaign, campaignId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      console.info(title);
      console.info(campaignId);

        const story = await Story.create({
          campaign,
          main,
          side,
          player,
          main,
          title,
        });

        if (story) {
          await Campaign.findOneAndUpdate(
            { _id: campaignId },
            { $addToSet: { storyOutline: story._id } }
          );
          
          return story;
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
    addCharacter: async (parent, { characterName, npc }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      return Character.create({ characterName, npc });
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete({
          username: context.user.username,
        });
        if (user) {
          const profile = await Profile.findOneAndDelete({
            username: context.user.username,
          });
          if (profile) {
            const campaign = await Campaign.findOneAndDelete({
              campaigns: context.profile.campaigns,
            });
            if (campaign) {
              const story = await Story.findOneAndDelete({
                campaignId: context.campaign.storyId,
              });
            }
            if (campaign) {
              const character = await Character.findOneAndDelete({
                campaignId: context.campaign.characters,
              });
            }
            if (campaign) {
              const adventure = await Adventure.findOneAndDelete({
                campaignId: context.campaign.adventures,
              });
            }
          }
        }
        return User.findOneAndDelete({
          username: context.user.username,
        });
      }
    },
    removeUserPost: async (parent, { userPostId }, context) => {
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
    },
  },
};

module.exports = resolvers;

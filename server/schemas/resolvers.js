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
const mongoose = require("mongoose");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({}).sort({ createdAt: -1 });
    },
    user: async (parent, { username }) => {
      console.info(username);
      return await User.findOne({ username }, "-password")
        .populate({ path: "userPosts" })
        .populate({ path: "profile" })
        .populate({ path: "campaigns" });
    },
    userPosts: async () => {
      return UserPost.find()
        .sort({ createdAt: 1 })
        .populate({ path: "username" });
    },
    userPost: async (parent, { userPostId }) => {
      return UserPost.findOne({ _id: userPostId }).populate({
        path: "username",
      });
    },
    campaigns: async () => {
      return Campaign.find()
        .sort({ createdAt: 1 })
        .populate({ path: "storyOutline" })
        .populate({ path: "characters" });
    },
    campaign: async (parent, { campaignId }) => {
      return Campaign.findOne({ _id: campaignId })
        .populate({ path: "storyOutline" })
        .populate({ path: "adventures" })
        .populate({ path: "characters" });
    },
    stories: async () => {
      return Story.find()
        .sort({ createdAt: 1 })
        .populate({ path: "characters" });
    },
    story: async (parent, { storyId }) => {
      return Story.findOne({ _id: storyId }).populate({ path: "characters" });
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
      return Character.find()
        .sort({ createdAt: 1 })
        .populate({ path: "campaigns" });
    },
    character: async (parent, { characterId }) => {
      return Character.findOne({ _id: characterId }).populate({
        path: "campaigns",
      });
    },
    adventures: async () => {
      return Adventure.find()
        .sort({ createdAt: 1 })
        .populate({ path: "characters" });
    },
    adventure: async (parent, { adventureId }) => {
      return Adventure.findOne({ _id: adventureId }).populate({
        path: "characters",
      });
    },
    individual: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }, "-password")
          .populate({ path: "userPosts" })
          .populate({ path: "profile" })
          .populate({ path: "campaigns" });
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
    addComment: async (parent, { userPostId, commentBody }, context) => {
      if (context.user) {
        return UserPost.findOneAndUpdate(
          { _id: userPostId },

          {
            $addToSet: {
              comments: { commentBody, commentWriter: context.user.username },
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
          { $addToSet: { profiles: profile._id } },
          console.info(context.user)
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
    addStory: async (
      parent,
      { main, side, player, title, campaign, campaignId },
      context
    ) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
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
    addAdventure: async (parent, { title, campaign, campaignId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const adventure = await Adventure.create({
        campaign,
        title,
      });
      if (adventure) {
        await Campaign.findOneAndUpdate(
          { _id: campaignId },
          { $addToSet: { adventures: adventure._id } }
        );
        return adventure;
      }
      throw new Error("No story found by that name!!");
    },
    addCharacter: async (
      parent,
      { characterName, npc, campaignId },
      context
    ) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const character = await Character.create({ characterName, npc });
      if (character) {
        await Campaign.findOneAndUpdate(
          { _id: campaignId },
          { $addToSet: { characters: character._id } }
        );
      }
      return character;
    },
    // start removes
    removeUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete({
          username: context.user.username,
        });
        if (user) {
          const profile = await Profile.findOneAndDelete({
            username: context.user.profile,
          });
          if (profile) {
            const campaign = await Campaign.findOneAndDelete({
              campaigns: context.user.campaigns,
            });
            if (campaign) {
              const story = await Story.findOneAndDelete({
                campaignId: campaign.storyOutline,
              });
            }
            if (campaign) {
              const character = await Character.findOneAndDelete({
                campaignId: campaign.characters,
              });
            }
            if (campaign) {
              const adventure = await Adventure.findOneAndDelete({
                campaignId: campaign.adventures,
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
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { userPost: userPost._id } }
        );

        return userPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateUserPost: async (parent, { userPostId, title, subject, body }) => {
      return await UserPost.findOneAndUpdate(
        { _id: userPostId },
        { $set: { title: title, subject: subject, body: body } },
        { new: true }
      );
    },
    modifyCampaign: async (
      parent,
      { gameName, ruleSet, genre, notes, currentDateInGame, campaignId }
    ) => {
      const campaign = await Campaign.findOneAndUpdate(
        { _id: campaignId },
        {
          $set: {
            gameName: gameName,
            ruleSet: ruleSet,
            genre: genre,
            currentDateInGame: currentDateInGame,
          },
        },
        { $addToSet: { notes: notes } },
        { new: true }
      );
      return campaign;
    },
    removeCharacter: async (parent, { characters, campaignId }) => {
      const removeCharacter = await Campaign.findOneAndUpdate(
        { _id: campaignId },
        { $pull: { characters: { $in: [characters] } } },
        { new: true }
      );
      return removeCharacter;
    },
    modifyCharacter: async (
      parent,
      {
        characterName,
        characterStatus,
        motivations,
        characterNotes,
        characterSheet,
        characterId,
      }
    ) => {
      const character = await Character.findOneAndUpdate(
        { _id: characterId },
        {
          $set: {
            characterName: characterName,
            characterStatus: characterStatus,
            characterSheet: characterSheet,
            motivations: motivations,
            characterNotes: characterNotes,
          },
        },
        { new: true }
      );
      return character;
    },
    modifyUser: async (
      parent,
      { username, email, password, newPassword, userId },
      context
    ) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: userId },
          { $set: { username: username, email: email } },
          { new: true, runValidators: true }
        );
       if (!newPassword) {
         return user;
       }
        const correctPw = await user.isCorrectPassword(password);
        if (password === newPassword) {
          return Error("new password must not be the same as the old one");
        } else if (correctPw) {
          const hashedPassword = await user.hashPassword(newPassword)
          const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $set: { password: hashedPassword } },
            { new: true, runValidators: true },
          );
              signToken(updatedUser);
              console.info(updatedUser)
          return updatedUser ;
        } else {
          throw new AuthenticationError("Incorrect credentials");
        }
        
      }
    },
  },
};

module.exports = resolvers;

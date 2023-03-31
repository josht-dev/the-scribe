const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dayjs = require("dayjs");

const commentSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "UserPost",
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

commentSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Comment = model('Comment', commentSchema); 

module.exports = Comment;

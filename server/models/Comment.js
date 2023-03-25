const { Schema, Types } = require("mongoose");
const reactionSchema = require("./Reaction");
const dayjs = require("dayjs");

const commentSchema = new Schema(
  {
    //come back to later
    // commentId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId(),
    // },
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
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        return dayjs(date).format("MMM DD YYYY H:m");
      },
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

userPostSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Comment = model("Comment", commentSchema); 

module.exports = Comment;

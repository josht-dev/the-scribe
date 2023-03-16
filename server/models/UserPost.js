const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");
const reactionSchema = require("./Reaction");
const Comment = require("./Comment");

const userPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 50,
    },
    subject: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 50,
    },
    body: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 3000,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        return dayjs(date).format("MMM DD YYYY H:m");
      },
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comments: [Comment],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Forum",
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userPostSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

userPostSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const UserPost = model("UserPost", userPostSchema); 

module.exports = UserPost;
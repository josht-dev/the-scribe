const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");


const userPostSchema = new Schema({
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
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      commentBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      commentWriter: {
        type: String,
        required: true,
      },
     },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    },
  ],
  category: {
    type: String,
  },
});

userPostSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

userPostSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});


const UserPost = model("UserPost", userPostSchema); 

module.exports = UserPost;
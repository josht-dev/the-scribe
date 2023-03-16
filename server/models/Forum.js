const { Schema, model } = require("mongoose");

const forumSchema = new Schema({
  user_posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserPost",
    },
  ],
});
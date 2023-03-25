// May be for future use of some sort of data storage but for now will not be using
const { Schema, model } = require("mongoose");

const forumSchema = new Schema({
  user_posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserPost",
    },
  ],
});
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
        "Not a Valid Email Address",
      ],
    },
    password: {
      type: String,
      required: true,
      match: [
        /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
        "Not a Valid Password",
      ],
    },
    user_posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "UserPost",
      },
    ],
    profile: [
      {
        type: Schema.Types.ObjectId,
        ref: "Profile",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtal("userPostCount").get(function () {
  return this.user_posts.length;
});

const User = model("User", userSchema);

module.exports = User;

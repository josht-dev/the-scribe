const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
        /^(?=.{8,35})(?=.*[a-z])(?=.*[A-Z])(?=.*[¬!"£$%^&*()_+=\-`{}:@~#';<>?/.,|\\]).*$/,
        "Not a Valid Password",
      ],
    },
    userPosts: [
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
    campaigns: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campaign",
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

userSchema.virtual("userPostCount").get(function () {
  return this.user_posts.length;
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

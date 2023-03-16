const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

const profileSchema = new Schema(
  {
    about: {
      type: String,
      minLength: 10,
      maxLength: 150,
    },
    campaigns: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campaign",
      },
    ],
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profilePicture: {},
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;
const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

const profileSchema = new Schema(
  {
    about: {
      type: String,
      minLength: 10,
      maxLength: 150,
      required: true,
    },
    // campaigns: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Campaign",
    //   },
    // ],
    profileUser: {
      type: String,
      required: true,
      trim: true,
    },
    profilePicture: {
      type: String,
    },
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
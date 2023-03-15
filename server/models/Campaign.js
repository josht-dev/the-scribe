const { Schema, model } = require("mongoose");
const storySchema = require("./Story");
const dayjs = require("dayjs");

const campaignSchema = new Schema(
  {
    gameName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    ruleset: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (date) {
        return dayjs(date).format("MMM DD YYYY H:m");
      },
    },
    genre: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      minLength: 1,
      maxLength: 10000,
    },
    story: [storySchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;

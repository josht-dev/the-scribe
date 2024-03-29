const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");

const campaignSchema = new Schema(
  {
    gameName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    ruleSet: {
      type: String,
    },
    genre: {
      type: String,
    },
    notes: [
      {
        type: String,
        minLength: 1,
        maxLength: 10000,
      },
    ],
    storyOutline: [
      {
        type: Schema.Types.ObjectId,
        ref: "Story",
      },
    ],
    adventures: [
      {
        type: Schema.Types.ObjectId,
        ref: "Adventure",
      },
    ],
    currentDateInGame: {
      type: String,
    },
    characters: [
      {
        type: Schema.Types.ObjectId,
        ref: "Character",
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

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;

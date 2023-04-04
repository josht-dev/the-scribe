const { Schema, model } = require("mongoose");

const adventureSchema = new Schema(
  {
    
    campaign: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    setup: {
      type: String,
    },
    resolution: {
      type: String,
    },
    notes: [
      {
        type: String,
      },
    ],
    objectives: [
      {
        type: String,
      },
    ],
    //for future use
    // characters: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Character",
    //   },
    // ],
    encounters: [
      {
        type: String,
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

const Adventure = model("Adventure", adventureSchema);

module.exports = Adventure;
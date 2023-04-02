const { Schema, model } = require("mongoose");

const characterSchema = new Schema(
  {
    characterName: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 25,
    },
    characterStatus: {
      type: String,
      allowNull: true,
      maxLength: 50,
    },
    motivations: [
      {
        type: String,
      },
    ],
    characterNotes: [{
      type: String,
    }],
    characterSheet: {
      type: String,
      allowNull: true,
    },
    npc: {
      type: Boolean,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Character = model("Character", characterSchema);

module.exports = Character;

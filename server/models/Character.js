const { Schema, model } = require("mongoose");

const characterSchema = new Schema({
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
      allowNull: true,
    },
  ],
  //! TODO: Might be an array, for subdocs
  characterNotes: {
    type: String,
    allowNull: true,
  },
  characterSheet: {
    type: String,
    allowNull: true,
  },
  npc: {
    type: Boolean,
    required: true,
  },
});

const Character = model("Campaign", characterSchema);

module.exports = Character;

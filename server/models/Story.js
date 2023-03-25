const { Schema, model } = require("mongoose");

const storySchema = new Schema({
  storyId: {
    type: Schema.Types.ObjectId,
    default: function () {
      return new Types.ObjectId();
    },
  },
  storyOutline: {
    type: String,
  },
  npc: {
    type: String,
  },
  pc: {
    type: String,
  },
});

const Story = model("Story", storySchema);

module.exports = Story;

const { Schema, model } = require("mongoose");

const storySchema = new Schema({
  campaignId: {
        type: Schema.Types.ObjectId,
        ref: "Campaign",
  },
  characters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  ],
  title: {
    type: String
  },
  timeline: {
    type: String
  },
  bigBad: {
    type: String
  },
  main: {
    type: Boolean
  },
  side: {
    type: Boolean
  },
  player: {
    type: Boolean
  },
  storyBoard:[{
    type: String
  }]
},  
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  });

  storySchema.virtual("switchBooleans")
  .get(function () {
    return [this.side, this.main, this.player];
  })
  .set(function(boolean){
    if (boolean.side === true){
      boolean.main === false
      boolean.player === false
    } else if (boolean.main === true){
      boolean.side === false
      boolean.player === false
    } else if (boolean.player === true){
      boolean.side === false
      boolean.main === false
    } else {
      return
    }
  });

const Story = model("Story", storySchema);

module.exports = Story;

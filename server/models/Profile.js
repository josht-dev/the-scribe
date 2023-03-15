const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
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
  

});

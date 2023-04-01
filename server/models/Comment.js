//for future dev
// const { Schema, model } = require("mongoose");
// const reactionSchema = require("./Reaction");

// const commentSchema = new Schema(
//   {
//     // postId: {
//     //   type: Schema.Types.ObjectId,
//     //   ref: "UserPost",
//     // },
//     commentBody: {
//       type: String,
//       required: true,
//       maxlength: 280,
//     },
//     commentWriter: {
//       type: String,
//       required: true,
//     },
//     reactions: [reactionSchema],
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
//   }
// );

// commentSchema.virtual("reactionCount").get(function () {
//   return this.reactions.length;
// });

// const Comment = model('Comment', commentSchema); 

// module.exports = Comment;

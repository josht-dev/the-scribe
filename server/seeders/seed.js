const db = require("../config/connection");
const {
  User,
  UserPost,
  Campaign,
  Story,
  Adventure,
  Character,
} = require("../models");
const userSeeds = require("./userSeeds.json");
const userPostSeeds = require("./userPostSeeds.json");
const commentSeeds = require("./commentSeeds.json");
const campaignSeeds = require("./campaignSeeds.json");
const storySeed = require("./storySeed");
const adventureSeeds = require("./adventureSeeds.json");
const characterSeeds = require("./characterSeeds");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await UserPost.deleteMany({});
    await Campaign.deleteMany({});
    await Story.deleteMany({});
    await Adventure.deleteMany({});
    await Character.deleteMany({});

    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("all done!");
  process.exit(0);
});

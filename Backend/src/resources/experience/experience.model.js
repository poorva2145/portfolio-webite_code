const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    index: Number,
    logo: String,
    name: String,
    role: String,
    location: String,
    starting_date: String,
    ending_date: String,
    description: [{ description_item: String }]
  },
  { timestamps: true }
);

const Experience = mongoose.model("experience", experienceSchema);
module.exports = Experience;

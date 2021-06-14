const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    index: Number,
    name: String,
    logo: String
  },
  { timestamps: true }
);

const Skills = mongoose.model("skill", skillSchema);
module.exports = Skills;

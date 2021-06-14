const mongoose = require("mongoose");

const awardSchema = new mongoose.Schema(
  {
    index: Number,
    name: String,
    description: String
  },
  { timestamps: true }
);

const Awards = mongoose.model("award", awardSchema);
module.exports = Awards;

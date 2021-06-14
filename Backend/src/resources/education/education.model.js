const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    index: Number,
    degree: String,
    organization: String,
    starting_date: String,
    ending_date: String,
    cgpa: String,
    branch: String,
    location: String
  },
  { timestamps: true }
);

const Education = mongoose.model("education", educationSchema);
module.exports = Education;

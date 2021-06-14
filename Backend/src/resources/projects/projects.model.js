const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    index: Number,
    name: String,
    project_link: String,
    github_link: String,
    features_array: [{ features_item: String }],
  },
  { timestamps: true }
);

const Projects = mongoose.model("project", projectSchema);
module.exports = Projects;

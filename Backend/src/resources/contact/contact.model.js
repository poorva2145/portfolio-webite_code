const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    gmail: String,
    linkedin: String,
    github: String,
  },
  { timestamps: true }
);

const Contacts = mongoose.model("contact", contactSchema);
module.exports = Contacts;

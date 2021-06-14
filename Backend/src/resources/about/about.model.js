const mongoose = require('mongoose')

const aboutSchema = new mongoose.Schema(
  {
    index: Number,
    description: String
  },
  { timestamps: true }
)


const About_section = mongoose.model('about_section', aboutSchema)
module.exports = About_section
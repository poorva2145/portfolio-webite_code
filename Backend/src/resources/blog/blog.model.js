const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
  {
    index: Number,
    name: String,
    description: String,
    link: String
  },
  { timestamps: true }
)


const Blogs = mongoose.model('blog', blogSchema)
module.exports = Blogs
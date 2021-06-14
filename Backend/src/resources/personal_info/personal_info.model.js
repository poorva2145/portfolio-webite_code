const mongoose = require('mongoose')

const personalInfoSchema = new mongoose.Schema(
  {
    index: Number,
    github_link: String,
    linkedin_link: String,
    leetcode_link: String,
    codeforces_link: String,
    codechef_link: String,
    email_id: String,
    mobile_num: String
  },
  { timestamps: true }
)


const Personal_info_section = mongoose.model('personal_info_section', personalInfoSchema)
module.exports = Personal_info_section
const mongoose = require('mongoose')


const blogSchema = mongoose.Schema({
    heading: String,
    content: String,
    username: String,
    postedDate: { type: Date, default: new Date() }
})



module.exports = mongoose.model('blogs', blogSchema)
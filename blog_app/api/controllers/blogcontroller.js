const blog = require('../models/blog')


exports.addblog = (req, res) => {
    try {
        const username = req.params.username
        const { heading, content } = req.body
        const record = new blog({ heading: heading, content: content, username: username })
        record.save()
        res.status(201).json({
            status: 201,
            message: "Successfully Data Inserted"
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}
exports.allblogs = async (req, res) => {
    try {
        const record = await blog.find().sort({ postedDate: -1 })
        res.status(200).json({
            status: 200,
            apiData: record
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.myblogs = async (req, res) => {
    const username = req.params.username
    try {
        const record = await blog.find({ username: username }).sort({ postedDate: -1 })
        //console.log(record)
        res.status(200).json({
            status: 200,
            apiData: record
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

exports.deleteblog = async (req, res) => {
    const id = req.params.id
    await blog.findByIdAndDelete(id)
    try {
        res.status(200).json({
            status: 200,
            message: "Your blog is deleted"
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}
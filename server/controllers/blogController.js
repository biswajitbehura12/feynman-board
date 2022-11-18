const Blog = require('../models/Blog');
const colors = require('colors');


// @desc    Get all blogs by user id
// @route   '/api/blogs
// @access  Private
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ user: req.user.id });
        res.json(blogs);
    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }
}

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findOne({ _id: req.params.id, user: req.user.id });

        if(!blog) return res.status(404).json([
            {
                message: 'Blog not found',
                type: 'error'
            }
        ])
        res.json(blog);
    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }
}

const createBlog = async (req, res) => {
    try {
        const { topic, content } = req.body;
        const newBlog = new Blog({
            topic,
            content,
            user: req.user.id
        });
        
        await newBlog.save();

        if(!newBlog) return res.status(400).json([{ message: 'Blog not created', type: 'error' }]);

        res.json(newBlog);
    } catch (err) {
        console.error(`ERROR: ${err.message}`.bgRed.underline.bold);
        res.status(500).send('Server Error');
    }
}


module.exports = {
    
    createBlog,
    getBlogs,
    getBlogById
}
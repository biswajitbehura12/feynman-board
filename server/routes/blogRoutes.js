const express = require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware');

const {
    getBlogs,
    createBlog,
    getBlogById
} = require('../controllers/blogController')

router.get('/', [auth], getBlogs)

router.post('/', [auth], createBlog)

router.get('/:id', [auth], getBlogById)

module.exports = router;
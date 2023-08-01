const postServices = require('../../services/post-services')

const postController = {
  getPost: (req, res, next) => {
    postServices.getPost(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  getPosts: (req, res, next) => {
    postServices.getPosts(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  getAllPosts: (req, res, next) => {
    postServices.getAllPosts(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
}

module.exports = postController
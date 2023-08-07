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
  getUserAllPosts: (req, res, next) => {
    postServices.getUserAllPosts(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  postPost: (req, res, next) => {
    postServices.postPost(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  postTempPost: (req, res, next) => {
    postServices.postTempPost(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  getTempPost: (req, res, next) => {
    postServices.getTempPost(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  addCollect: (req, res, next) => {
    postServices.addCollect(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  deleteCollect: (req, res, next) => {
    postServices.deleteCollect(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  addLike: (req, res, next) => {
    postServices.addLike(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  deleteLike: (req, res, next) => {
    postServices.deleteLike(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  editPost: (req, res, next) => {
    postServices.editPost(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  deletePost: (req, res, next) => {
    postServices.deletePost(req, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = postController

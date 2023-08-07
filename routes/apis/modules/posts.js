const express = require('express')
const router = express.Router()

const postController = require('../../../controllers/apis/post-controller')

const { authenticated, optionalAuthenticated } = require('../../../middleware/auth')

router.get('/all', optionalAuthenticated, postController.getAllPosts)
router.get('/:postId', optionalAuthenticated, postController.getPost)
router.get('/', optionalAuthenticated, postController.getPosts)

const upload = require('../../../middleware/multer')

router.get('/users/all', postController.getUserAllPosts)
router.delete('/collects/:postId', postController.deleteCollect)
router.delete('/likes/:postId', postController.deleteLike)
router.get('/:postId/cache', postController.getTempPost)
router.get('/all', postController.getAllPosts)
router.post('/collects', postController.addCollect)
router.get('/:postId', postController.getPost)
router.post('/likes', postController.addLike)
router.put('/:postId', upload.single('image'), postController.editPost)
router.delete('/:postId', postController.deletePost)
router.post('/cache', upload.single('image'), postController.postTempPost)
router.post('/', upload.single('image'), postController.postPost)

router.use('/', (req, res) => res.send('this is post page.'))

module.exports = router

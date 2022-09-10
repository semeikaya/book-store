const { Router } = require('express')
const router = Router()
const { authorController } = require('../controllers/author.controller.js')

router.post('/author', authorController.addAuthor)
router.get('/author', authorController.getAuthors)
router.delete('/author/:id', authorController.deleteAuthorById)

module.exports = router
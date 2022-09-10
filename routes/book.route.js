const { Router } = require('express')
const { bookController } = require('../controllers/book.controller.js')

const router = Router()

router.post('/books', bookController.addBook)
router.delete('/books/:id', bookController.deleteBookById)
router.patch('/books/:id', bookController.updateBookById)
router.get('/books/:id', bookController.getBookById)
router.get('/books/', bookController.getBooks)
router.get('/books/genre/:id', bookController.getBookByGenreId)


module.exports = router
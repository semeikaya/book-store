const Book = require('../models/Book.model.js')

module.exports.bookController = {
    addBook: async (req, res) => {
        const { name, bookAuthor, genres } = req.body
        try {
            await Book.create({
                name,
                bookAuthor,
                genres
            })
            res.json(' Книга добавлена')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteBookById: async (req, res) => {
        try {
            await Book.findByIdAndRemove(req.params.id)
            res.json('Книга удалена!')
        } catch (error) {
            res.json(error.message)
        }
    },
    updateBookById: async (req, res) => {
        const { name, bookAuthor, genres } = req.body
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, {
                name,
                bookAuthor,
                genres
            })
            res.json(book)
        } catch (error) {
            res.json(error.message)
        }
    },
    getBookById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate('bookAuthor genres')
            res.json(book)
        } catch (error) {
            res.json(error.message)
        }
    },
    getBooks: async (req, res) => {
        try {
            const books = await Book.find().populate('bookAuthor genres')
            res.json(books)
        } catch (error) {
            res.json(error.message)
        }
    },
    getBookByGenreId: async (req, res) => {
        try {
            const books = await Book.find({ genres: req.params.id }).populate('bookAuthor genres')
            res.json(books)
        } catch (error) {
            res.json(error.message)
        }
    },

}
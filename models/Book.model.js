const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    name: String,
    bookAuthor: {
        ref: 'Author',
        type: mongoose.Schema.Types.ObjectId
    },
    genres: {
        ref: 'Genre',
        type: mongoose.Schema.Types.ObjectId

    },
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
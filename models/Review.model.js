const mongoose = require('mongoose')
const reviewSchema = mongoose.Schema({
    text: String,
    reviewAuthor: String,
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
    }
})

const Review = mongoose.model('Review', reviewSchema)
module.exports = Review
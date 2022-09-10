const Review = require('../models/Review.model.js')

module.exports.reviewController = {
    addReview: async (req, res) => {
        const { text, reviewAuthor, book } = req.body
        try {
            await Review.create({
                text,
                reviewAuthor,
                book
            })
            res.json('Рецензия добавлена')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteReviewById: async (req, res) => {
        try {
            await Review.findByIdAndRemove(req.params.id)
            res.json('Рецензия удалена')
        } catch (error) {
            res.json(error.message)
        }
    },

    getReview: async (req, res) => {
        try {
            const genres = await Review.find({ book: req.params.id }).populate('book')
            res.json(genres)
        } catch (error) {
            res.json(error.message)
        }
    },
}
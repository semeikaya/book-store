const Author = require("../models/Author.model")

module.exports.authorController = {
    addAuthor: async (req, res) => {
        const { name, about } = req.body
        try {
            const author = await Author.create({
                name,
                about
            })
            res.json(author)
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteAuthorById: async (req, res) => {
        try {
            await Author.findByIdAndRemove(req.params.id)
            res.json('Автор удален')
        } catch (error) {
            res.json(error.message)
        }
    },

    getAuthors: async (req, res) => {
        try {
            const authors = await Genre.find()
            res.json(authors)
        } catch (error) {
            res.json(error.message)
        }
    },
}
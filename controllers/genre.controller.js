const Genre = require('../models/Genre.model.js')

module.exports.genreController = {
    addGenre: async (req, res) => {
        const { name, about } = req.body
        try {
            await Genre.create({
                name,
                about
            })
            res.json('Жанр добавлен')
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteGenreById: async (req, res) => {
        try {
            await Genre.findByIdAndRemove(req.params.id)
            res.json('Жанр удален')
        } catch (error) {
            res.json(error.message)
        }
    },
    getGenres: async (req, res) => {
        try {
            const genres = await Genre.find()
            res.json(genres)
        } catch (error) {
            res.json(error.message)
        }
    },
}
const { Router } = require('express')
const {genreController} = require('../controllers/genre.controller.js')

const router = Router ()
router.post('/genre', genreController.addGenre)
router.get('/genres', genreController.getGenres)
router.delete('/genre/:id', genreController.deleteGenreById)



module.exports = router
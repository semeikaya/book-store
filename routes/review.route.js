const { Router } = require('express')
const { reviewController } = require('../controllers/review.controller.js')

const router = Router()

router.post('/review', reviewController.addReview)
router.get('/review/:id', reviewController.getReview)
router.delete('/review/:id', reviewController.deleteReviewById)

module.exports = router
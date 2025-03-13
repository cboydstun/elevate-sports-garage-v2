import express from 'express';
import { createReview, getReviews, getReviewById, updateReview,deleteReview } from '../controllers/reviews.controller.js';
import authenticateUser from '../middleware/authenticateAdmin.js'
const router = express.Router();
router.get('/api/reviews', getReviews)
router.get('/api/reviews/:id', getReviewById)
router.post('/api/reviews', authenticateUser, createReview)
router.put('/api/reviews/:id',authenticateUser,updateReview)
router.delete('/api/reviews/:id',authenticateUser,deleteReview)


export default router;

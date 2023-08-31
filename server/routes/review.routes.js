const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const ReviewCtrl = require('../controllers/reviews.controller');
const {reviewSchema} = require("../validators/review.validator");
const { validateReview } = require('../utils');

router.post('/rate-agent/:agentId', validateReview(reviewSchema), asyncHandler(ReviewCtrl.addReviewToAgent));

module.exports = router;

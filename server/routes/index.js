const express = require('express');
const router = express.Router();
const agentRoutes = require('./agent.routes')
const reviewRoutes = require('./review.routes')

router.use('/', agentRoutes);
router.use('/', reviewRoutes);

module.exports = router;

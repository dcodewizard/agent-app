const reviewService = require('../DAO/reviews.dao')

async function addReviewToAgent(req, res) {
  const agentId = req.params.agentId;
  const { rating, comment } = req.body;
  try {
    const agent = await reviewService.findAgent(agentId);

    if (!agent) {
      res.status(404).send({message: "Agent not found"});
    }

    const review = await reviewService.createReview(rating, comment, agent);

    return res.status(201).json({ message: 'Review Added Successfully!', review });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  addReviewToAgent,
};


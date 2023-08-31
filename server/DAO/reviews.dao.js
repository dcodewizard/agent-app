const { Agent } = require("../models/agent");
const Review = require("../models/review");

function findAgent(agentId) {
  return Agent.findOne({
    where: { id: agentId },
  });
}

function createReview(rating, comment, agent) {
  return Review.create({
    rating: rating,
    comment: comment,
    AgentId: agent.id,
  });
}

module.exports = {
  findAgent,
  createReview,
}
const { Agent } = require('../models/agent');
const Review = require('../models/review');
const { Op } = require('sequelize');

function createAgent(agentObj, practices) {
  return Agent.create({ ...agentObj, practiceAreas: practices });
}

function showAgent(agentId) {
  return Agent.findOne({
    include: Review,
    where: { id: agentId },
  });
}

function getAllAgents(offset, limit) {
  return Agent.findAll({
    offset: offset,
    limit: limit,
  });
}

function agentsCount(searchQuery, offset) {
  return Agent.count({
    where: {
      [Op.or]: [
        {
          firstName: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
        {
          lastName: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
        {
          agentLicense: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      ],
    },
    offset: offset,
  });
}

function findAgents(searchQuery, offset, limit) {
  if (searchQuery) {
    searchQuery = {
      [Op.or]: [
        {
          firstName: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
        {
          lastName: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
        {
          agentLicense: {
            [Op.like]: `%${searchQuery}%`,
          },
        },
      ],
    };
  } else {
    searchQuery = {};
  }
  return Agent.findAll({
    where: searchQuery,
    offset: offset,
    limit: limit,
    order: [['createdAt', 'DESC']],
  });
}

module.exports = {
  createAgent,
  getAllAgents,
  agentsCount,
  findAgents,
  showAgent,
};

const agentService = require('../DAO/agents.dao'); 
const { Agent } = require('../models/agent');

async function addAgent(req, res) {
  const practices = req.validatedData.practiceAreas.join(',')
  const newAgent = req.validatedData;

  const data = await agentService.createAgent(newAgent, practices);
  res.status(201).send({message: "Agent Created Successfully!", agent: data});
}

async function listAgents(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const { search } = req.query;
    const limit = 5;
    const offset = (page - 1) * limit;
    let agents = [];
    let totalPageCount = 0;
    agents = await agentService.findAgents(search, offset, limit);

    if (search) {
      agentsCount = await agentService.agentsCount(search, offset);
      totalPageCount = Math.ceil(agentsCount/limit);
    } else {
      totalPageCount = Math.ceil(await Agent.count()/limit);
    } 
  
    return res.status(200).send({
      agents,
      page,
      totalPageCount,
    });
  } catch(error) {
    res.status(500).send({message: error.message})
  }
}

async function getAgent(req, res) {
  const agentId = req.params.id;
  try {
    const agent = await agentService.showAgent(agentId);

    if (agent) {
      res.status(200).send(agent);
    } else {
      res.status(404).send({message: "Agent not found"});
    }
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}


module.exports = {
  addAgent,
  listAgents,
  getAgent,
};

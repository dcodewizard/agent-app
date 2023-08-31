const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {validateAgent} = require('../utils');
const {agentSchema} = require("../validators/agent.validator");
const AgentCtrl = require('../controllers/agents.controller');

router.post('/create-agent', validateAgent(agentSchema), asyncHandler(AgentCtrl.addAgent));
router.get('/agents', asyncHandler(AgentCtrl.listAgents));
router.get('/show-agent/:id', asyncHandler(AgentCtrl.getAgent));

module.exports = router;

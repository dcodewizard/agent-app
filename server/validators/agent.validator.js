const Joi = require('joi');
const { Agent } = require('../models/agent');

const agentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  photoUrl: Joi.string(),
  agentLicense: Joi.string().required().external(async (value) => {
    const existingAgent = await Agent.findOne({
      where: { agentLicense: value },
    });
    if (existingAgent) {
      throw new Error('License Already in Use');
    } 
    return value;
  }),
  address: Joi.string().required(),
  practiceAreas: Joi.array(),
  aboutMe: Joi.string().min(1).max(255),
})

module.exports = {
  agentSchema
};

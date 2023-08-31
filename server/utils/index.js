const validateAgent = (schema) => {
  return async (req, res, next) => {
    try {
      const value = await schema.validateAsync(req.body);
      req.validatedData = value;
      next();
    } catch(error) {
      return res.status(400).json({ error: error.message });
    }   
  }
};

const validateReview = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    req.validatedData = value;
    next();
  }
};

module.exports = {
  validateAgent, 
  validateReview
}

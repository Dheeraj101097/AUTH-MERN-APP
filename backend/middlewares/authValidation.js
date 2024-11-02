const Joi = require("joi");

// for signup validation
// make function and export

//

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    //from clinet how data comes in obj it comes
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) //from documentation
      .required(),
    password: Joi.string().min(3).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "validation error", error });
  }
  next();
};

// login

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    //from clinet how data comes in obj it comes
    //   name: Joi.string().min(3).max(100).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) //from documentation
      .required(),
    password: Joi.string().min(3).max(100).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "validation error", error });
  }
  next();
};

module.exports = { signupValidation, loginValidation };

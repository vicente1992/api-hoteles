const { request, response } = require("express");
const { validationResult } = require("express-validator");


const validateFiels = (req = request, res = response, next) => {
  //manejos de error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.mapped()
    });
  }

  next();
}

module.exports = {
  validateFiels
}
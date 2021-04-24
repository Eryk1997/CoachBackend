const express = require("express");
const loginController = express.Router();
const loginRepository = require("../repository/loginRepository");
const { checkSchema, validationResult } = require("express-validator");
const loginValidator = require("../validators/login/loginValidator");

loginController.post("/login", checkSchema(loginValidator), (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) return res.status(400).json({ error: error.array() });

  loginRepository.login(req, res);
});

module.exports = loginController;

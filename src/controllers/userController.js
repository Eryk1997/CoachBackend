const express = require("express");
const userController = express.Router();
const authenticateJWT = require("../config/authenticate");
const userRepository = require("../repository/userRepository");
const { checkSchema, validationResult } = require("express-validator");
const registrationSchema = require("../validators/user/registrationValidator");
const deleteUserValidator = require("../validators/user/deleteUserValidator");
const updateUserSchema = require("../validators/user/updateUserValidator");

//GET ALL USERS
userController.get("/",authenticateJWT, (req, res) => {
  userRepository.selectAll(req, res);
});

//ADD USER TO DATABASE
userController.post("/", checkSchema(registrationSchema), (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
  userRepository.addUser(req, res);
});

//REMOVE USER FROM DATABASE
userController.delete(
  "/:id",
  checkSchema(deleteUserValidator),
  authenticateJWT,
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    userRepository.deleteUserById(req, res);
  }
);

//UPDATE USER IN DATABASE
userController.put(
  "/:id",
  authenticateJWT,
  checkSchema(updateUserSchema),
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    userRepository.updateUserById(req, res);
  }
);

module.exports = userController;

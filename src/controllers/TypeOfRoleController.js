const express = require("express");
const typeOfRoleController = express.Router();
const authenticateJWT = require("../config/authenticate");
const typeOfRoleRepository = require("../repository/TypeOfRoleRepository");

//GET ALL TYPE OF ROLES
typeOfRoleController.get("/", (req,res) =>{
    typeOfRoleRepository.selectAll(req,res)
});

module.exports = typeOfRoleController;

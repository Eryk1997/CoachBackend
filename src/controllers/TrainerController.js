const express = require('express')
const trainerController = express.Router();
const authenticateJWT = require("../config/authenticate")
const trainerRepository = require("../repository/TrainerRepository")

//SELECT ALL TRAINERS
trainerController.get("/", authenticateJWT, (req, res) => {
    trainerRepository.selectAllTrainers(req, res);
})

module.exports = trainerController;
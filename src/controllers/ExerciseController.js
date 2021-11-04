const express = require('express')
const exerciseController = express.Router();
const authenticateJWT = require('../config/authenticate')
const exerciseRepository = require('../repository/ExerciseRepository')

//GET ALL EXERCISES FROM DATABASE
exerciseController.get('/', authenticateJWT, (req, res) => {
    exerciseRepository.selectAllExercises(req,res);
})

module.exports = exerciseController;
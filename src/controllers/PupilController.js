const express = require("express");
const pupilController = express.Router();
const authenticateJWT = require("../config/authenticate");
const pupilRepository = require("../repository/PupilRepository")

//GET ALL PUPILS BY TRAINER ID
pupilController.get(
    "/:id",
    authenticateJWT,
    (req, res) => {
      pupilRepository.selectUsersByTrainerId(req, res);
    }
  );


  module.exports = pupilController;

  
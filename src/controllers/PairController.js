const express = require("express");
const pairController = express.Router();
const authenticateJWT = require("../config/authenticate");
const pairRepository = require("../repository/PairRepository")

//REMOVE USER FROM DATABASE
pairController.get(
    "/:id",
    authenticateJWT,
    (req, res) => {
      pairRepository.selectUsersByTrainerId(req, res);
    }
  );


  module.exports = pairController;

  
const express = require("express");
const pupilController = express.Router();
const authenticateJWT = require("../config/authenticate");
const pupilRepository = require("../repository/pupilRepository");

pupilController.get("/", authenticateJWT, (req, res) => {
  pupilRepository.selectAllPupils(req, res);
});

pupilController.post("/", authenticateJWT, (req, res) => {
  pupilRepository.addPupil(req, res);
});

pupilController.delete("/:id", authenticateJWT, (req, res) => {
  pupilRepository.deletePupil(req, res);
});

pupilController.put("/:id", authenticateJWT, (req, res) => {
  pupilRepository.updatePupil(req, res);
});

module.exports = pupilController;

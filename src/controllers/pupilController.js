const express = require("express");
const pupilController = express.Router();
const authenticateJWT = require("../config/authenticate");
const pupilRepository = require("../repository/pupilRepository");
const { checkSchema, validationResult } = require("express-validator");
const addPupilValidator = require("../validators/pupil/addPupilValidator");
const deletePupilValidator = require("../validators/pupil/deletePupilValidator");
const updatePupilValidator = require("../validators/pupil/updatePupilValidator");

pupilController.get("/", authenticateJWT, (req, res) => {
  pupilRepository.selectAllPupils(req, res);
});

pupilController.post(
  "/",
  checkSchema(addPupilValidator),
  authenticateJWT,
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    pupilRepository.addPupil(req, res);
  }
);

pupilController.delete(
  "/:id",
  checkSchema(deletePupilValidator),
  authenticateJWT,
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });

    pupilRepository.deletePupil(req, res);
  }
);

pupilController.put(
  "/:id",
  checkSchema(updatePupilValidator),
  authenticateJWT,
  (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    pupilRepository.updatePupil(req, res);
  }
);

module.exports = pupilController;

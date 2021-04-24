const Pupil = require("../models/Pupil");
const User = require("../models/User");

//GET ALL PUPILS
exports.selectAllPupils = async (req, res) => {
  const pupils = await Pupil.query();
  res.json(pupils);
};

//ADD PUPIL
exports.addPupil = async (req, res) => {
  const { name, surname, growth, weight, age } = req.body;
  const id_user = req.user.id;
  const pupil = await Pupil.query().insert({
    age: age,
    growth: growth,
    id_user: id_user,
    name: name,
    surname: surname,
    weight: weight,
  });

  res.status(200).json({ message: "add pupil" });
};

//DELETE PUPIL
exports.deletePupil = async (req, res) => {
  const id_pupil = req.params.id;
  const id_user = req.user.id;
  const pupil = await Pupil.query().findById(id_pupil);
  if (pupil.id_user !== id_user)
    return res.status(400).json({ message: "it is not your pupil" });
  await Pupil.query().deleteById(id_pupil);

  res.status(200).json({ message: `Pupil with id: ${id_pupil} delete` });
};

//UPDATE PUPIL
exports.updatePupil = async (req, res) => {
  const { name, surname, growth, weight, age } = req.body;
  const id_pupil = req.params.id;
  const id_user = req.user.id;
  const pupil = await Pupil.query().findById(id_pupil);
  if (!pupil) return res.status(400).json({ message: "Not found pupil" });

  if (pupil.id_user !== id_user)
    return res.status(400).json({ message: "it is not your pupil" });

  const newPupil = await Pupil.query()
    .patch({
      age: age ?? pupil.age,
      growth: growth ?? pupil.growth,
      name: name ?? pupil.name,
      surname: surname ?? pupil.surname,
      weight: weight ?? pupil.weight,
    })
    .findById(id_pupil);

  res.status(200).json({ message: `Update pupil with id: ${id_pupil}` });
};

let bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.selectAll = async (req, res) => {
  const users = await User.query().withGraphFetched('pupils');
  res.json(users);
};

exports.addUser = async (req, res) => {
  const user = await User.query().insert({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  res.status(200).json({ message: "correct add user" });
};

exports.deleteUserById = async (req, res) => {
  const user = await User.query().deleteById(req.params.id);

  res.status(200).json({ message: `User with id: ${req.params.id} delete` });
};

// exports.updateUserById = async (req, res) => {
//   const user = await User.query().findById(req.params.id);
//   const {name,surname,email} = req.body
//   const password = bcrypt.hashSync(req.body.password,10)
//
//   await User.query()
//     .patch({
//       name: name ?? user.name,
//       surname: surname ?? user.surname,
//       email: email ?? user.email,
//       password: password ?? user.password,
//     })
//     .findById(req.params.id);
//
//   res.status(200).json({ message: `Update user with id: ${req.params.id}` });
// };

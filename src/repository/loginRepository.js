require("dotenv").config();
let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.login = async (req, res) => {
  const user = await User.query().where("email", "=", req.body.email);

  const passwordValid = await bcrypt.compareSync(
    req.body.password,
    user[0].password
  );

  if (!passwordValid)
    return res
      .status(401)
      .json({ accessToken: null, message: "Invalid Password" });

  const token = jwt.sign({ id:user[0].id,email: user[0].email }, process.env.UNICATE_KEY, {
    expiresIn: "30min",
  });

  res.cookie("JWT", token, {
    maxAge: 86400000,
    httpOnly: true,
  });

  res
    .status(200)
    .json({ id: user[0].id, name: user[0].name, accessToken: token });
};

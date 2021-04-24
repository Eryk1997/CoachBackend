const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          email: "erykmati@o2.pl",
          password: bcrypt.hashSync("12345", 10),
          name: "eryk",
          surname: "janocha",
        },
        {
          email: "erykmati1@o2.pl",
          password: bcrypt.hashSync("12345", 10),
          name: "eryk1",
          surname: "janocha1",
        },
        {
          email: "erykmati2@o2.pl",
          password: bcrypt.hashSync("12345", 10),
          name: "eryk2",
          surname: "janocha2",
        },
      ]);
    });
};

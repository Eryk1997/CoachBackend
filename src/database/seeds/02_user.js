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
                    growth: 181,
                    weight: 67,
                    age: 24,
                    type_of_role_id: 3
                },
                {
                    email: "erykmati1@o2.pl",
                    password: bcrypt.hashSync("12345", 10),
                    name: "eryk1",
                    surname: "janocha1",
                    growth: 177,
                    weight: 85,
                    age: 27,
                    type_of_role_id: 1
                },
                {
                    email: "erykmati2@o2.pl",
                    password: bcrypt.hashSync("12345", 10),
                    name: "eryk2",
                    surname: "janocha2",
                    growth: 186,
                    weight: 77,
                    age: 22,
                    type_of_role_id: 2
                },
                {
                    email: "erykmati3@o2.pl",
                    password: bcrypt.hashSync("12345", 10),
                    name: "eryk2",
                    surname: "janocha2",
                    growth: 186,
                    weight: 77,
                    age: 22,
                    type_of_role_id: 1
                },
                {
                    email: "erykmati4@o2.pl",
                    password: bcrypt.hashSync("12345", 10),
                    name: "eryk2",
                    surname: "janocha2",
                    growth: 186,
                    weight: 77,
                    age: 22,
                    type_of_role_id: 2
                },
                {
                    email: "erykmati5@o2.pl",
                    password: bcrypt.hashSync("12345", 10),
                    name: "eryk2",
                    surname: "janocha2",
                    growth: 186,
                    weight: 77,
                    age: 22,
                    type_of_role_id: 2
                },
            ]);
        });
};
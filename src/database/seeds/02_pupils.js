exports.seed = function (knex) {
  return knex("pupils")
    .del()
    .then(function () {
      return knex("pupils").insert([
        {
          name: "eryk1",
          surname: "janocha2",
          growth: 181,
          weight: 71,
          age: 21,
          id_user: 1,
        },
        {
          name: "eryk1",
          surname: "janocha2",
          growth: 182,
          weight: 72,
          age: 22,
          id_user: 1,
        },
        {
          name: "eryk2",
          surname: "janocha2",
          growth: 183,
          weight: 73,
          age: 23,
          id_user: 2,
        },
      ]);
    });
};

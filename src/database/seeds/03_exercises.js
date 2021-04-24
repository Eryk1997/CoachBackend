exports.seed = function (knex) {
  return knex("exercises")
    .del()
    .then(function () {
      return knex("exercises").insert([
        {
          name: "Przysiad ",
        },
        {
          name: "Pompka ",
        },
        {
          name: "Podciąganie ",
        },
        {
          name: "Wykrok i zakrok ",
        },
        {
          name: "Martwy ciąg ",
        },
        {
          name: "Przysiad ze sztangą ",
        },
        {
          name: "Podciąganie na drążku ",
        },
        {
          name: "Deska ",
        },
      ]);
    });
};

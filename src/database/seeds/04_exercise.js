exports.seed = function (knex) {
    return knex("exercise")
        .del()
        .then(function () {
            return knex("exercise").insert([
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

exports.seed = function (knex) {
    return knex("training")
        .del()
        .then(function () {
            return knex("training").insert([
                {
                    weight: 22,
                    number_of_repetitions: 10,
                    pair_id: 1,
                    exercise_id: 1,
                    date_training: new Date('2001-09-28')
                },
                {
                    weight: 24,
                    number_of_repetitions: 10,
                    pair_id: 1,
                    exercise_id: 1,
                    date_training: new Date('2001-09-28')

                },
                {
                    weight: 26,
                    number_of_repetitions: 10,
                    pair_id: 1,
                    exercise_id: 1,
                    date_training: new Date('2001-09-28')

                },
                {
                    weight: 22,
                    number_of_repetitions: 10,
                    pair_id: 2,
                    exercise_id: 2,
                    date_training: new Date('2001-09-28')

                },
                {
                    weight: 24,
                    number_of_repetitions: 10,
                    pair_id: 2,
                    exercise_id: 2,
                    date_training: new Date('2001-09-28')

                },
                {
                    weight: 26,
                    number_of_repetitions: 10,
                    pair_id: 2,
                    exercise_id: 2,
                    date_training: new Date('2001-09-28')
                },
            ]);
        });
};

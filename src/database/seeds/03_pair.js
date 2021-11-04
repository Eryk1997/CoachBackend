exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('pair').del()
        .then(function () {
            // Inserts seed entries
            return knex('pair').insert([
                {trainer_id: 2, pupil_id: 3},
                {trainer_id: 4, pupil_id: 5},
                {trainer_id: 4, pupil_id: 6}
            ]);
        });
};

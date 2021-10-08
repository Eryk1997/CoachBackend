exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('type_of_meal').del()
        .then(function () {
            // Inserts seed entries
            return knex('type_of_meal').insert([
                {name: 'Śniadanie'},
                {name: 'II śniadanie'},
                {name: 'Lunch'},
                {name: 'Obiad'},
                {name: 'Przekąska'},
                {name: 'Kolacja'},
            ]);
        });
};

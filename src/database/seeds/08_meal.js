exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('meal').del()
        .then(function () {
            // Inserts seed entries
            return knex('meal').insert([
                {date_meal: new Date('2001-09-28'), product_id: 1, type_of_meal_id: 2, pair_id: 1},
                {date_meal: new Date('2001-09-28'), product_id: 2, type_of_meal_id: 4, pair_id: 2},
                {date_meal: new Date('2001-09-28'), product_id: 3, type_of_meal_id: 3, pair_id: 1}
            ]);
        });
};

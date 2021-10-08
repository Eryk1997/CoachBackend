exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('product').del()
        .then(function () {
            // Inserts seed entries
            return knex('product').insert([
                {name: 'kurczak', protein: 3, carbohydrates: 3, fats: 5, calories: 55},
                {name: 'indyk', protein: 2, carbohydrates: 4, fats: 5, calories: 66},
                {name: 'jajko', protein: 1, carbohydrates: 5, fats: 5, calories: 53}
            ]);
        });
};

exports.up = function (knex) {
    return knex.schema.createTable('exercise', (table) => {
        table.increments('id_exercise').unsigned().primary();
        table.string('name').notNull();

    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('exercise');
};


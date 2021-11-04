exports.up = function (knex) {
    return knex.schema.createTable("training", (table) => {
        table.increments("id_training").unsigned().primary();
        table.decimal("weight").notNull();
        table.integer("number_of_repetitions").notNull();

        table.timestamp("date_training", { precision: 0 }).defaultTo(knex.fn.now(6));

        table.integer("pair_id").unsigned().notNull();
        table.foreign("pair_id").references("id").inTable('pair');

        table.integer("exercise_id").unsigned().notNull();
        table.foreign("exercise_id").references("id").inTable('exercise');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("training");
};

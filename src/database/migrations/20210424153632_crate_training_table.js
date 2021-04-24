exports.up = function (knex) {
  return knex.schema.createTable("training", (table) => {
    table.increments("id").unsigned().primary();
    table.decimal("weight").notNull();
    table.integer("number_of_repetitions").notNull();

    table.timestamp("created_at", { precision: 0 }).defaultTo(knex.fn.now(6));

    table.integer("id_pupil").unsigned().notNullable();
    table.foreign("id_pupil").references("pupils.id");

    table.integer("id_exercise").unsigned().notNullable();
    table.foreign("id_exercise").references("exercises.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("training");
};

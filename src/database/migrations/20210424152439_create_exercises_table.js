exports.up = function (knex) {
  return knex.schema.createTable("exercises", (table) => {
    table.increments("id").unsigned().primary();
    table.string("name").notNull();

    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("exercises");
};

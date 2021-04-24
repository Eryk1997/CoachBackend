exports.up = function (knex) {
  return knex.schema.createTable("pupils", (table) => {
    table.increments('id').unsigned().primary()
    table.string("name").notNull();
    table.string("surname").notNull();
    table.decimal("growth").notNull();
    table.decimal("weight").notNull();
    table.integer("age").notNull();

    table.integer("id_user").unsigned().notNullable();
    table.foreign("id_user").references("users.id");

    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pupils");
};

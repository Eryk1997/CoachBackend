exports.up = function (knex) {
    return knex.schema.createTable('type_of_role', table => {
        table.increments('id_type_of_role').unsigned().primary();
        table.string('name').notNull()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('type_of_role')
};

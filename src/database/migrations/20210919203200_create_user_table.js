exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').unsigned().primary();
        table.string('name').notNull();
        table.string('surname').notNull();
        table.string('email').notNull();
        table.string('password').notNull();
        table.decimal('growth').notNull();
        table.decimal('weight').notNull();
        table.integer('age').notNull();

        table.integer('type_of_role_id').unsigned().notNull();
        table.foreign('type_of_role_id').references('id_type_of_role').inTable('type_of_role')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};


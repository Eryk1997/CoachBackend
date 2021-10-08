exports.up = function (knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id_product').unsigned().primary();
        table.string('name').notNull();
        table.decimal('protein').notNull();
        table.decimal('carbohydrates').notNull();
        table.decimal('fats').notNull();
        table.decimal('calories').notNull();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("product");
};

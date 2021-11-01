exports.up = function (knex) {
    return knex.schema.createTable('meal', table => {
        table.increments('id').unsigned().primary()
        table.timestamp("date_meal", {precision: 0}).defaultTo(knex.fn.now(6));

        table.integer('product_id').unsigned().notNull();
        table.foreign('product_id').references('id').inTable('product');

        table.integer('type_of_meal_id').unsigned().notNull();
        table.foreign('type_of_meal_id').references('id').inTable('type_of_meal');

        table.integer('pair_id').unsigned().notNull();
        table.foreign('pair_id').references('id').inTable('pair');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('meal')
};
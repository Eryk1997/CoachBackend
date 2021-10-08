exports.up = function(knex) {
    return knex.schema.createTable('pair', table =>{
        table.increments('id_pair').unsigned().primary();

        table.integer('trainer_id').unsigned().notNull();
        table.foreign('trainer_id').references('id_user').inTable('users');

        table.integer('pupil_id').unsigned().notNull();
        table.foreign('pupil_id').references('id_user').inTable('users');
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pair');
};
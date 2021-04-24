
exports.up = function(knex) {
  return knex.schema.createTable('users',(table) => {
      table.increments('id').unsigned().primary()
      table.string('email').unique().notNull()
      table.string('password').notNull()
      table.string('name').notNull()
      table.string('surname').notNull()
      table.timestamps(false,true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

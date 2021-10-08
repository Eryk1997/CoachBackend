
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('type_of_role').del()
    .then(function () {
      // Inserts seed entries
      return knex('type_of_role').insert([
        {name: 'trainer'},
        {name: 'pupil'},
        {name: 'admin'}
      ]);
    });
};

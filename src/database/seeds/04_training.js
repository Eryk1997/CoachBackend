exports.seed = function (knex) {
  return knex("training")
    .del()
    .then(function () {
      return knex("training").insert([
        {
          weight: 22,
          number_of_repetitions: 10,
          id_pupil: 1,
          id_exercise: 1,
        },
        {
          weight: 24,
          number_of_repetitions: 10,
          id_pupil: 1,
          id_exercise: 1,
        },
        {
          weight: 26,
          number_of_repetitions: 10,
          id_pupil: 1,
          id_exercise: 1,
        },
        {
          weight: 22,
          number_of_repetitions: 10,
          id_pupil: 2,
          id_exercise: 2,
        },
        {
          weight: 24,
          number_of_repetitions: 10,
          id_pupil: 2,
          id_exercise: 2,
        },
        {
          weight: 26,
          number_of_repetitions: 10,
          id_pupil: 2,
          id_exercise: 2,
          created_at: new Date('2001-09-28')
        },
      ]);
    });
};

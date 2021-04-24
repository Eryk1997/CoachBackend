const Pupil = require("../../models/Pupil");

const deletePupilValidator = {
  id: {
    custom: {
      options: (value) => {
        return Pupil.query()
          .where("id", "=", value)
          .then((pupil) => {
            if (pupil.length == 0)
              return Promise.reject("Not found pupil in database");
          });
      },
    },
  },
};

module.exports = deletePupilValidator;

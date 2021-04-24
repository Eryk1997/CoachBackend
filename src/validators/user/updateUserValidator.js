const User = require("../../models/User");

const updateUserSchema = {
  email: {
    custom: {
      options: (value) => {
        return User.query()
          .where("email", "=", value)
          .then((user) => {
            if (user.length > 0)
              return Promise.reject("Email address already exist");
          });
      },
      optional: { options: { nullable: true } },
    },
    isEmail: {
      bail: true,
      errorMessage: "It is not email",
    },
    optional: { options: { nullable: true } },
  },
  name: {
    isLength: {
      errorMessage: "Minimum 4 chars or long",
      options: { min: 4 },
    },
    optional: { options: { nullable: true } },
  },
  surname: {
    isLength: {
      errorMessage: "Minimum 4 chars or long",
      options: { min: 4 },
    },
    optional: { options: { nullable: true } },
  },
};

module.exports = updateUserSchema;

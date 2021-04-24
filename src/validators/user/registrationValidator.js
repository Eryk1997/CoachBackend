const User = require("../../models/User");

const registrationSchema = {
  /* password: {
    isStrongPassword: {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    },
    errorMessage: "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"
  },
  */
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
    },
    isEmail: {
      bail: true,
      errorMessage: "It is not email",
    },
  },
  name: {
    isLength: {
      errorMessage: "Minimum 4 chars or long",
      options: { min: 4 },
    },
  },
  surname: {
    isLength: {
      errorMessage: "Minimum 4 chars or long",
      options: { min: 4 },
    },
  },
};

module.exports = registrationSchema;

const User = require("../../models/User");

const loginValidator = {
  email: {
    custom: {
      options: (value) => {
        return User.query()
          .where("email", "=", value)
          .then((user) => {
            if (user.length==0)
              return Promise.reject("Not found user with this email");
          });
      },
    },
    isEmail: {
      bail: true,
      errorMessage: "It is not email",
    },
  },
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

};


module.exports = loginValidator
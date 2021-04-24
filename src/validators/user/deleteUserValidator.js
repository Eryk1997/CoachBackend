const User = require("../../models/User");

const deleteUserValidator = {
  id: {
    custom: {
      options: (value) => {
        return User.query()
          .where("id","=",value)
          .then((user) => {
              console.log(user);
            if (user.length == 0) return Promise.reject("Not found user in database");
          });
      },
    },
  },
};

module.exports = deleteUserValidator;

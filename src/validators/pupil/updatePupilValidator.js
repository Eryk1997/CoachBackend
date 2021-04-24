const updatePupilValidator = {
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
  growth: {
    custom: {
      options: (value) => {
        if (value <= 0 || value > 300)
          return Promise.reject("Growth must be between (1,300)");
        return value;
      },
    },
    optional: { options: { nullable: true } },
  },
  weight: {
    custom: {
      options: (value) => {
        if (value <= 0 || value > 300)
          return Promise.reject("Weight must be between (1,300)");
        return value;
      },
    },
    optional: { options: { nullable: true } },
  },
  age: {
    custom: {
      options: (value) => {
        if (value <= 0 || value > 150)
          return Promise.reject("Age must be between (1,150)");
        return value;
      },
    },
    optional: { options: { nullable: true } },
  },
};

module.exports = updatePupilValidator;

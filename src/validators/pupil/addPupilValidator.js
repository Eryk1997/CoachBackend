const addPupilValidator = {
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
  growth: {
    custom: {
      options: (value) => {
        if (value <= 0 || value > 300)
          return Promise.reject("Growth must be between (1,300)");
        return value;
      },
    },
  },
  weight: {
    custom: {
      options: (value) => {
        if (value <= 0 || value > 300)
          return Promise.reject("Weight must be between (1,300)");
        return value;
      },
    },
  },
  age: {
    custom: {
      options: (value) => {
        if (value <= 0 || value > 150)
          return Promise.reject("Age must be between (1,150)");
        return value;
      },
    },
  },
};

module.exports = addPupilValidator;

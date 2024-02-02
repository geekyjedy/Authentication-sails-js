module.exports = {
  friendlyName: "Register",

  description: "Register user db.",

  inputs: {
    username: {
      type: "string",
      required: true,
    },
    userEmail: {
      type: "string",
      required: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
      // minLength: 5,
      custom: function (value) {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(value);
      },
    },
    gender: {
      type: "string",
      required: true,
    },
    birthdate: {
      type: "string",
      required: true,
      columnType: "date",
    },
    profession: {
      type: "json",
      required: true,
    },
    country: {
      type: "string",
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    console.log("inside register log");

    const {
      username,
      userEmail,
      password,
      birthdate,
      gender,
      profession,
      country,
    } = inputs;

    let professionValue = profession.join(',');

    try {
      console.log("inside register, just before creating user");

      this.res.view('pages/homepage',{alert:'check mail for verification'});

      await Auth2.create({
        username: username,
        email: userEmail,
        password: password,
        gender: gender,
        birthdate: birthdate,
        profession: professionValue,
        country: country,
      }).fetch();

      
    } catch (error) {
      console.error("Error while creating user:", error);
      return this.res.serverError("Error creating user");
    }
  },
};

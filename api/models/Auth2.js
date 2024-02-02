const nodemailer = require("nodemailer");

module.exports = {
  attributes: {
    username: {
      type: "string",
      unique: true,
      required: true,
    },
    email: {
      type: "string",
      unique: true,
      required: true,
    },
    password: {
      type: "string",
      required: true,
      encrypt: true,
    },
    gender: {
      type: "string",
      required: true,
    },
    birthdate: {
      type: "string",
      required: true,
    },
    profession: {
      type: "string",
      required: true,
    },
    country: {
      type: "string",
      required: true,
    },
    isVerified: {
      type: "boolean",
      defaultsTo: false,
    },
  },

  afterCreate: async function (values) {
    const { email, id, username } = values;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "<email address>",
          pass: "<16 digit app password>",
        },
      });

      const mailOptions = {
        from: "<sender's email>",
        to: email,
        subject: "welcome to localhost's website",
        html: `<h3>Hello ${username},</h3> </br> <p>kindely <a href="http://localhost:1337/verify?id=${id}">verify </a>your account</p>`,
      };

      const info = await transporter.sendMail(mailOptions);
      sails.log.info(`Email has been sent: ${info.messageId}`);
    } catch (error) {
      sails.log.error(` while sending email got this error: ${error.message}`);
      throw error;
    }
  },
};


//----used helper for sending mail 
//----later i moved this functionality to model using lifecycle method afterCreate



//-------------------------------------------------

// const nodemailer = require('nodemailer');

// module.exports = {

//   friendlyName: 'Email',

//   description: 'Email something.',

//   inputs: {
//     userEmail:{
//       type:"string"
//     }
//   },

//   exits: {
//     emailFailed: {
//       description: 'Failed to send email',
//     },
//   },

//   fn: async function (inputs) {
//     const {userEmail} = inputs
    
//     try {
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: '<>',
//           pass: '<>',
//         },
//       });

//       const mailOptions = {
//         from: '<>',
//         to: userEmail,
//         subject: "this is subject of the email",
//         text: "this is demo text",
//       };

//       const info = await transporter.sendMail(mailOptions);

//       sails.log.info(`Email has been sent: ${info.messageId}`);
//       return;
//     } catch (error) {
//       sails.log.error(` while sending email got this error: ${error.message}`);
//       throw error;
//     }
//   },
// };
module.exports = {
  friendlyName: "Verify",

  description: "Verify something.",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    try {
      const userId = this.req.param("id");
      const verified = await Auth2.updateOne(
        { id: userId },
         { isVerified: 1 } 
      );

      console.log(userId +" is verified");
      console.log(verified);

      return this.res.view("pages/homepage", {
        alert: "thank you for verification,login now",
      });
    } catch (error) {
      console.log(`error in verification mail that is: ${error}`);
    }

    return;
  },
};

module.exports = {
  friendlyName: "Login",
  description: "Login something",
  inputs: {
    email: {
      type: "string",
      required: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
    }
    
  },
  exits: {
  },
  fn: async function (inputs) {
    const { email, password } = inputs;
    try {

      let existing = await Auth2.findOne({ email: email });
      let pass = await Auth2.findOne({ id: existing.id }).decrypt();
      
      if (existing) {
        if(existing.isVerified !=1){
          return this.res.view("pages/homepage",{alert:"verify first"});
        }
        if (password == pass.password) {
          this.res.cookie('token',JSON.stringify({userId:existing.id,username:existing.username}),{
            maxAge:24*60*60*1000,
          });
    
          return this.res.view("pages/dashboard");
        } else {
          return this.res.view("pages/homepage",{alert:"wrong password"});
        }
      }
    } catch (error) {
      return this.res.view("pages/homepage",{alert:"kindely register first"});
      
    }
  },
};
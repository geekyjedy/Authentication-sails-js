module.exports = function (req, res, next) {
    try {
      const token = req.cookies.token;
  
    //   console.log('inside movie policy');
  
      if (token) {
        return next();
      } else {
        
        return res.view('pages/homepage',{alert:" please login"});
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send('Internal Server Error');
    }
  };
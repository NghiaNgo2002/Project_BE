const RegisterService = require("./RegisterService");
exports.Register = (req, res) => {
    res.render('Register/Register');
  };
  
  exports.RegisterAccount = async (req,res) => {
    const {username:username} = req.body;
    const {password:password} = req.body;
    console.log(username,password);

  RegisterService.RegisterAccount(username,password);
  res.redirect("/Register");
  }
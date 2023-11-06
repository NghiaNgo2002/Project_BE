const LogInService = require("./LogInService");
exports.LogIn = (req, res) => {
    res.render('LogIn/LogIn');
  };
exports.LogInAccount = async (req,res) => {
    const {username:username} = req.body;
    const {password:password} = req.body;

  let bien = await LogInService.LogInAccount(username);
  console.log(bien[0].password);
  console.log(password);

  if(password === bien[0].password){
    console.log(1);
    res.redirect("/Home");
  }

  else{
  console.log(2);
  res.redirect("/LogIn");
  }
}
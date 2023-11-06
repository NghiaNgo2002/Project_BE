const db = require ('../../connect');

exports.LogInAccount = async (username) => {
   const result = await db.connection.execute("Select password from account where username = ?",[username]);
   return result[0];
};
const db = require ('../../connect');

exports.RegisterAccount = async (username,password) => {
    await db.connection.execute("Insert into account (`username`,`password`) values (?,?)",[username,password]);
};
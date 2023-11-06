const LogInRepository = require("./LogInRespository");

exports.LogIn = () => {
    return LogInRepository.LogIn();
};

exports.LogInAccount = async (name) => {
    return await LogInRepository.LogInAccount(name);
};
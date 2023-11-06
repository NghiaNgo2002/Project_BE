const RegisterRepository = require("./RegisterRepository");

exports.Register = () => {
    return RegisterRepository.Register();
};

exports.RegisterAccount = async (name,password) => {
    await RegisterRepository.RegisterAccount(name,password);
};
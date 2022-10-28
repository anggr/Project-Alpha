exports.register = (req, res, next) => {
    res.send('Register');
};

exports.login = (req, res, next) => {
    res.send(' Login');
};

exports.forgotPassword = (req, res, next) => {
    res.send('Forgot Password');
};

exports.resetPassword = (req, res, next) => {
    res.send('Reset Password');
};
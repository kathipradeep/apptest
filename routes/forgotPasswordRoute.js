var forgotpswdController = require('../controllers/forgotPasswordController');

module.exports = (app, router) => {
    
    router.post('/password', forgotpswdController.validateEmail);
    router.put('/user/password', forgotpswdController.resetPassword);
    router.post('/password/code',forgotpswdController.validateCode)

    app.use('/api', router)
};
var googleFcmController = require('../controllers/fcmController');
var authMiddleware = require("../helpers/auth");

module.exports = (app, router) => {

    router.post('/associateFCM',authMiddleware.checkAuth, googleFcmController.associateFCM);
    app.use('/api', router)

};
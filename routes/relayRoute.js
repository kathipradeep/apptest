var authMiddleware = require("../helpers/auth");
var relayController = require('../controllers/relayController');

module.exports = (app, router) => {

    router.get('/relays/:deviceId', authMiddleware.checkAuth,relayController.getRelayByDeviceId);

    router.get('/relay/:relayId', authMiddleware.checkAuth,relayController.getRelayById);

    router.put('/relay/:relayId', authMiddleware.checkAuth,relayController.updateRelay);

    router.put('/relays/status', authMiddleware.checkAuth,relayController.updateRelaystatus)


   
    app.use('/api', router)

};
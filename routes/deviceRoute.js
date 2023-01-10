var authMiddleware = require("../helpers/auth");
var deviceController = require('../controllers/deviceController');

module.exports = (app, router) => {
    router.get('/isConnected/:macAddress',authMiddleware.checkAuth,deviceController.isConnected);
    
    router.post('/device',authMiddleware.checkAuth,deviceController.addDevice);

    router.get('/device/:deviceId',authMiddleware.checkAuth, deviceController.getDeviceById);

    router.get('/devices',authMiddleware.checkAuth, deviceController.getDeviceByUserId);

    router.put('/updateLocation', authMiddleware.checkAuth,deviceController.updateLocationById);

   router.put('/device/:deviceId',authMiddleware.checkAuth, deviceController.updateDevice);
   
    router.put('/updateorder',authMiddleware.checkAuth, deviceController.updateOrder);
    
    router.delete('/device/:deviceId',authMiddleware.checkAuth, deviceController.deleteDevice);

    app.use('/api', router)

};
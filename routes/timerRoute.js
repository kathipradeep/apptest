var authMiddleware = require("../helpers/auth");
var timerController = require('../controllers/timerController');

module.exports = (app, router) => {
    router.post('/timer',authMiddleware.checkAuth,timerController.addTimer);
    router.get('/timer/:timerId', authMiddleware.checkAuth,timerController.getTimer),
    router.get('/timers/:relayId',authMiddleware.checkAuth,timerController.getalltimers),
    router.put('/timer/update',authMiddleware.checkAuth,timerController.updateTimer),
    router.delete('/timer/delete/:timerId',authMiddleware.checkAuth,timerController.deleteTimer)

    app.use('/api', router)

};
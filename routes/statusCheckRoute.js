var statusCheckController = require('../controllers/statusCheckController');

module.exports = (app, router) => {

    router.get('/healthCheck',statusCheckController.statusCheck);

    //app.use('/api', router)

};
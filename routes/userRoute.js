var userController = require('../controllers/userController');

module.exports = (app, router) => {

    router.post('/registerUser',userController.registerUser);
    router.post('/validateCodeAndActivateUser',userController.validateCodeAndActivateUser);
    //router.post('/activateUser',userController.activateUser);
    router.get('/state/city', userController.getStatecity),
    app.use('/api', router)

};
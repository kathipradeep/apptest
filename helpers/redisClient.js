const redis = require('redis');
const config = require('../config/config')

const publisher = redis.createClient(config.REDIS_PORT, config.REDIS_HOST, 
        {auth_pass: config.REDIS_KEY, tls: {servername: config.REDIS_HOST}}); 

/* const publisher = redis.createClient(config.REDIS_PORT, config.REDIS_HOST);
publisher.auth(config.REDIS_PASSWORD, function() {
	console.log("Publisher Authorised Successfully");
});  */
/* const susbscriber = redis.createClient(config.REDIS_PORT, config.REDIS_HOST); 
susbscriber.auth(config.REDIS_PASSWORD, function() {
	console.log("Subscriber Authorised Successfully");
});  */

exports.getClientInstance =  () => {
       return publisher;
    }

/* exports.getClientInstance1 =  () => {
        return susbscriber;
     } */

publisher.on('error', (err) => {
        console.log('Error from Publisher : ' + err);
});

/* susbscriber.on('error', (err) => {
        console.log('Error from Susbscriber : ' + err);
});   */   
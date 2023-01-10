const redis = require('redis');
const config = require('../config/config')

module.exports = {

    getRedisClient() {
       /*  const publisher = redis.createClient(config.REDIS_PORT, config.REDIS_HOST, 
            {auth_pass: config.REDIS_KEY, tls: {servername: config.REDIS_HOST}});
        return publisher; */

        const publisher = redis.createClient(config.REDIS_PORT, config.REDIS_HOST);
        return publisher;
    }
}
var models = require('../db/models/index');
var MESSAGES = require('../helpers/message');
var logger = require('../logger');
var HttpStatus = require('http-status-codes');
module.exports = {
    statusCheck(callback) {
        return callback(null,MESSAGES.STATUS_CHECK);
    }
}
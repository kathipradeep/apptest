var timerService=require("./timerService");
var deviceService = require("./deviceService");
var relayService = require("./relayService");
var userService = require("./userService");
var forgotPasswordService = require("./forgotPasswordService");
var authService = require("./authService");
var locationService = require("./locationService");
var scheduleService = require("./scheduleService");
var statusCheckService=require("./statusCheckService");
var fcmService = require("./fcmService");
module.exports = {
  deviceService,
  relayService,
  userService,
  forgotPasswordService,
  authService,
  locationService,
  scheduleService,
  timerService,
  statusCheckService,
  fcmService

};

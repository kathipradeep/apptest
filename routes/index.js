var deviceRoute = require("../routes").deviceRoute;
var relayRoute = require("../routes").relayRoute;
var userRoute = require("../routes").userRoute;
var forgotPasswordRoute = require("../routes").forgotPasswordRoute;
var authRoute = require("../routes").authRoute;
var locationRoute = require("../routes").locationRoute;
var scheduleRoute = require("../routes").scheduleRoute;
var timerRoute = require("../routes").timerRoute;
var statusCheckRoute = require("../routes").statusCheckRoute;
var fcmRoute =require("../routes").fcmRoute;
module.exports = {
  deviceRoute,
  relayRoute,
  userRoute,
  forgotPasswordRoute,
  authRoute,
  locationRoute,
  scheduleRoute,
  timerRoute,
  statusCheckRoute,
  fcmRoute
};

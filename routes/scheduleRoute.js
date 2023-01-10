var authMiddleware = require("../helpers/auth");
var scheduleController = require("../controllers/scheduleController");

module.exports = (app, router) => {
  router.post("/schedule",authMiddleware.checkAuth,scheduleController.createSchedule);
  router.get("/schedule/:scheduleId",authMiddleware.checkAuth, scheduleController.getScheduleById);
  router.get("/schedules/:relayId", authMiddleware.checkAuth,scheduleController.getScheduleByRelayId);
  router.put("/updateSchedule",authMiddleware.checkAuth,scheduleController.updateSchedule);
  router.delete("/deleteSchedule/:scheduleId", authMiddleware.checkAuth,scheduleController.deleteSchedule);

  app.use("/api", router);
};

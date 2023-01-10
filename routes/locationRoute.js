var authMiddleware = require("../helpers/auth");
var locationController = require("../controllers/locationController");

module.exports = (app, router) => {
  router.post("/location", authMiddleware.checkAuth,locationController.addLocation);

  router.get("/locations",authMiddleware.checkAuth, locationController.getLocationById);

  router.get("/location/:locationId",authMiddleware.checkAuth, locationController.getLocationByLocationId);

  router.put("/updateLocationByLocationId",authMiddleware.checkAuth, locationController.updateLocation);

  router.delete("/location/:locationId",authMiddleware.checkAuth, locationController.deleteLocation);

  app.use("/api", router);
};

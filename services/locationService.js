
var models = require("../db/models/index");
var MESSAGES = require("../helpers/message");
var logger = require("../logger");
var HttpStatus = require("http-status-codes");

module.exports = {
  createLocation(body, userId, callback) {
    models.h_location
      .findOne({ where: {userId: userId,locationName: body.locationName } })
      .then(result => {
        if (result != null) {
          logger.error(MESSAGES.LOCATION_ALREADY_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.CONFLICT,
              message: MESSAGES.LOCATION_ALREADY_EXISTS
            },
            null
          );
        } else {
          models.h_location
            .create(
              { locationName: body.locationName ,userId:userId}
            )
            .then(locations => {
              return callback(null, locations);
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  getLocationById(userId, callback) {
        models.h_location
          .findAll({ where: { userId:userId } })
          .then(result => {
            if (result == 0) {
              logger.error(MESSAGES.LOCATION_NOT_FOUND);
              return callback(
                {
                  httpCode: HttpStatus.NOT_FOUND,
                  message: MESSAGES.LOCATION_NOT_FOUND
                },
                null
              );
            } else {
              return callback(null, result);
            }
          });
     
  },

  getLocationByLocationId(params, callback) {
    locationId = params.locationId
    models.h_location.findOne({ where: { locationId: locationId } }).then(result1 => {
      if (result1 == null) {
        logger.error(MESSAGES.LOCATION_NOT_FOUND);
        return callback(
          {
            httpCode: HttpStatus.NOT_FOUND,
            message: MESSAGES.LOCATION_NOT_FOUND
          },
          null
        );
      } else {
        return callback(null, result1);
      }
    });
  },
  
  updateLocation(body,userId, callback) {
    models.h_location
      .findOne({ where: { locationId: body.locationId } })
      .then(function(results) {
        if (results == null) {
          logger.error(MESSAGES.LOCATION_DOES_NOT_EXISTS);
          return callback(
            {
              httpCode: HttpStatus.NOT_FOUND,
              message: MESSAGES.LOCATION_DOES_NOT_EXISTS
            },
            null
          );
        } else {
          models.h_location
            .findOne({ where: { locationName: body.locationName, userId:userId } })
            .then(function(result1) {
              if (result1 != null) {
                logger.error(MESSAGES.LOCATION_ALREADY_EXISTS);
                return callback(
                  {
                    httpCode: HttpStatus.CONFLICT,
                    message: MESSAGES.LOCATION_ALREADY_EXISTS
                  },
                  null
                );
              } else {
                models.h_location
                  .update(
                    { locationName: body.locationName },
                    { where: { locationId: body.locationId } }
                  )
                  .then(updated => {
                    if (updated == 1) {
                      return callback(null, updated);
                    }
                  })
                  .catch(err => {
                    logger.error(MESSAGES.LOCATION_COULD_NOT_UPDATE);
                    return callback(
                      {
                        httpCode: HttpStatus.BAD_REQUEST,
                        message: MESSAGES.LOCATION_COULD_NOT_UPDATE
                      },
                      null
                    );
                  });
              }
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  async deleteLocation(params, userId, callback) {
    locationId = params.locationId;
    var locationInUse = false;
    var onlyLocation = false;
    var results = await models.h_location.findOne({ where: { locationId: locationId } }); 
    if (results == null) {
      logger.error(MESSAGES.LOCATION_DOES_NOT_EXISTS);
      return callback( { httpCode: HttpStatus.NOT_FOUND, message: MESSAGES.LOCATION_DOES_NOT_EXISTS }, null );
    } else {
      var device = await models.h_device.findOne({ where: {locationId: locationId} });
      if (device) {
        locationInUse = true;  
        } 
      var locations = await models.h_location.findAll({ where: { userId: userId } });
        if(locations.length === 1) 
        {
          onlyLocation = true;
        }
        if(locationInUse || onlyLocation) {
          logger.error(MESSAGES.LOCATION_IN_USE_CANNOT_DELETE);
          return callback( { httpCode: HttpStatus.FORBIDDEN, message: MESSAGES.LOCATION_IN_USE_CANNOT_DELETE }, null );
          } else {
            models.h_location .destroy({ where: { locationId: locationId } }) .then(location => {
            return callback(null, location);
            });
        }
        }
  }
};

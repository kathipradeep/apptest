var models = require("./db/models/index");
const config = require("./config/config");
const binaryTest = require("./binaryTest");

async function genBaseRecordsForTesting() {
  
  var userId = 4;
  var locationId = 4;
  var hasDimmer = true;

  for (let i = 1; i <= config.NOSOFDEVICES; i++) {
    var macAddress = binaryTest.getMACAddress(i);
    //console.log(macAddress);
    await models.h_deviceMaster.create({
      deviceMACAddress: macAddress,
      deviceFeatureId: 4
    });
    
    var device = await models.h_device.create({
      deviceName: "HELEO",
      macAddress: macAddress,
      userId: userId,
      isConnected: false,
      updatedByTCPServer: false,
      displayOrder: 1,
      locationId: locationId
    });

    for (y = 1; y <= 7; y++) {
      await models.h_relays.create({
        switchNo: y,
        switchName: "switch " + y,
        switchStatus: true,
        isDimmer: false,
        deviceId: device.dataValues.deviceId
      });
    }

    if (hasDimmer === true) {
      await models.h_relays.create({
        switchNo: 8,
        switchName: "switch 8",
        switchStatus: true,
        isDimmer: true,
        deviceId: device.dataValues.deviceId
      });
    }

    console.log("Records Created : with Mac Address : " + macAddress);
  }
}

genBaseRecordsForTesting();

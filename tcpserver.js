var net = require("net");
const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();
var parseRequest = require("./helpers/parseRequest");
var genReponse = require("./helpers/genResponse");
var COMMAND = require("./helpers/commands");
var dbConnect = require("./helpers/dbConnect");
var genRequest = require("./helpers/genSwitchRequest");
const config = require("./config/config");
var models = require("./db/models/index");
var pushNotification = require("./helpers/pushNotification");

var DELAY_TIME = 1000;
var SAFETY = 0;
let _deviceLastCommandArray = [];

const subscriber = redis.createClient(config.REDIS_PORT, config.REDIS_HOST, {
  auth_pass: config.REDIS_KEY,
  tls: { servername: config.REDIS_HOST }
});

subscriber.on("error", err => {
  console.log("Error from Susbscriber : " + err);
});

subscriber.subscribe(config.SUBSCRIPTION_QUEUE);

var connectedClients = Object.create(null);
var relatedSwitches = Object.create(null);
var port = process.env.TCP_PORT || 3001;
console.log("Port:" + port);
var server = net.createServer();

server.on("close", function() {
  console.log("Server closed !");
});

server.on("connection", function(socket) {
  server.getConnections(function(error, count) {
    console.log("Number of concurrent connections to the server : " + count);
  });

  socket.setEncoding("hex");

  socket.on("data", function(data) {
    console.log("Incoming Request : " + data);
    var parsedData = parseRequest.parse(data);
    console.log("Parsed Data : " + JSON.stringify(parsedData));
    if (parsedData) {
      var parsedCommand = parsedData.command;

      if (parsedCommand === COMMAND.INITIAL_CONNECT) {
        var switchInfo = {};
        models.h_device .findOne({ where: { macAddress: parsedData.macAddress }, include: [{ model: models.h_relays }] }) .then(device => {
            if (device === null) {
              console.log("Error fetching device");
            } else {
              device.isConnected = true;
              device.updatedByTCPServer = true;
              device.save().then(device => {
                var relays = device.dataValues.h_relays;
                relays.forEach(relay => {
                  switchInfo[relay.switchNo] = relay.switchStatus;
                });
                console.log("Added new client to array");
                connectedClients[parsedData.macAddress] = socket;
                console.log( "Retrieved From DB during Initial Connect : " + JSON.stringify(switchInfo) );
                relatedSwitches[parsedData.macAddress] = switchInfo;
                console.log( "Pushed into Memory : " + JSON.stringify(relatedSwitches[parsedData.macAddress]) );
                dbConnect.logMessages(parsedData);
                var response = genReponse.genResponse();
                socket.write(response);
              });
            }
          });
      }

      if (parsedCommand === COMMAND.CONNECT_WITH_DEVICE_INFO) {
        dbConnect.logMessages(parsedData);
        if (socket) {
          var response = genReponse.genResponse();
          socket.write(response);
        } else {
          console.log("Socket Closed");
        }
      }

      if (parsedCommand === COMMAND.KEEP_ALIVE) {
        if (socket) {
          var response = genReponse.genResponse();
          socket.write(response);
          var socketMacAddress = getMacAddress(socket);
          console.log("SocketMacAddress : " + socketMacAddress);
          console.log( "Retrieved Switch Info from Memory     :" + JSON.stringify(relatedSwitches[socketMacAddress]) );
          console.log( "SwtichInfo From Incoming Parsed Data :" + JSON.stringify(parsedData.switchInfo) );
          var objectsCompared = isEquivalent( relatedSwitches[socketMacAddress], parsedData.switchInfo );
          console.log("Objects are same : " + objectsCompared);
          if (!objectsCompared) {
            console.log("Relay Needs to be updated");
            dbConnect.updateAllSwitchStatus( socketMacAddress, parsedData.switchInfo );
          }
          relatedSwitches[socketMacAddress] = parsedData.switchInfo;
        } else {
          console.log("Socket Closed");
        }
      }

      if (parsedCommand === COMMAND.DEVICE_STATUS_UPDATE) {
        dbConnect.logMessages(parsedData);
        var socketMacAddress = getMacAddress(socket);
        if (socketMacAddress && socket) {
          relatedSwitches[ socketMacAddress ] = dbConnect.updateSingleSwitchStatus(socketMacAddress, parsedData);
        }
      }
    } else {
      console.log("Invalid Command");
    }
  });

  socket.on("drain", function() {
    console.log( "write buffer is empty now .. u can resume the writable stream" );
    socket.resume();
  });

  socket.on("error", function(error) {
    console.log("Error : " + error);
  });

  socket.on("timeout", function() {
    console.log("Socket timed out !");
    socket.end("Timed out!");
  });

  socket.on("end", function(data) {
    console.log("Socket ended from other end!");
  });

  socket.on("close", function(error) {
    console.log("Socket closed!");
    if (error) {
      console.log("Socket was closed coz of transmission error");
    }
  });
});

server.on("error", function(error) {
  console.log("Error: " + error);
});

server.on("listening", function() {
  console.log("Server is listening!");
});

server.maxConnections = 5000;

server.listen(port);
var islistening = server.listening;

if (islistening) {
  console.log("Server is listening");
} else {
  console.log("Server is not listening");
}

function LastCommandTime(commandValue, commandScheduledRunTime) {
  this.command = commandValue;
  this.commandScheduledRunTime = commandScheduledRunTime;
}

subscriber.on("message", (channel, message) => {
  console.log("MESSAGE RECIEVED IN QUEUE " + channel);
  var msgObj = JSON.parse(message);
  delayTime = DELAY_TIME;
  if (connectedClients[msgObj.macAddress]) {
    let currentTimeStamp = new Date().getTime();
    console.log("Received Command: " + JSON.stringify(msgObj));

    let macAddress = msgObj.macAddress;
    let commandValue = msgObj;
    let deviceLastExecutionObj = _deviceLastCommandArray[macAddress];
    let lastCommand = null;

    if (
      deviceLastExecutionObj == null ||
      typeof deviceLastExecutionObj === "undefined"
    ) {
      _deviceLastCommandArray.push(macAddress);
      lastCommand = new LastCommandTime(commandValue, currentTimeStamp);
      _deviceLastCommandArray[macAddress] = setNextTaskSchedule(lastCommand);
    } else {
      lastCommand = _deviceLastCommandArray[macAddress];
      lastCommand.command = commandValue;
      lastCommand = setNextTaskSchedule(lastCommand);
      _deviceLastCommandArray[macAddress] = lastCommand;
    }
    console.log(commandValue, delayTime, lastCommand.commandScheduledRunTime);
    setTimeout(sendCommandToDevice, delayTime, msgObj);
  } else {
    console.log("Socket Closed... Cannot Send Request to Device");
  }
});

function setNextTaskSchedule(lastCommandTime) {
  let currentTimeStamp = new Date().getTime();
  let commandVal = "";
  commandVal = lastCommandTime.command;
  if (lastCommandTime) {
    commandVal = lastCommandTime.command;
    let schTime = lastCommandTime.commandScheduledRunTime;

    nextCommandTimeDiff = schTime - currentTimeStamp;
    if (nextCommandTimeDiff > 0) {
      delayTime = nextCommandTimeDiff + DELAY_TIME + SAFETY;
      schTime = currentTimeStamp + delayTime;
    } else {
      schTime = currentTimeStamp + DELAY_TIME;
    }

    commandTime = new LastCommandTime(commandVal, schTime);
  } else {
    schTime = currentTimeStamp + DELAY_TIME;

    commandTime = new LastCommandTime(commandVal, schTime);
  }
  return commandTime;
}

function sendCommandToDevice(msgObj) {
  genRequest.requestToDevice(
    msgObj.switchNo,
    msgObj.status,
    connectedClients[msgObj.macAddress]
  );
  pushNotification.notifyAppChange(msgObj);
}

function getMacAddress(socket) {
  var keys = Object.keys(connectedClients);
  var socketMacAddress = "";
  keys.forEach(element => {
    if (connectedClients[element] === socket) {
      socketMacAddress = element;
    }
  });
  return socketMacAddress;
}

function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}
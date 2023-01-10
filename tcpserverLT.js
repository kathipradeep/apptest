var net = require("net");
const dotenv = require("dotenv");
dotenv.config();
var parseRequest = require("./helpers/parseRequest");
var genReponse = require("./helpers/genResponse");
var COMMAND = require("./helpers/commands");
const v8 = require('v8');
const log4js = require('log4js');

log4js.configure({
  appenders: { tcpServer: { type: 'file', filename: 'logs/tcpServer.log' } },
  categories: { default: { appenders: ['tcpServer'], level: 'info' } }
});
 
const logger = log4js.getLogger('tcpServer');

var connectedClients = Object.create(null);
var port = process.env.TCP_PORT || 3001;
logger.info("Port:" + port);
var server = net.createServer();

server.on("close", function() {
  logger.info("Server closed !");
});

server.on("connection", function(socket) {
  server.getConnections(function(error, count) {
    logger.info("Number of concurrent connections to the server : " + count);
  });

  socket.setEncoding("hex");

  socket.on("data", function(data) {
    memoryUsed();
    logger.info("Incoming Request : " + data);
    var parsedData = parseRequest.parse(data);
    logger.info("Parsed Data : " + JSON.stringify(parsedData));
    if (parsedData) {
      var parsedCommand = parsedData.command;

      if (parsedCommand === COMMAND.INITIAL_CONNECT) {
        var switchInfo = {};
        logger.info("Added new client to array");
        connectedClients[parsedData.macAddress] = socket;
        var response = genReponse.genResponse();
        socket.write(response);
      }

      if (parsedCommand === COMMAND.CONNECT_WITH_DEVICE_INFO) {
        if (socket) {
          var response = genReponse.genResponse();
          socket.write(response);
        } else {
          logger.info("Socket Closed");
        }
      }

      if (parsedCommand === COMMAND.KEEP_ALIVE) {
        if (socket) {
          var response = genReponse.genResponse();
          socket.write(response);
        } else {
          logger.info("Socket Closed");
        }
      }

      if (parsedCommand === COMMAND.DEVICE_STATUS_UPDATE) {
      }
    } else {
      logger.info("Invalid Command");
    }
  });

  socket.on("drain", function() {
    logger.info(
      "write buffer is empty now .. u can resume the writable stream"
    );
    socket.resume();
  });

  socket.on("error", function(error) {
    logger.info("Error : " + error);
  });

  socket.on("timeout", function() {
    logger.info("Socket timed out !");
    socket.end("Timed out!");
  });

  socket.on("end", function(data) {
    logger.info("Socket ended from other end!");
  });

  socket.on("close", function(error) {
    logger.info("Socket closed!");
    if (error) {
      logger.info("Socket was closed coz of transmission error");
    }
  });
});

server.on("error", function(error) {
  logger.info("Error: " + error);
});

server.on("listening", function() {
  logger.info("Server is listening!");
});

server.maxConnections = 5000;

server.listen(port);

var islistening = server.listening;

if (islistening) {
  logger.info("Server is listening");
} else {
  logger.info("Server is not listening");
}

function memoryUsed(){
	const totalHeapSize = v8.getHeapStatistics().total_available_size;
	let totalHeapSizaInMB = (totalHeapSize / 1024 / 1024).toFixed(2)
	logger.info("V8 Total Heap Size", totalHeapSizaInMB, "MB");
}
const net = require("net");

const dotenv = require("dotenv");
dotenv.config();
const binaryTest = require("./binaryTest");
var logger = require("./logger");

console.log("NodeEnv: " + process.env.NODE_ENV);
console.log("HOST: " + process.env.HOST);
console.log("POR: " + process.env.PORT);

var tcpHost = process.env.HOST;
console.log("tcpHost: " + tcpHost);

if (!tcpHost) {
  console.log("Invalid tcp server host information: Host:" + tcpHost);
  return;
}
var tcpPort = process.env.PORT;
var tcpHost = process.env.HOST;

console.log("tcpPort: " + tcpPort);

if (!tcpPort) {
  console.log("Invalid tcp server port information:" + tcpPort);
  return;
}
var callNum = 0;

for (let i = 1; i <= 1500; i++) {
  setTimeout(function() {
    const clients = net.connect({ host: tcpHost,port: tcpPort }, () => {
      // 'connect' listener
      try {
        var macAddress = binaryTest.getMACAddress(i);
        console.log("Connected to server!  : " + macAddress);
        initialConnect(clients, macAddress);
        callNum++;
      } catch (ex) {
        console.log(ex);
      }
    });
    clients.on("data", data => {
      console.log("Data from server" + data.toString());
      //clients.end();
    });
    clients.on("end", () => {
      console.log("disconnected from server");
    });
    clients.on("error", function(error) {
      console.log("Error : " + error);
    });
  }, 10000);
}

function initialConnect(client, macAddress) {
  logger.error("Sending Initial Connect Message For : " + macAddress);
  const hexString = "1d00010000";
  const data = Buffer.from(hexString, "hex");
  client.write(data + "mac" + macAddress + "modelnoH4");
  return;
}

const net = require("net");
const dotenv = require("dotenv");
dotenv.config();
var deviceData = require("./binaryTest");
const config = require('./config/config');
const binaryTest = require("./binaryTest");
var logger = require('./logger');

var connectedClients = Object.create(null);

var tcpHost = process.env.HOST;

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
var macAddressArray = [];

for (let i = 1; i <= config.NOSOFDEVICES; i++) {
var z = i%100;
var macAddress =binaryTest.getMACAddress(i);
macAddressArray.push(macAddress);
if(z%100 == 0) 
  {
    processCommands(macAddressArray);
    setTimeout(() => { 
      
    }, 10000);
    macAddressArray = [];
    
  } 
}


function processCommands(macAddressArray) 
{
  setTimeout(() => { 
    macAddressArray.forEach(macAddress => {
      connectAndSendCommand(macAddress);
    });
    
  }, 5000)
  
}

function connectAndSendCommand(macAddress)
{
  console.log(macAddress);
  const client = net.connect({ host: tcpHost, port: tcpPort }, () => {
    try {
      //console.log("connected to server!");
      sendCommands(client, macAddress);
      connectedClients[macAddress] = client;
      //manualDeviceOperation(client);
      callNum++;
    } catch (ex) {
      console.log(ex);
    }
    
  });

  client.on("data", data => {
    //console.log("Got Response");
    //console.log("Data from server" + data.toString());
    //client.end();
  });

  client.on("end", () => {
    console.log("disconnected from server");
  });
}

function initialConnect(client, macAddress) {
  //console.log("Sending Initial Connect Message For : "+ macAddress);
  logger.error("Sending Initial Connect Message For : "+ macAddress);
  const hexString = "1d00010000";
  const data = Buffer.from(hexString, "hex");
  client.write(data + "mac" + macAddress + "modelnoH4");
  return 1;
}

function postInitialConnect(client) {
  //console.log("Sending Post Initial Connect Message For : "+ getMacAddress(client));
  //logger.error("Sending Post Initial Connect Message For : "+ getMacAddress(client));
  const hexString1 = "1100020000";
  const data1 = Buffer.from(hexString1, "hex");
  const data2 = Buffer.from("00", "hex");
  client.write(
    data1 + 
    "ver" + data2 + "0.6.1" + data2 + 
    "h-beat" + data2 + "10" + data2 + 
    "buff-in" + data2 + "1024" + data2 + 
    "dev" + data2 + "heleo" + data2 + 
    "build" + data2 + "Jan 25 2020 10:37:24" + data2
  );
  return;
}

function keepAliveOperation(client) {
  console.log("Sending Keep Alive Message For : "+ getMacAddress(client));
  logger.error("Sending Keep Alive Message For : "+ getMacAddress(client));
  const hexString2 = "06000200";
  const data3 = Buffer.from(hexString2, "hex");
  const data4 = Buffer.from("00", "hex");
  //const digit = deviceData.getDeviceData();
  const digit = 895;
  client.write(data3 + "vs" + data4 + "a" + data4 + digit);
  return;
}

async function sendCommands(client, macAddress) {
  let isInitialConnect = await initialConnect(client, macAddress);
   if (isInitialConnect) {
    setTimeout(() => {
      postInitialConnect(client);
     /*  setTimeout(() => {
         setInterval(() => {
          keepAliveOperation(client);
        }, 5000); 
      }, 1000);  */
    }, 1000);
  } 
}


function getMacAddress(socket) 
{
  var keys = Object.keys(connectedClients);
      var socketMacAddress = "";
       keys.forEach(element => {
        if(connectedClients[element] === socket) 
        {
          socketMacAddress = element;
        } 
      });
      return socketMacAddress;
}

/* function manualDeviceOperation(client) {
  const hexString = "1400770006";
  const data = Buffer.from(hexString, "hex");
  const data1 = Buffer.from("00", "hex");
  //console.log(data);
  client.write(data + "vs" + data1 + "1" + data1 + "1");
  return;
} */
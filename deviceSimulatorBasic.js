const net = require('net');

const dotenv = require('dotenv');
dotenv.config();
const binaryTest = require("./binaryTest");
const log4js = require('log4js');

log4js.configure({
  appenders: { deviceSimulator: { type: 'file', filename: 'logs/deviceSimulator.log' } },
  categories: { default: { appenders: ['deviceSimulator'], level: 'info' } }
});
 
const logger = log4js.getLogger('deviceSimulator');

logger.info("NodeEnv: " + process.env.NODE_ENV);
logger.info("HOST: " + process.env.HOST);
logger.info("POR: " + process.env.PORT);

var tcpHost = process.env.HOST;
logger.info("tcpHost: " + tcpHost);

if(!tcpHost){
  logger.info('Invalid tcp server host information: Host:' + tcpHost );
  return;
}
var tcpPort = process.env.PORT;
var tcpHost = process.env.HOST;

logger.info("tcpPort: " + tcpPort);

if(!tcpPort){
  logger.info('Invalid tcp server port information:' + tcpPort );
  return;
}
var callNum  = 1;
var batch = 0;

for(let i=1; i <= 2000; i++){
	  if(i % 10 == 0 )
	  {
		 batch ++;
	  }	
	  setTimeout(function(){ 
		const clients = net.connect({host: tcpHost,port: tcpPort}, () => {
			try{	
				var macAddress = binaryTest.getMACAddress(i);
				logger.info("Connected to server!  : " + macAddress);
				sendCommands(clients, macAddress);
				callNum++;
			}catch(ex){
				logger.info(ex);
			}
		  });
		  clients.on('data', (data) => {
		  });
		  clients.on('end', () => {
			logger.info('disconnected from server');
		  });
		  clients.on('error', (error) => {
			logger.info("Error Occured : " + JSON.stringify(error));
		  });	

	   }, batch * 5000);
}

  async function sendCommands(client, macAddress) {
	var msgId = 1;  
	let isInitialConnect = await initialConnect(client, macAddress);
	 if (isInitialConnect) {
	  setTimeout(() => {
		postInitialConnect(client, macAddress);
	     setTimeout(() => {
		   setInterval(() => {
			keepAliveOperation(client, macAddress, msgId);
			msgId++;
		  }, 5000); 
		}, 1000);  
	  }, 1000);
	} 
  }

  function initialConnect(client, macAddress) {
	logger.info("Sending Initial Connect Message For : " + macAddress);
	const hexString = "1d00010000";
	const data = Buffer.from(hexString, "hex");
	client.write(data + "mac" + macAddress + "modelnoH4");
	return 1;
  }

  function postInitialConnect(client, macAddress) {
	logger.info("Sending Post Initial Connect Message For : "+ macAddress);
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

  function keepAliveOperation(client, macAddress, msgId) {

	const generatedMsGID = binaryTest.getMsgId(msgId);
	const hexString2 = "06" + generatedMsGID + "0008";
	//const hexString2 = "06" + "0079" + "0008";
	//console.log(hexString2);
	logger.info("Sending Keep Alive Message For : "+ macAddress + " : " + hexString2 + " : " + msgId);
	const data3 = Buffer.from(hexString2, "hex");
	const data4 = Buffer.from("00", "hex");
	const digit = binaryTest.getDeviceData();
	//const digit = 895;
	client.write(data3 + "vs" + data4 + "a" + data4 + digit);
	return;
  }
var randomBinary = require("random-binary");

var getDeviceData = () => { 

  var prefix;
  var randomNumber1;
  var randomNum = randomNumber(7, 10);
  while(randomNum === 8) 
  {
    randomNum = randomNumber(7, 10);
  }

  if (randomNum > 7 && randomNum == 10) {
    randomNumber1 = randomNumber(1, 2);
    if (randomNumber1 === 1) {
      prefix = 110;
    }
    if (randomNumber1 === 2) {
      prefix = 100;
    }
  }

  if (randomNum > 7 && randomNum == 9) {
      prefix = 10;
 
  }

  var binaryNos = randomBinary({ bit: 7 });
  if (prefix) {
    binaryNos = prefix + binaryNos;
  } 
 
  var digit = parseInt(+binaryNos, 2);
  return digit;  
};

var getMACAddress = (i) => {
  var baseMacAddress = "84:F3:EB:D2:";
  let macAddress = baseMacAddress;
  if (i < 10) {
    macAddress = macAddress + "00:0" + i;
  }
  if (i >= 10 && i <= 99) {
    macAddress = macAddress + "00:" + i;
  }
  if (i >= 100 && i <= 999) {
    var iStr = i.toString();
    macAddress =
      macAddress + "0" + iStr.substr(0, 1) + ":" + iStr.substr(1, 2);
  }

  if (i >= 1000 && i <= 9999) {
    var iStr = i.toString();
    macAddress = macAddress + iStr.substr(0, 2) + ":" + iStr.substr(2, 2);
  }
  return macAddress;
}

var getMsgId = (i) => {
  let msgId = 0;
  var hexNum = i.toString(16);
  if (hexNum.length === 1) {
    msgId =  "000" + hexNum;
  }
  if (hexNum.length === 2) {
    msgId =  "00" + hexNum;
  }
  if (hexNum.length === 3) {
    msgId =  "0" + hexNum;
  }
  if (hexNum.length === 3) {
    msgId =  hexNum;
  }
  return msgId;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

  module.exports = {
    getDeviceData,
    getMACAddress,
    getMsgId
  }
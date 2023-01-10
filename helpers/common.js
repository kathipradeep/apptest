const bcrypt = require("bcryptjs");
var scheduleModel = require("./scheduleModel");
const randomInt = require('random-int');
var models = require("../db/models/index");

var isValidRequest = (reqModel, model) => {
    var aKeys = Object.keys(reqModel).sort();
    var bKeys = Object.keys(model).sort();
    let reqKeys = JSON.stringify(aKeys);
    let modelKeys = JSON.stringify(bKeys);
  
    if (reqKeys === modelKeys) {
      for (prop in reqModel) {
        if (reqModel[prop] === "") {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

var encryptPassword = password => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(password, salt, (err, encryptedPassword) => {
      if (err) throw err;
      return encryptedPassword;
    });
  });
};

var getTimerInfoObject = (relayInfo, timerInfo) => {

  timerInfoObject = {};
  // Schedule Data
  timerInfoObject.timerId = timerInfo.timerId;
  timerInfoObject.startDate = timerInfo.timerStartDate;
  timerInfoObject.startTime = timerInfo.timerStartTime;
  timerInfoObject.status = timerInfo.updatedStatus;
  //Device and Relay Data
  timerInfoObject.deviceMACAddress = relayInfo.h_device.dataValues.macAddress;
  timerInfoObject.switchNo = relayInfo.switchNo;

  //console.log(timerInfoObject);
  return timerInfoObject;
};

var getDelay = (timerInfo) => {
  var milliSecondsDifference =0;
  var newDate= new Date(timerInfo.startDate);
  //let dateStr = timerInfo.startDate;
  let timeStr = timerInfo.startTime.toString().split(':');
  //dateStr = dateStr + timeStr[0] + ':' + timeStr[1];
  newDate.setHours(timeStr[0]);
  newDate.setMinutes(timeStr[1]);
  newDate.setSeconds(0);
  var currentDate = new Date();
  //console.log(timerInfo.startDate, timerInfo.startTime);

  /* console.log(
    "Timer Date : \t",newDate,"\t Current Date : \t", currentDate,"\n",  
    "Timer Year : \t",newDate.getFullYear(),"\t Current Date Year: \t", currentDate.getFullYear(),"\n",  
    "Timer Date : \t",newDate.getDate(),"\t Current Date : \t", currentDate.getDate(),"\n",  
    "Timer Day : \t",newDate.getDay(),"\t Current Date Day: \t", currentDate.getDay(),"\n",  
    "Timer Date Month : \t",newDate.getMonth(),"\t Current Date  Month: \t", currentDate.getMonth(),"\n",  
    "Timer Date Hours : \t",newDate.getHours(),"\t Current Date Hours : \t", currentDate.getHours(),"\n",  
    "Timer Date Minutes : \t",newDate.getMinutes(),"\t Current Date Minutes : \t", currentDate.getMinutes(),"\n",  
    "Timer Date Seconds : \t",newDate.getSeconds(),"\t Current Date Seconds : \t", currentDate.getSeconds(),"\n",  
    "Timer Date Milliseconds : \t",newDate.getMilliseconds(),"\t Current Date Milliseconds : \t", currentDate.getMilliseconds(),"\n",  
    "Timer Date TimeZone Offset: \t",newDate.getTimezoneOffset(),"\t Current Date TimeZone Offset : \t", currentDate.getTimezoneOffset(),"\n",   
    "Timer Date Now : \t",newDate.getTime(),"\t Current Date Now : \t", currentDate.getTime(),"\n",         
  ) */
  milliSecondsDifference = newDate.getTime() - currentDate.getTime()
  console.log("Difference in Milli Seconds : " + milliSecondsDifference);
  //console.log(timeStr, newDate, currentDate);


  //console.log(timerInfoObject);
  return milliSecondsDifference;
};

var getScheduleInfoObject = (relayInfo, scheduleInfo) => {

  scheduleObject = scheduleModel;
  // Schedule Data
  scheduleObject.scheduleId = scheduleInfo.scheduleId;
  scheduleObject.scheduleId = scheduleInfo.scheduleId;
  scheduleObject.startDate = scheduleInfo.startDate;
  scheduleObject.startTime = scheduleInfo.startTime;
  scheduleObject.startStatus = scheduleInfo.startStatus;
  scheduleObject.endDate = scheduleInfo.endDate;
  scheduleObject.endTime = scheduleInfo.endTime;
  scheduleObject.endStatus = scheduleInfo.endStatus;
  scheduleObject.frequency = scheduleInfo.frequency;
  scheduleObject.interval = scheduleInfo.interval;
  scheduleObject.days = scheduleInfo.days;
  //Device and Relay Data
  scheduleObject.deviceMACAddress = relayInfo.h_device.dataValues.macAddress;
  scheduleObject.switchNo = relayInfo.switchNo;

  //console.log(scheduleObject);
  return scheduleObject;
};

var getCRONExpressions = (scheduleObject) => {

  var expression= [];
  var frequency = scheduleObject.frequency;
  var interval = scheduleObject.interval.substr(0,1);
  var days = scheduleObject.days;

  var time = scheduleObject.startTime.split(':');
  var hour = time[0];
  var minute = time[1];
  expression[0] = genCRONExpression(minute,hour, frequency, interval, days);
  
  time = scheduleObject.endTime.split(':');
  hour = time[0];
  minute = time[1];
  expression[1] = genCRONExpression(minute,hour, frequency, interval, days);
 
  return expression;
};

var genCRONExpression = (minute,hour,frequency, interval, days) => {

  var cronModel = {}
  var cronExpression = "";
  var SPACE = ' ';

/*
*    *    *    *    *    *
-    -    -    -    -    -
¦    ¦    ¦    ¦    ¦    |
¦    ¦    ¦    ¦    ¦    + day of week (0 - 7) (0 or 7 is Sun)
¦    ¦    ¦    ¦    +----- month (1 - 12)
¦    ¦    ¦    +---------- day of month (1 - 31)
¦    ¦    +--------------- hour (0 - 23)
¦    +-------------------- minute (0 - 59)
+------------------------- second (0 - 59, optional)
*/

  if(frequency === 'DAILY')
  {
    if(scheduleObject.interval === 'EW')
    {
      //cronModel.second = 0;
      cronModel.minute = minute;
      cronModel.hour = hour;
      cronModel.dom = "*";
      cronModel.month = "*";
      cronModel.dow = "MON-FRI";
      //cronModel .year = "*"
    }
    else
    {
      //cronModel.second = 0;
      cronModel.minute = minute;
      cronModel.hour = hour;
      cronModel.dom = "*/" + interval;
      cronModel.month = "*";
      cronModel.dow = "*";
      //cronModel.year = "*"
    }
  }
  if(frequency === 'WEEKLY')
  {
      //cronModel.second = 0;
      cronModel.minute = minute;
      cronModel.hour = hour;
      cronModel.dom = "*";
      cronModel.month = "*";
      cronModel.dow = days;
      //cronModel .year = "*"
  }
  
  for(prop in cronModel){
   cronExpression = cronExpression + cronModel[prop] + SPACE;
 }
 
 //console.log(cronExpression);
 return cronExpression.trim();
};

var removeOldCodes = async (emailId, usedFor) => {
  models.h_code.destroy({ where: { emailId: emailId, usedFor: usedFor } })
  .then( rowsAffected => { console.log("Deleted Old Codes : " + rowsAffected); })
  .catch(error => { console.log("Error Deleting Old Codes : " + error); }); 
  return;
};

var generateRandomCode = () => {
  console.log("Came in here");
  var generatedCode= randomInt(100000,999999);
  console.log(generatedCode);
  return generatedCode;
};

module.exports = {
  isValidRequest,
  encryptPassword,
  getScheduleInfoObject,
  getCRONExpressions,
  genCRONExpression,
  getTimerInfoObject,
  getDelay,
  removeOldCodes,
  generateRandomCode
};

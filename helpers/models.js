
fcmModel={
  "fcmKey":""
},
relaystatusModel={
  "relayId":"",
  "switchStatus":""
},
deviceModel = {
  "deviceName": ""
},
addDeviceModel ={
  "macAddress":""
},
  locationModel = {
    "locationName": ""
  },
  updateLocationModel = {
    "deviceId": "",
    "locationId": ""
  },
  updateLocation={
    "locationId":"",
    "locationName": ""
  },
  userModel = {
    "emailId": "",
    "usedFor":""
  },
  forgetPswdModel = {
    "emailId": "",
    "reset_key": ""
  },
  newPswdModel = {
    "emailId": "",
    "new_pswd": "",
    "generatedCode": ""
  },
  userRegisterModel={
    "emailId":"",
    "password":"",
    "name":"",
    "mobileNumber":"",
    "state":"",
    "city": "",
    "street": ""
   },
   validateCodeModel = {
    "emailId": "",
    "generatedCode": "",
    "usedFor": ""
  },
  signInModel = {
    "emailId": "",
    "password": ""
  },
  confirm_Code = {
    "emailId": "",
    "generatedCode": ""
  },
  relayModel = {
    "switchName": ""
  },
  timerModel = {
    "relayId": "",
    "timerStartDate": "",
    "timerStartTime": "",
    "updatedStatus": ""
  },
  updatetimerModel = {
    "timerId": "",
    "timerStartDate": "",
    "timerStartTime": "",
    "updatedStatus": ""
  },
  refreshTokenModel={
    "token":""
  },
    updateOrderModel = {
        "deviceId": "",
        "newDisplayOrder": ""
  },

  scheduleModel = {
    "startDate": "",
    "startTime": "",
    "startStatus": "",
    "endDate": "",
    "endTime": "",
    "endStatus": "",
    "frequency": "",
    "interval": "",
    "days": "",
    "relayId": "",

  },
  updatedscheduleModel = {
    "scheduleId": "",
    "startDate": "",
    "startTime": "",
    "startStatus": "",
    "endDate": "",
    "endTime": "",
    "endStatus": "",
    "frequency": "",
    "interval": "",
    "days": "",
  }

module.exports = {
  deviceModel,
  locationModel,
  updateLocation,
  userModel,
  forgetPswdModel,
  newPswdModel,
  userRegisterModel,
  validateCodeModel,
  signInModel,
  confirm_Code,
  relayModel,
  addDeviceModel,
  relaystatusModel,
  timerModel,
  scheduleModel,
  updatedscheduleModel,
  updatetimerModel,
  updateLocationModel,
  updateOrderModel,
  refreshTokenModel,
  fcmModel

}
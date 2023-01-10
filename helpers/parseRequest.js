var COMMAND = require("./commands");
module.exports = {
    parse(data) {
      
    var command = data.substr(0,2);
    var messageId,bodyLength, body, messageBodyLength;
    var requestObject = {};  

    if(command === COMMAND.INITIAL_CONNECT)
    {
      messageId = data.substr(2,4);
      bodyLength = data.substr(6,2);
      body= data.substr(10, data.length -1 );
      messageBodyLength = (data.length) - 10;
      body = this.hexToString(messageBodyLength / 2, body);
      var macAddress = body.substr(3,17); 
      var modelNo = body.substr(27,2); 

      requestObject = {
        command : command,
        messageId: messageId,
        bodyLength: bodyLength,
        messageBody: body,
        macAddress:  macAddress,
        modelNo: modelNo 
      }
        return requestObject;
      
    }

    if(command === COMMAND.CONNECT_WITH_DEVICE_INFO)
    {
      messageId = data.substr(2,4);
      bodyLength = data.substr(6,2);
      body= data.substr(10, data.length -1 );
      messageBodyLength = (data.length) - 10;
      body = this.hexToString(messageBodyLength / 2, body);

      requestObject = {
        command : command,
        messageId: messageId,
        bodyLength: bodyLength,
        messageBody: body
      }
        return requestObject;
      
    }

    if(command === COMMAND.KEEP_ALIVE)
    {
      messageId = data.substr(2,4);
      bodyLength = data.substr(6,4);
      body= data.substr(10, data.length -1 );
      messageBodyLength = (data.length) - 10;

      statusIdentifier = body.substr(0,4);
      statusType = body.substr(6,2);
      status = body.substr(10,body.length);
      status  = this.hexToString(status.length / 2,status);
      var numStatus = +status;
      binaryNumber = numStatus.toString(2);
      console.log(binaryNumber);
      bnLength = binaryNumber.length;
      var switchInfo = {};

       if(bnLength === 10)
      {
        extractedValue = binaryNumber.substr(0,3);
        if(extractedValue === '110')
        {
        switchInfo['8'] = 2;
        }
        else if( extractedValue === '100')
        {
          switchInfo['8'] = 1;
        }
      } 
      
      if(bnLength === 9)
      {
        switchInfo['8'] = 0;
      }  

      if(bnLength <= 7)
      {
        switchInfo['8'] = 0;
      }
      
        for(i = 1 ; i <= 7 ; i++) 
        {
          if(binaryNumber[bnLength -i])
          {
            switchInfo[i] = +binaryNumber[bnLength -i];
          }
          else
          {
          switchInfo[i] = 0;
          }

        }
      //console.log(switchInfo);
      body = this.hexToString(messageBodyLength / 2, body);

      requestObject = {
        command : command,
        messageId: messageId,
        bodyLength: bodyLength,
        messageBody: body,
        switchInfo: switchInfo
      }
        return requestObject;
     
    }

    if(command === COMMAND.SERVER_STATUS_UPDATE)
    {
      messageId = data.substr(2,4);
      bodyLength = data.substr(6,4);
      body= data.substr(10, data.length -1 );
      messageBodyLength = (data.length) - 10;

      statusIdentifier = body.substr(0,4);
      switchNo = body.substr(6,2);
      switchNo = this.hexToString(switchNo.length / 2,switchNo);
      switchStatus = body.substr(10,2);
      switchStatus  = this.hexToString(switchStatus.length / 2,switchStatus);

      body = this.hexToString(messageBodyLength / 2, body);

      requestObject = {
        command : command,
        messageId: messageId,
        switchNo: switchNo,
        switchStatus: switchStatus,
        messageBody: body
      }
        return requestObject;

    }

    },

     hexToString(length, message)
    {
      const buf = new Buffer.alloc(length , message, 'hex');
      return buf.toString('utf8');
    }  

  };
  
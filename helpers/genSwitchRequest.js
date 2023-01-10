module.exports = {
  requestToDevice(sNo, sStatus, socket) {

     var prefix = "1400020006";
    const buf = new Buffer.alloc(prefix.length / 2, prefix, "hex");
    socket.write(buf); 
   

    //this.writeHexData("1400020006", socket);
   //console.log("HERE");


    var command = "vw";
    var data = new Uint8Array(command.length);
    for (var i = 0; i < data.length; i++) {
      data[i] = command.charCodeAt(i);
    }

    const buf1 = new Buffer.alloc(data.length, data);
    socket.write(buf1);

    //this.writeAsciiData("vw", socket);

    var prefix1 = "00";
    const buf2 = new Buffer.alloc(prefix1.length / 2, prefix1, "hex");
    socket.write(buf2);

   // this.writeHexData("00", socket);

    //For Switch No
    //var switchNo = "3";
    var switchNo = sNo +'';
    var data1 = new Uint8Array(switchNo.length);
    for (var i = 0; i < data1.length; i++) {
      data1[i] = switchNo.charCodeAt(i);
    }

    const buf3 = new Buffer.alloc(data1.length, data1);
    socket.write(buf3);

   // this.writeAsciiData(switchNo, socket)

    var prefix1 = "00";
    const buf4 = new Buffer.alloc(prefix1.length / 2, prefix1, "hex");
    socket.write(buf4);

    //this.writeHexData("00", socket);

    //For Switch Status
    //var switchStatus = "0";
    var switchStatus = sStatus+'';
    var data2 = new Uint8Array(switchStatus.length);
    for (var i = 0; i < data2.length; i++) {
      data2[i] = switchStatus.charCodeAt(i);
    }

    const buf5 = new Buffer.alloc(data2.length, data2);
    socket.write(buf5);

    //this.writeAsciiData(switchStatus, socket);
    return true;
  },
  writeHexData(data, socket) 
  {
    console.log("came in writeHexData");
    var strData = data + '';
    let buf = new Buffer.alloc(strData / 2, strData, "hex");
    socket.write(buf);
    console.log("end of writeHexData");
  },
  writeAsciiData(asciiData, socket) 
  {
    var newAsciiData = asciiData + '';
    var data = new Uint8Array(asciiData.length);
    for (var i = 0; i < data.length; i++) {
      data[i] = asciiData.charCodeAt(i);
    }

    let buf = new Buffer.alloc(data.length, data);
    socket.write(buf);
  }
};

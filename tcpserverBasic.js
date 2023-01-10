var net = require('net');
const dotenv = require('dotenv');
dotenv.config();
var bodyParser=require('body-parser');
const tcpServer=net.createServer(); 

console.log("Node Environment: " + process.env.NODE_ENV)
console.log("Config Port: " + process.env.TCP_PORT)
var port = process.env.TCP_PORT || 3002;
console.log("Port:" + port )

var server = net.createServer();

server.on('close', function(){
  console.log('Server closed !');
})

server.on('connection',function(socket){
    console.log('Buffer size : ' + socket.bufferSize);
    console.log('---------server details -----------------');
    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    var lport = socket.localPort;
    var laddr = socket.localAddress;
    console.log('Server is listening at LOCAL port' + lport);
    console.log('Server LOCAL ip :' + laddr);
    console.log('------------remote client info --------------');
    var rport = socket.remotePort;
    var raddr = socket.remoteAddress;
    var rfamily = socket.remoteFamily;
    console.log('--------------------------------------------')
  server.getConnections(function(error,count){
    console.log('Number of concurrent connections to the server : ' + count);
  });
  
  socket.setEncoding('utf8');
  
  socket.setTimeout(800000,function(){
    console.log('Socket timed out');
  });
  
  socket.on('data',function(data){
    var bread = socket.bytesRead;
    var bwrite = socket.bytesWritten;
    console.log('Bytes read : ' + bread);
    console.log('Bytes written : ' + bwrite);
    console.log('Data sent to server : ' + data);
  
    //echo data
    var is_kernel_buffer_full = socket.write('Data ::' + data);
    if(is_kernel_buffer_full){
      console.log('Data was flushed successfully from kernel buffer i.e written successfully!');
    }else{
      socket.pause();
    }
  
  });
  socket.on('drain',function(){
    console.log('write buffer is empty now .. u can resume the writable stream');
    socket.resume();
  });
  
  socket.on('error',function(error){
    console.log('Error : ' + error);
  });
  
  socket.on('timeout',function(){
    console.log('Socket timed out !');
    socket.end('Timed out!');
    // can call socket.destroy() here too.
  });
  
  socket.on('end',function(data){
    console.log('Socket ended from other end!');
    console.log('End data : ' + data);
  });
  
  socket.on('close',function(error){
    var bread = socket.bytesRead;
    var bwrite = socket.bytesWritten;
    console.log('Bytes read : ' + bread);
    console.log('Bytes written : ' + bwrite);
    console.log('Socket closed!');
    if(error){
      console.log('Socket was closed coz of transmission error');
    }
  });
  
  setTimeout(function(){
    var isdestroyed = socket.destroyed;
    console.log('Socket destroyed:' + isdestroyed);
    socket.destroy();
  },1200000);
  
  });

  // emits when any error occurs -> calls closed event immediately after this.
server.on('error',function(error){
  console.log('Error: ' + error);
});

//emits when server is bound with server.listen
server.on('listening',function(){
  console.log('Server is listening!');
});

server.maxConnections = 5000;

//static port allocation
server.listen(port);

var islistening = server.listening;

if(islistening){
  console.log('Server is listening');
}else{
  console.log('Server is not listening');
}

setTimeout(function(){
  server.close();
},5000000);

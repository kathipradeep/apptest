var bull = require("bull");
const config = require("../config/config");
const redisClient = require("./redisClient");

var scheduleQueue = new bull(config.SCHEDULER_QUEUE, {
  redis: {
    port: config.REDIS_PORT,
    host: config.REDIS_HOST,
    password: config.REDIS_KEY,
	tls: { servername: config.REDIS_HOST }
  }
});

var timerQueue = new bull(config.TIMER_QUEUE, {
  redis: {
    port: config.REDIS_PORT,
    host: config.REDIS_HOST,
    password: config.REDIS_KEY,
	tls: { servername: config.REDIS_HOST }
  }
});

exports.getScheduleQueue = () => {
  return scheduleQueue;
};

exports.getTimerQueue = () => {
  return timerQueue;
};

scheduleQueue.on('error', (err) => { 
  console.log('Error in Schedule Queue : ' + err);
});

timerQueue.on('error', (err) => {
  console.log('Error from Timer Queue : ' + err);
});

scheduleQueue.process((job,done) => {
  data = job.data;  
  console.log(" ****************  Process Schedule Queue ************* : " + JSON.stringify(job));
  var switchStatus;

    var id1 = data.scheduleId + "_1";
    var id2 = data.scheduleId + "_2";
    var id = job.opts.repeat.jobId;
    //console.log(id1, id2,job.id,job.opts.repeat.jobId);
     if(id == id1)
     {
      if(data.startStatus) {
        switchStatus = 1;
      } 
      else
      {
        switchStatus = 0;
      }
     
     }
     if(id == id2)
     {
        if(data.endStatus) {
          switchStatus = 1;
        } 
        else
        {
          switchStatus = 0;
        }
     }

     let message = {
      macAddress :data.deviceMACAddress,
      switchNo : data.switchNo,
      status: switchStatus
      }

    console.log("Publishing Scheduler Data as : " + JSON.stringify(message));
    redisClient.getClientInstance().publish(config.SUBSCRIPTION_QUEUE,JSON.stringify(message));
    done();
});

timerQueue.process((job,done) => {
  data = job.data;  
  console.log(" ****************  Process Timer Queue ************* : " + JSON.stringify(job));
  var switchStatus;
  if(data.status)
  {
    switchStatus = 1;  
  }
  else
  {
    switchStatus = 0;
  } 

  let message = {
    macAddress :data.deviceMACAddress,
    switchNo : data.switchNo,
    status: switchStatus
    }

    console.log("Publishing Timer Data as : " + JSON.stringify(message));
    redisClient.getClientInstance().publish(config.SUBSCRIPTION_QUEUE,JSON.stringify(message));
    done();
});

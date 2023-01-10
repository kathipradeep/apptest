var bull = require("bull");
const config = require("./config/config");
var scheduleQueue = require("./helpers/bullQueue");
//const redisClient = require("./redisClient");

/* var scheduleQueue = new bull("scheduler-queue", {
  redis: {
    //port: config.REDIS_PORT,
    //host: config.REDIS_HOST
    host: "104.211.28.178",
    port: 6379
    //password: config.REDIS_KEY,
    //tls: { servername: config.REDIS_HOST }
  }
}); */

/* var scheduleQueue = new bull("scheduler-queue");  */

/*  scheduleQueue.empty().then( () => {
  console.log("Queue Emptied");
})  */

/* scheduleQueue.add({ foo: 'bar' }, {repeat: {cron : '10 12 * * *'}}).then( job => {
  console.log("Job Added");
}); */

/* scheduleQueue.add({ foo: 'bar' }, { delay: 10000}).then( job => {
  console.log(new Date() + "Job Added");
  18 11 1/1 * *
}); */

/*  scheduleQueue.add( {foo: 'bar' }, {repeat: {cron: '22 11 * * *'}}).then( job => {
   console.log(new Date() + " Job Added");
 });

 scheduleQueue.process((job,done) => {
    console.log(new Date() + JSON.stringify(job.data));
    done();
 // return;
});   */
 
/* var d = new Date("December 11, 2019 16:33:00:00");
var n = d.getMilliseconds();
console.log(new Date()
var delayValue = n - new Date().getMilliseconds();
console.log(delayValue); */

//myFirstQueue.add(scheduleObject, {jobId: id1, removeOnComplete: true, repeat: {cron : newCronExpression}}).then( job => {
//const job = myFirstQueue.add({ foo: 'bar' }, {jobId: 1, removeOnComplete: true, repeat: {cron : '0 00 15 1/2 * ? *'}});


/* myFirstQueue.process((job) => {
    console.log("Came here" + JSON.stringify(job.data));
  return;
});
 */ 

var queue = scheduleQueue.getScheduleQueue();
queue.getRepeatableJobs().then(repeatJobs => {
  //console.log(repeatJobs);
  console.log(repeatJobs.length);
  repeatJobs.forEach(job => {
  console.log(job.id,job.key);
  if(job.id == '75_2' || job.id == '75_1')
  {
    console.log(job.id,job.key);
    queue.removeRepeatableByKey(job.key);
  }
  //console.log(job.opts.jobId);

});  
});


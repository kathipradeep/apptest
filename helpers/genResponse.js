module.exports = {
    genResponse() {

    var repsonse = "00000100C8";    
    const buf = new Buffer.alloc(repsonse.length,repsonse, 'hex');   
    //console.log(buf); 
      
      return buf;
    }
  };
  
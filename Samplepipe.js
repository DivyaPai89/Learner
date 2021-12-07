const fs = require('fs');
const http = require('http');

const myReadStream = fs.createReadStream('./ReadFile.txt','utf8');

const server = http.createServer(function(req,resp){
      console.log(req.url);
      resp.writeHead(200,{'Content-Type':'text/plain'});
      
      myReadStream.pipe(resp);

});

server.listen(3000);

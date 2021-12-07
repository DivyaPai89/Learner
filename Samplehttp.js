const fs = require('fs');
const http = require('http');

const server = http.createServer(function(req,resp){
    console.log(req.url);
    if (req.url==='/data')
            {
                resp.writeHead(200,{'Content-Type':'application/json'});
                let obj = { name : 'Divya',
                            age  : 32
                        };
                resp.end(JSON.stringify(obj));
            }
    else {
        resp.writeHead(200,{'Content-Type':'text/plain'});
        resp.end('Page Not Found');
    } 
});

server.listen(3000);
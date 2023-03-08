var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    req.url=req.url.substring(1);
    fs.readFile(req.url, function (err, data) {
        if(!err){
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });
}).listen(5000);
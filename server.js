var http = require('http');

var instructionsNewVisitor = function(req, res) {
res.writeHead(200);
res.end('Hi everybody!');
}

var server = http.createServer(instructionsNewVisitor);

server.listen(8085);

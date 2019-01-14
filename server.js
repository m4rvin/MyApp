var http = require('http');
var request = require('request');

var storeTimestamp = function(req, res) {


request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log("DONE");
});


res.writeHead(200);
res.end('Stored!');
}

var server = http.createServer(storeTimestamp);

server.listen(8085);

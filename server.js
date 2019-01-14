var http = require('http');
var request = require('request');

var storeTimestamp = function(req, res) {


request.post({
	url: 'http://localhost:8086/write?db=mydb',
	body: "cpu_load_short,host=server0X,region=us-west value=1"
	}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	console.log("DONE");
});


res.writeHead(200);
res.end('Stored!');
}

var server = http.createServer(storeTimestamp);

server.listen(8085);

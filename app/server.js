var http = require('http');
var request = require('request');

var storeTimestamp = function(req, res) {

    if (req.method == 'POST') {

		request.post({
			url: 'http://192.168.50.5:8086/write?db=mydb',
			//body: "cpu_load_short,host=server0X,region=us-west value=1"
			body: 'eventlog,host=server0X,region=us-west value="Received a POST request event."'

			}, function (error, response, body) {
				if(response && response.statusCode){
				  	console.log('error:', error); // Print the error if one occurred
				  	console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
					console.log('body:', response.body);

					if(response.statusCode===204){
						res.writeHead(200);
						res.end('Event stored successfully!');
					}
					else{
						res.writeHead(400);
						res.end();
					}
				}

		});
	}
	else{
		res.writeHead(405,  {'Allow': 'POST'});
		res.end();
	}

}

var server = http.createServer(storeTimestamp);

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(80);

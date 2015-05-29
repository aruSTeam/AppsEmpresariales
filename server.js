function onRequest(request, response){
	response.writeHead(200,{"content-type": "text/html"});
	response.end("Generic response");
}

var http = require("http");
var server = http.createServer(onRequest);
server.listen(4444);
console.log("Server ON...");

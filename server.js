
function onRequest(request, response){
	response.writeHead(200,{"content-type": "text/html"});
	response.end("Generic response");
}

var http = require("http");
var server = http.createServer(onRequest);
server.listen(4444);
console.log("Server ON...");

<!-- Método para convertir el arrayPolizasVigentes en un Json-->
function polizasVigentesJson(){
	var jsonsPolizas = new Array();
	var contador = 0;
	while(arrayPolizasVigentes != null){
		var polizaActual = {"idPoliza" : arrayPolizasVigentes[contador].idPoliza, "nombreProducto" : arrayPolizasVigentes[contador].nombreProducto, 
		"fechaInicio" : arrayPolizasVigentes[contador].fechaInicio, "fechaFin" : arrayPolizasVigentes[contador].fechaFin, "valorAsegurado" : arrayPolizasVigentes[contador].valorAsegurado};
		jsonsPolizas.push(polizaActual);
	}
} 



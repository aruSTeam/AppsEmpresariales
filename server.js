
function onRequest(request, response){
	response.writeHead(200,{"content-type": "text/html"});
	response.end("Generic response");
}

var http = require("http");
var server = http.createServer(onRequest);
server.listen(4444);
console.log("Server ON...");


//<!-- Creando un objeto póliza y agregando valores-->
var poliza = new Array();
poliza[0] = new Object();
poliza[0].idPoliza = "1122334455";
poliza[0].nombreProducto = "Vida";
poliza[0].fechaInicio = DATE(2014-01-01);
poliza[0].fechaFin = DATE(2015-09-23);
poliza[0].valorAsegurado = 1000000000;

poliza[1] = new Object();
poliza[1].idPoliza = "2233445566";
poliza[1].nombreProducto = "Hogar";
poliza[1].fechaInicio = DATE(2015-01-01);
poliza[1].fechaFin = DATE(2016-01-01);
poliza[1].valorAsegurado = 45600000;

poliza[2] = new Object();
poliza[2].idPoliza = "5566778899";
poliza[2].nombreProducto = "Responsabilidad Civil";
poliza[2].fechaInicio = DATE(2012-05-23);
poliza[2].fechaFin = DATE(2019-05-23);
poliza[2].valorAsegurado = 2050740000;

poliza[3] = new Object();
poliza[3].idPoliza = "0044556677";
poliza[3].nombreProducto = "Autos";
poliza[3].fechaInicio = DATE(2012-05-23);
poliza[3].fechaFin = DATE(2019-05-23);
poliza[3].valorAsegurado = 2050740000;

poliza[4] = new Object();
poliza[4].idPoliza = "1122334455";
poliza[4].nombreProducto = "Vida";
poliza[4].fechaInicio = DATE(2015-01-01);
poliza[4].fechaFin = DATE(2016-01-01);
poliza[4].valorAsegurado = 2056700000;

poliza[5] = new Object();
poliza[5].idPoliza = "5566778899";
poliza[5].nombreProducto = "Responsabilidad Civil";
poliza[5].fechaInicio = DATE(2015-13-03);
poliza[5].fechaFin = DATE(2016-07-11);
poliza[5].valorAsegurado = 3243000000;



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



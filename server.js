//Funcion ejecutada cuando se realiza una petición
function onRequest(request, response){
	var query = url.parse(request.url,true).query;
	var id = query.id;
	response.writeHead(200, {'Content-Type': 'application/json'});
	var polizasJson = polizasVigentesJson(id);
	response.write(polizasJson);	
	response.end();
}

//Metodo para recuperar las polizas vigentes, de un usuario en especifico
function recuperarPolizasVigentes(cedula){
	var fecha = new Date();
	var contador = 0;
    	for( i=0;  i<poliza.length; i++){
        	if(poliza[i].idUsuario == cedula){
        		tiempoPoliza = poliza[i].fechaFin.getTime();                                     
            		tiempoPoliza = tiempoPoliza + 86399999;
            		if(tiempoPoliza > fecha.getTime()){                
            			arrayPolizasVigentes[contador] = poliza[i];
                		contador++;
            		}
        	}
    	}
}

//Funcion que convierte las polizas vigentes a JSON
function polizasVigentesJson(cedula){	
	recuperarPolizasVigentes(cedula);
	var stringJsonPoliza = new Array();
	var polizaActual = new Array();
	var jsonsPolizas = new Array();
	for(var contador = 0; contador < arrayPolizasVigentes.length; contador++){
		if(arrayPolizasVigentes[contador].idUsuario == cedula){
			polizaActual =  {"idPoliza" : arrayPolizasVigentes[contador].idPoliza, "nombreProducto" : arrayPolizasVigentes[contador].nombreProducto,
					"fechaInicio" : arrayPolizasVigentes[contador].fechaInicio , "fechaFin":arrayPolizasVigentes[contador].fechaFin ,
					"valorAsegurado" : arrayPolizasVigentes[contador].valorAsegurado}; 
			stringJsonPoliza.push(polizaActual);
		}
	}
	stringJsonPoliza = JSON.stringify(stringJsonPoliza);
	jsonsPolizas = '{"polizas": '.concat(stringJsonPoliza).concat('}');
	return jsonsPolizas;
}

var url = require('url');
var http = require("http");
var server = http.createServer(onRequest);
var arrayPolizasVigentes = new Array();

var usuario = new Array();

usuario[0] = new Object();
usuario[0].idUsuario = "0001";

usuario[1] = new Object();
usuario[1].idUsuario = "0002";

var poliza = new Array();

poliza[0] = new Object();
poliza[0].idPoliza = "1122334455";
poliza[0].idUsuario = "0001";
poliza[0].nombreProducto = "Vida";
poliza[0].fechaInicio = new Date(2014,1-1,01);    
poliza[0].fechaFin = new Date(2015,2-1,23); 
poliza[0].valorAsegurado = 1000000000;

poliza[1] = new Object();
poliza[1].idPoliza = "2233445566";
poliza[1].idUsuario = "0002";
poliza[1].nombreProducto = "Hogar";
poliza[1].fechaInicio = new Date(2015,1-1,01);
poliza[1].fechaFin = new Date(2016,1-1,01);
poliza[1].valorAsegurado = 45600000;

poliza[2] = new Object();
poliza[2].idPoliza = "5566778899";
poliza[2].idUsuario = "0001";
poliza[2].nombreProducto = "Responsabilidad Civil";
poliza[2].fechaInicio = new Date(2012,5-1,23);
poliza[2].fechaFin = new Date(2019,5-1,23);
poliza[2].valorAsegurado = 2050740000;

poliza[3] = new Object();
poliza[3].idPoliza = "0044556677";
poliza[3].idUsuario = "0001";
poliza[3].nombreProducto = "Autos";
poliza[3].fechaInicio = new Date(2012,5-1,23);
poliza[3].fechaFin = new Date(2015,4-1,23);
poliza[3].valorAsegurado = 2050740000;

poliza[4] = new Object();
poliza[4].idPoliza = "1122334455";
poliza[4].idUsuario = "0001";
poliza[4].nombreProducto = "Vida";
poliza[4].fechaInicio = new Date(2015,1-1,01);
poliza[4].fechaFin = new Date(2016,1-1,01);
poliza[4].valorAsegurado = 2056700000;

poliza[5] = new Object();
poliza[5].idPoliza = "5566778899";
poliza[5].idUsuario = "0002";
poliza[5].nombreProducto = "Responsabilidad Civil";
poliza[5].fechaInicio = new Date(2015,3-1,13);
poliza[5].fechaFin = new Date(2016,7-1,11);
poliza[5].valorAsegurado = 3243000000;

server.listen(4444);
console.log("Server ON...");

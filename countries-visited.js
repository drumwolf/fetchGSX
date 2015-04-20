var parseGSX = require("./parse-gsx-node.js");
var gsxID = "1fVEbUn0d62nFprKrlreeihCMiVh6wKgv4EA-lMBCpPs";
var processData = function(data){
	var countries = {};
	data.forEach(function(entry){
		var country = entry["country"];
		countries[country] = country;
	});
	console.log(Object.keys(countries).sort().length);
}
parseGSX(gsxID,processData);

var parseGSX = require("./parse-gsx-node.js");
var gsxID = "YOUR-SPREADSHEET-ID";
var processData = function(data){
	console.log(data);
}
parseGSX(gsxID,processData);

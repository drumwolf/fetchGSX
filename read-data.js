var fetchGSX = require("./fetchGSX.js");
var gsxID = "YOUR-SPREADSHEET-ID";
var processData = function(data){
	console.log(data);
}
fetchGSX(gsxID,processData);

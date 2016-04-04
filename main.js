var fetchGSX = require("./fetchGSX.js");

// set google spreadsheet ID
var gsxID = "YOUR-SPREADSHEET-ID";

// define the callback that processes the json data extracted from the google spreadsheet document
var processData = function(data){
	console.log(data);
}

fetchGSX(gsxID,processData);
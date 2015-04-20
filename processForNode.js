var http = require("http");
var url = "http://spreadsheets.google.com/feeds/list/1fVEbUn0d62nFprKrlreeihCMiVh6wKgv4EA-lMBCpPs/od6/public/values?alt=json";
http.get(url,function(res){
	var str = "";
	res.setEncoding('utf8');
	res.on("data",function(chunk) {
		str += chunk;
	}).on("end",function() {
		var finalData = [];
		JSON.parse(str).feed.entry.forEach(function(entry){
			var parsedObject = {};
			for (var key in entry) {
				if (key.substring(0,4) === "gsx$") {
					parsedObject[key.slice(4)] = entry[key]["$t"];
				}
			}
			finalData.push(parsedObject);
		});
		console.log(finalData);
	});
});
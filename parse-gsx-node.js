var http = require("http");
module.exports = function(spreadsheetID, callback) {
  var url = "http://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json",
      JSONString = "";
  http.get(url,function(res){
    res.setEncoding('utf8');
    res.on("data",function(chunk) {
      JSONString += chunk;
    }).on("end",function() {
      var finalData = [];
      JSON.parse(JSONString).feed.entry.forEach(function(entry){
        var parsedObject = {};
        for (var key in entry) {
          if (key.substring(0,4) === "gsx$") {
            parsedObject[key.slice(4)] = entry[key]["$t"];
          }
        }
        finalData.push(parsedObject);
      });
      callback(finalData);
    });
  });
}

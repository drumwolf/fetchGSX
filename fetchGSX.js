var http = require("http");

var fetchGSX = function(spreadsheetID, callback) {
  var url = "http://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  var JSONString = "";
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(response) {
    var finalData = response.feed.entry.map(function(entry) {
      var finalEntry = {};
      for (var key in entry) {
        if (key.substring(0,4) === "gsx$") {
          finalEntry[key.slice(4)] = entry[key]["$t"];
        }
      }
      return finalEntry;
    });
    callback(finalData);
  });
}

module.exports = fetchGSX;
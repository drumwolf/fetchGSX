var ParseGSX = (function() {

  var _defaultCallback = function(data) {
    console.log(data);
  };

  var _parseRawData = function(res) {
    var finalData = [];
    res.feed.entry.forEach(function(entry){
      var parsedObject = {};
      for (var key in entry) {
        if (key.substring(0,4) === "gsx$") {
          parsedObject[key.slice(4)] = entry[key]["$t"];
        }
      }
      finalData.push(parsedObject);
    });
    var processGSXData = _defaultCallback;
    processGSXData(finalData);
  };

  var parseGSX = function(spreadsheetID, callback) {
    var url = "http://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
    var ajax = $.ajax(url);
    if (callback) { _defaultCallback = callback; }
    $.when(ajax).then(_parseRawData);
  };

  return { parseGSX: parseGSX };

})();
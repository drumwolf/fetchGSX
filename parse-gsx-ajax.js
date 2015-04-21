var ParseGSXAjax = function(spreadsheetID, callback) {
  var url = "http://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
  var ajax = $.ajax(url);
  var processData = function(res){
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
    callback(finalData);
  }
  $.when(ajax).then(processData);
}
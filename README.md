# fetchGSX (new project)

This is an extension of an earlier project I built last year called [parseGSX](https://github.com/drumwolf/parse-gsx), when I was first learning to use Node.  The readme for this new project is still in progress, but for now here's the readme for the old `parseGSX` project for a little bit of context.


# parse-gsx (old project)
This project consists of a pair of JavaScript modules which will parse a Google spreadsheet document and render clean, readable JSON data for you to process as you wish.

- `parse-gsx-ajax.js` (for web)
- `parse-gsx-node.js` (for Node.js)

## Setup

We will assume that you already have the following:  
- a Google Docs account
- Node.js installed on your computer (if you are using `parse-gsx-node.js`)
- JQuery available for use (if you are using `parse-gsx-ajax.js`)

### Google Spreadsheet

If you have a Gmail address or a YouTube account, you should also have access to Google Docs.  All of them are under the same Google account.

If you're logged into your Google account, go here:  https://drive.google.com/drive/my-drive

When you click "NEW", select "Google Sheets" to create a new Google spreadsheet document.  The first row will consist of the labels for each column, which will be converted to object keys for each entry.  When you're finished, publish the spreadsheet online by selecting "File" -> "Publish to the Web."

When you publish to the web, you'll get a direct link to the spreadsheet document that will look something like this:
`https://docs.google.com/spreadsheets/d/[SPREADSHEET-ID]/pubhtml`

[SPREADSHEET-ID] is the unique ID for each and every Google Docs spreadsheet document.  You will use this ID to access JSON data from your particular document.

### ParseGSX for Node.js

Download `parse-gsx-node.js` into your project, and require that file in your primary JS code.  Execute the module simply by passing in two arguments:  the ID of the Google Docs spreadsheet, and a callback to parse the cleaned-up JSON data that the parseGSX module produces.

To demonstrate how easy it is, here is an example of how to use the ParseGSX module:

```
var parseGSX = require("./parse-gsx-node.js");
var yourSpreadsheetID = "YOUR-SPREADSHEET-ID";
var yourCustomCallback = function(data){
	console.log(data);
}
parseGSX(yourSpreadsheetID, yourCustomCallback);
```

# parse-gsx
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
[SPREADSHEET-ID] is the unique ID for each and every Google Docs spreadsheet document.  You will use this ID number to access JSON data from your particular document.

### ParseGSX for Node.js

Download `parse-gsx-node.js` into your project.  In your primary JS code, you will import the parse-gsx-node module by using a line of code similar to this:  
`var parseGSX = require("./parse-gsx-node.js");`

Execute `parseGSX` simply by passing in two arguments:  the ID of the Google Docs spreadsheet, and a callback to parse the cleaned-up JSON data that the parseGSX module produces:

`parseGSX(GOOGLE-SPREADSHEET-ID, CUSTOM-CALLBACK-FUNCTION)`

In this repository is a sample JS file called `read-data-node.js` which provides an example of how to execute the parseGSX Node module.




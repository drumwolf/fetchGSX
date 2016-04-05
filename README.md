# fetchGSX
This project involves a JavaScript module called `fetchGSX` which will parse the data from a Google spreadsheet document and render clean, readable JSON for you to process as you wish.  It uses the **[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)** API to retrieve this data via an http 'get' request to Google's API.

The files in this repo consist of:

- `fetchGSX.js` - the actual module itself
- `main.js` - a secondary JS file which imports the module and defines the spreadsheet ID and the custom user-created callback that is passed into the module.  

## Setup

We will assume that you already have the following:  
- a Google Docs account
- knowledge of managing web applications/projects with npm
- for now, a browser that is compatible with the Fetch API (later revisions of this module will include a polyfill for Fetch for older browsers)

### Google Spreadsheet

If you have a Gmail address or a YouTube account, you will also have access to Google Docs.  All of them are under the same Google account.
If you're logged into your Google account, go here:  https://drive.google.com/drive/my-drive

When you click "NEW", select "Google Sheets" to create a new Google spreadsheet document.  The first row will consist of the labels for each column, which will be converted to object keys for each entry.  When you're finished, publish the spreadsheet online by selecting "File" -> "Publish to the Web."

When you publish to the web, you'll get a direct link to the spreadsheet document that will look something like this:
`https://docs.google.com/spreadsheets/d/[SPREADSHEET-ID]/pubhtml`

[SPREADSHEET-ID] is the unique ID for each and every Google Docs spreadsheet document.  You will use this ID to access JSON data from your particular document.

## So why use fetchGSX?

If you can retrieve JSON data from the contents of your Google spreadsheet document, why use this module?  Why not just do an ajax, XMLHTTPRequest, or fetch call directly to Google's API?   Because the data that Google directly sends you is incredibly messy with a lot of junk.  FetchGSX will clean up all of that junk and return a neat JSON object with only the data you need.

## Implementation

Once you've imported the module into your primary JS code, you can execute fetchGSX simply by passing in two arguments:  (1) the ID of the Google Docs spreadsheet, and (2) the custom callback that parses the cleaned-up JSON data that the parseGSX module produces.   `main.js` provides basic sample code for using fetchGSX.

If you are familiar with module loaders such as browserify or webpack, you can use either of them to compile `main.js` into a final bundled JS file that will be loaded into your site.

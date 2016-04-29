var fs = require('fs');
var html = fs.readFileSync('./test.html')
var cheerio = require('cheerio'),
    $ = cheerio.load(html);

$ = replaceTables($);
writeFile($)

function replaceTables($) {
  $('table').each((i, table) => {
    table = $(table); 
    var headers = getHeaders(table);
    var content = createContent(table, headers);
    var newTable = createNewTable(headers, content); 
    table.replaceWith(newTable); 
  });
  return $;
}

function getHeaders(table) {
  var headerRow = $('tr:has(> th)', table);
  var headers = $('th', headerRow).map((i, th) => {
    return $(th).text();
  }).get();
  headerRow.remove(); 
  return headers;
}

function createContent(table, headers) {
  var contentRows = $('tr', table);
  var content = contentRows.map((i, row) => {
    var rowData = {};
    $('td', row).each((i, td) => {
      rowData[headers[i]] = $(td).text();
    });
    return rowData;
  }).get();
  contentRows.remove(); 
  return content;
}

function createNewTable(headers, data) {
  var table = createTableElement(data);
  return appendHeaderElements(headers, table); 
}

function createTableElement(data) {
  var ele = $('<BootstrapTable/>');
  ele.data('data', data)
     .data('striped', true)
     .data('hover', true) 
  return ele;
}

function appendHeaderElements(headers, table) {
  headers.forEach(header => {
    var ele = $('<TableHeaderColumn/>');
    ele.data('dataField', header);
    ele.text(header);
    table.append(ele); 
  })
  return table;
}


function writeFile($) {
  var result = $.html()
  fs.writeFile('./result.html', result);
}

var cheerio = require('cheerio'); 

var $;
export default function(html) {
  $ = cheerio.load(html);
  return replaceTables().html();
}

function replaceTables() {
  $('table').each((i, table) => {
    table = $(table); 
    var headers = getHeaders(table);
    var content = createContent(table, headers);
    var options = createOptions(table);
    var tableData = JSON.stringify({type: 'table', data:
                                    {headers: headers, content: content, options: options}}); 
    table.replaceWith('$$%' + tableData + '$$%');
  });
  return $;
}

function createOptions(table) {
  if(table.has(['[drawer]'])) {
    let title = table.attr('drawer');
    return {drawer: title};
  } 
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

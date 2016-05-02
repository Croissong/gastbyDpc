var cheerio = require('cheerio'); 

var $;
export default function(html) {
  $ = cheerio.load(html);
  return parseTitle();
}

function parseTitle() {
  var title = $('title');
  var text = title.text();
  title.remove();
  return {content: $.html(), title: text}; 
  return $;
}

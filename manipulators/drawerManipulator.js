var cheerio = require('cheerio'); 

var $;
export default function(html) {
  $ = cheerio.load(html);
  return manipulateDrawers().html();
}

function manipulateDrawers() {
  //console.log($('[drawer]').html()); 
  return $;
}

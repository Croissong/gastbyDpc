var cheerio = require('cheerio'); 

var $;
export default function(html) {
  $ = cheerio.load(html);
  return manipulateCodeBlocks().html();
}

function manipulateCodeBlocks() {
  /* console.log($.html());
     var codeBlocks = $('pre'); 
     codeBlocks.each((i, block) => {
     block = $(block);
     block.removeClass();
     block.addClass('javascript');
     block.find('span').each((i, span) => {
     $(span).removeAttr('style');
     })
     });
     console.log($.html()); */
  return $;
}

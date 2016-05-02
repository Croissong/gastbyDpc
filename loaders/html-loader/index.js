import objectAssign from 'object-assign';
import _ from 'lodash';
import manipulateTables from '../../manipulators/tableManipulator.js';
import manipulateCodeBlocks from '../../manipulators/codeManipulator.js';
import getAndRemoveTitle from '../../manipulators/parseTitle.js';
import manipulateDrawers from '../../manipulators/drawerManipulator.js';

module.exports = function (content) {
  content = manipulateDrawers(content);
  content = manipulateTables(content);
  content = manipulateCodeBlocks(content);
  var title;
  ({content, title} = getAndRemoveTitle(content)); 
  content = _.unescape(content); 
  content =  content.split('$$%');
  
  this.cacheable()
  const data = objectAssign({}, {title: title}, { body: content })
  this.value = data
  return `module.exports = ${JSON.stringify(data)}`
}

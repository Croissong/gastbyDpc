import React from 'react';
import _ from 'lodash';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Collapse, { Panel } from 'rc-collapse';
import { config } from 'config';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const currIdx = config.docPages.findIndex(p => p === this.props.route.path); 
    var nextPath = config.docPages[currIdx + 1];
    var nextTitle = _.get(this.props.route.pages.find(p => p.path === nextPath), 'data.title');
    var prevPath = config.docPages[currIdx - 1];
    var prevTitle = _.get(this.props.route.pages.find(p => p.path === prevPath), 'data.title'); 
    const post = this.props.route.page.data ; 
    return (
      <div className="markdown">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        {post.body.map((element, i) => {
           if(i % 2 == 0){
             return <div key={i} dangerouslySetInnerHTML={{ __html: element }}/>;
           } else {
             element = JSON.parse(element); 
             return reactComponents[element.type](i, element.data);
           }
        })}
      <div style={{marginTop: '50px'}}>
      {prevPath && <Link
                       to={prefixLink(prevPath)}
                       style={{
                           textDecoration: 'none',
                         }}
                   >
        <button className="btn btn-success">{'<< ' + prevTitle}</button>
      </Link> 
      }
      {nextPath && <Link
                       to={prefixLink(nextPath)}
                       style={{
                           textDecoration: 'none',
                         }}
                   >
        <button className="btn btn-success pull-right">{nextTitle + ' >>'}</button>
      </Link> 
      }
      </div>
      </div>
    )
  }
})


const reactComponents = {
  table: createReactTable
}

function createReactTable(i, data) {
  if(data.options.drawer){
    return <Collapse key={i} class="drawer" accordion={true}>
        <Panel key={i} header={data.options.drawer}>
          <BootstrapTable key={i} keyField={data.headers[0]} data={data.content} striped={true} hover={true}>
            {data.headers.map((h, i) => {
               return (<TableHeaderColumn dataSort={true} key={h} dataField={h}>{h}</TableHeaderColumn>);
             })}
          </BootstrapTable>
        </Panel> 
    </Collapse>
  }
  return  (
    <BootstrapTable key={i} keyField={data.headers[0]} data={data.content} striped={true} hover={true}>
      {data.headers.map((h, i) => {
         return (<TableHeaderColumn dataSort={true} key={h} dataField={h}>{h}</TableHeaderColumn>);
       })}
    </BootstrapTable>);
}

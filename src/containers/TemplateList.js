import React, { Component } from 'react';
import { connect } from 'react-redux';
import TemplateItem from '../components/TemplateItem';

class TemplateList extends Component {
  fetchStatus() {
    if (this.props.isFetching && !this.props.list.length) {
      return (
        <tr>
          <td />
          <td className="status">fetching... ⏳</td>
          <td className="modified" />
        </tr>
      );
    }
    return null;
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Template</th>
            <th className="status">Status</th>
            <th className="modified">Modified</th>
          </tr>
          {this.fetchStatus()}
          {this.props.list.map(e => (
            <TemplateItem key={e.id} template={e} modified={e.modified} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default connect(state => ({
  list: state.templates,
  isFetching: state.isFetching
}))(TemplateList);

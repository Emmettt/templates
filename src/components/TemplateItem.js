import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import templateSelect from '../actions/templateSelect';
import { Link } from 'react-router-dom';

class TemplateItem extends Component {
  onclick = (id, template) => {
    this.props.templateClickHandler({ id, template });
  };

  render() {
    let date = new Date(this.props.modified);
    const options = {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    date = date.toLocaleString('ru', options);

    let status = '';
    const id = this.props.templateId;
    const isFetching = this.props.isFetching;
    if (id === this.props.template.id && isFetching) status = 'saving... ⏳';
    if (id === this.props.template.id && !isFetching) status = 'editing... ';

    return (
      <tr className="row">
        <td
          onClick={() => {
            this.onclick(this.props.template.id, this.props.template.template);
          }}
        >
          <Link className="routerlink" to="/content">
            {this.props.template.name}
          </Link>
        </td>
        <td className="status">{status}</td>
        <td className="modified">{date}</td>
      </tr>
    );
  }
}

export default connect(
  state => ({
    templateId: state.activeTemplateId,
    isFetching: state.isFetching
  }),
  dispatch => ({
    templateClickHandler: bindActionCreators(templateSelect, dispatch)
  })
)(TemplateItem);

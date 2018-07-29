import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import okPanelClick from '../actions/okPanelClick';

class Panel extends Component {
  submit = () => {
    let text = document.querySelector('.text').value;
    text = '\n' + text + '\n';
    const fontsize = document.querySelector('.fontsize').value;
    const el = document.querySelector('.edit');
    if (text !== '\n\n') el.textContent = text;
    el.style.fontSize = fontsize;
    const tmp = document.querySelectorAll('.editable');
    [...tmp].forEach(e => e.classList.remove('edit'));
    const templateHTML = document.querySelector('.template').parentElement
      .innerHTML;
    this.props.onclick(templateHTML);
  };

  render() {
    if (this.props.visible) {
      return (
        <div className="settingsPanel">
          <input type="text" className="text" placeholder="Input text..." />
          <select className="fontsize" defaultValue="x-large">
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="x-large">large</option>
          </select>
          <button className="okBtn" onClick={this.submit}>
            Ok
          </button>
        </div>
      );
    }
    return null;
  }
}

export default connect(
  state => ({ visible: state.showPanel }),
  dispatch => ({
    onclick: bindActionCreators(okPanelClick, dispatch)
  })
)(Panel);

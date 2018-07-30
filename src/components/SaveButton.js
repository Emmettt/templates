import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import saveTemplates from '../actions/saveTemplates';
import backContentClick from '../actions/backContentClick';
import saveSync from '../actions/saveSync';

class SaveButton extends Component {
  onClick = () => {
    this.props.saveSync();
    this.props.saveClick(); //or add reducer
  };
  render() {
    if (!this.props.visible)
      return (
        <Link onClick={this.props.backClick} className="saveButton" to="/">
          Back
        </Link>
      );
    return (
      <Link onClick={this.onClick} className="saveButton" to="/">
        Save
      </Link>
    );
  }
}

export default connect(
  state => ({ visible: state.showButton }),
  dispatch => ({
    saveClick: bindActionCreators(saveTemplates, dispatch),
    backClick: bindActionCreators(backContentClick, dispatch),
    saveSync: bindActionCreators(saveSync, dispatch)
  })
)(SaveButton);

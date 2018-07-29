import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import resetTemplate from '../actions/resetTemplate';

class ResetButton extends Component {
  render() {
    if (!this.props.visible) return null;
    return (
      <button className="resetbutton" onClick={this.props.reset}>
        Reset
      </button>
    );
  }
}

export default connect(
  state => ({ visible: state.showButton }),
  dispatch => ({
    reset: bindActionCreators(resetTemplate, dispatch)
  })
)(ResetButton);

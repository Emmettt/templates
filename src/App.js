import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import TemplateList from './containers/TemplateList';
import TemplateContent from './containers/TemplateContent';
import { bindActionCreators } from 'redux';
import getTemplates from './actions/getTemplates';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getTemplates();
  }

  render() {
    return (
      //HashRouter a bit simpler for gh-pages
      <HashRouter>
        <div className="main_wrapper">
          <header className="header">Used: react, router, redux, thunk</header>
          <aside className="sidebar">
            <NavLink
              className="sidebarlink"
              activeClassName="active"
              exact
              to="/"
            >
              Templates List
            </NavLink>
            <NavLink
              className="sidebarlink"
              activeClassName="active"
              to="/content"
            >
              Template Content
            </NavLink>
          </aside>
          <main className="main">
            <Route exact path="/" component={TemplateList} />
            <Route exact path="/content" component={TemplateContent} />
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default connect(
  state => ({ ...state }),
  dispatch => ({
    getTemplates: bindActionCreators(getTemplates, dispatch)
  })
)(App);

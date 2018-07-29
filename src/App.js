import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Router, Route, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import TemplateList from './containers/TemplateList';
import TemplateContent from './containers/TemplateContent';
import { bindActionCreators } from 'redux';
import getTemplates from './actions/getTemplates';
import './App.css';

const history = createHistory({ basename: process.env.PUBLIC_URL });

class App extends Component {
  componentDidMount() {
    this.props.getTemplates();
  }

  render() {
    return (
      <Router history={history}>
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
            <Switch>
              <Route path="/content" component={TemplateContent} />
              <Route path="/" component={TemplateList} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    templates: state.templates,
    activeTemplateId: state.activeTemplateId,
    activeTemplateHTML: state.activeTemplateHTML,
    isFetching: state.isFetching,
    showButton: state.showButton,
    showPanel: state.showPanel
  };
}

export default connect(
  mapStateToProps,
  dispatch => ({
    getTemplates: bindActionCreators(getTemplates, dispatch)
  })
)(App);

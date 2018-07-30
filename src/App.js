import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
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
    console.log(process.env.PUBLIC_URL);

    return (
      <HashRouter history={history}>
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

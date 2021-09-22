import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import SomeViewComponent from './SomeViewComponent';
import {connect} from 'react-redux';
import Board from './chess/board';
import Arnold from './chest/arnold';

class App extends React.Component {
  render() {
    const navClass = 'colors' + this.props.colorModeFromReduxStore;
    return (
      <BrowserRouter>
        <div className="App">
          <nav className={navClass}>
            <ul>
              <li className="nav-item">
                <Link to="/">Main Page</Link>
              </li>
              <li className="nav-item">
                <Link to="/something">Something</Link>
              </li>
              <li className="nav-item">
                <Link to="/chess">Chess</Link>
              </li>
              <li className="last-nav-item">
                <Link to="/chest">Chest</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <div><h1>Main Page</h1> Lorem ipsum etc.</div>
            </Route>
            <Route path="/something" component={SomeViewComponent} />
            <Route path="/chess" component={Board} />
            <Route path="/chest" component={Arnold} />
            <Route path="/">
              <h1>Do not do that!</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// This function is needed to get data from Redux store 
// to the component as props using connect() of react-redux. 
// Reshape the data from store to a suitable form for the 
// component here.
const mapStateToProps = state => {
  return {
    colorModeFromReduxStore: state['general']['colorMode']
  };
};
const app = connect(mapStateToProps, null)(App)

export default app;
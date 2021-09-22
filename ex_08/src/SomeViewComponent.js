import React from 'react';

import n from './logo.svg';
import {Switch, Route, useRouteMatch, useParams, Link} from 'react-router-dom';
import ButtonComponent from './ButtonComponent';
function SomeViewComponent() {
    console.log("SOME VIEW COMPONENT")

  // useRouteMatch Hook offers access to match object
  // that provides info about how a <Route path> matched the
  // URL. Here we use its 'url' property (that is the matched
  // part of the URL) and 'path' property (the path pattern
  // that is used to match).
  const match = useRouteMatch();

  return (
      <div>
          <nav>
              <ul>
                  <li className="nav-item">
                      <Link to={`${match.url}/foo`}>Foo</Link>
                  </li>
                  <li className="last-nav-item">
                      <Link to={`${match.url}/bar`}>Bar</Link>
                  </li>
              </ul>
          </nav>
      
        <Switch>
            <Route path={`${match.path}/:subpageId`}>
                <SubPage />
            </Route>
            <Route path={match.path}>
                <h1>Please select a subpage</h1>
            </Route>
        </Switch>

      </div>
  );

}

// Component that has different ways of rendering itself
// based on the URL
function SubPage() {

  // We can access the search parameters in the URL via useParams Hook  
  const {subpageId} = useParams();

  if (subpageId === 'foo') {
      return (
          <div>
              <h1>{subpageId}</h1>
              <ButtonComponent />
          </div>
      );
  }
  else if (subpageId === 'bar') {
      return (
          <div>
              <h1>{subpageId}</h1>
              <img src={n} alt="a cat" />
          </div>
      );
  }
  else {
      return (
          <div>
              <h1>
                  Hey, no fooling around!
              </h1>
          </div>
      );
  }


}

export default SomeViewComponent;
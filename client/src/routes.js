import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'containers/app';
import Home from 'containers/home';
import Standings from 'containers/standings';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
       <Route path="standings" component={Standings} />
       <IndexRoute component={Home}/>
      </Route>
    </Router>
  );
};

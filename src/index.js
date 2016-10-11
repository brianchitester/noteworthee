var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TeamView from './components/TeamView';
import LandingView from './components/LandingView';
import { Router, Route, browserHistory } from 'react-router';

// Render the main component into the dom
ReactDOM.render(
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path='/' component={LandingView}/>
          <Route path='/:teamName(/:boardName)' component={TeamView}/>
        </Route>
      </Router>, document.getElementById('app')
);

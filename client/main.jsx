import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
 import {Router, Route, browserHistory, history, withRouter} from 'react-router';
import App from '../imports/ui/App.jsx';
 const renderRoutes = () => (

    <Router history={browserHistory}>
      <Route path="/" component={App}/>
   
        
    </Router>
);
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('appAirMine'));
});
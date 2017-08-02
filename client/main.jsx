import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
const renderRoutes = () => (
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>

);
Meteor.startup(() => {
  ReactDOM.render((renderRoutes()), document.getElementById('appAirMine'));
});

import {Meteor} from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import {Router, Route, browserHistory, history, withRouter} from 'react-router';
import App from '/imports/ui/App.jsx';
export const renderRoutes = () => (

    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
);
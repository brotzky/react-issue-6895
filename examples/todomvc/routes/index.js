import React from 'react';
import { Route, IndexRoute } from 'react-router';
// Used to wrap modules that require user authentication
import TodoApp from '../containers/TodoApp';

// Please keep routes in alphabeitcal order
export default (
  <Route path="/" component={TodoApp}/>
);

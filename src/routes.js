import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PostList from './components/PostList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostList} />
  </Route>
);
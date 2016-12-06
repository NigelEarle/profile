import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import {
  HomeComponent,
} from '../components';

const ProfileRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeComponent}></Route>
  </Router>
);

export default ProfileRouter;
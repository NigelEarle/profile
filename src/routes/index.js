import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import {
  HomeComponent,
  WorkComponent,
  AboutComponent,
  BlogComponent,
} from '../components';

const ProfileRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={HomeComponent}></Route>
    <Route path="/work" component={WorkComponent}></Route>
    <Route path="/blog" component={BlogComponent}></Route>
    <Route path="/about" component={AboutComponent}></Route>
  </Router>
);

export default ProfileRouter;
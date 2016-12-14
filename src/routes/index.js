import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import {
  HomeComponent,
  WorkComponent,
  ContactComponent,
  BlogComponent,
} from '../components';

const ProfileRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeComponent}></Route>
    <Route path="/work" component={WorkComponent}></Route>
    <Route path="/blog" component={BlogComponent}></Route>
    <Route path="/contact" component={ContactComponent}></Route>
  </Router>
);

export default ProfileRouter;
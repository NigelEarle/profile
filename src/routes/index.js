import React from 'react';

import {
  Router,
  Route,
  IndexRoute, 
  browserHistory
} from 'react-router';

import {
  AppComponent,
  HomeComponent,
  WorkComponent,
  AboutComponent,
  BlogComponent,
  SingleBlogComponent,
  NotFoundComponent,
} from '../components';

const ProfileRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomeComponent} />
      <Route path="about" component={AboutComponent}></Route>
      <Route path="work" component={WorkComponent}></Route>
      <Route path="blog" component={BlogComponent}></Route>
      <Route path="blog/:id" component={SingleBlogComponent}></Route>
      <Route path="*" component={NotFoundComponent} />
    </Route>
  </Router>
);

export default ProfileRouter;
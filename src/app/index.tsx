import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import {
  Challenges,
  ChallengeDetails,
  Submission,
  Teams,
  PageNotFound
} from './containers';

export const App = hot(module)(() => (
  <Switch>
    <Route exact={true} path='/challenges' component={Challenges} />
    <Route exact={true} path='/challenges/:id/submission' component={Submission} />
    <Route exact={true} path='/challenges/:id' component={ChallengeDetails} />
    <Route exact={true} path='/teams' component={Teams} />
    <Redirect exact={true} from='/' to='/challenges' />
    <Route path='*' component={PageNotFound} />
  </Switch>
));
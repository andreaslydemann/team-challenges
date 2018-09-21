import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Challenges, ChallengeDetails, Submission } from './containers';
import { hot } from 'react-hot-loader';
import { PageNotFound } from './containers/PageNotFound'

export const App = hot(module)(() => (
  <Switch>
    <Route exact={true} path="/challenges" component={Challenges} />
    <Route path='/challenges/:id/submission' component={Submission} />
    <Route path='/challenges/:id' component={ChallengeDetails} />
    <Redirect exact={true} from="/" to="/challenges" />
    <Route path="*" component={PageNotFound} />
  </Switch>
));
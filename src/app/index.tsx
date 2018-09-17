import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Challenges } from './containers';
import { hot } from 'react-hot-loader';
import { PageNotFound } from './containers/PageNotFound'

export const App = hot(module)(() => (
  <Switch>
    <Route path="/challenges" component={Challenges} />
    <Redirect exact={true} from="/" to="/challenges" />
    <Route path="*" component={PageNotFound} />
  </Switch>
));
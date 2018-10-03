import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest } : {component: React.Component}) => (
    <Route {...rest} render={props => (
        sessionStorage.getItem('user')
            ? <React.Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
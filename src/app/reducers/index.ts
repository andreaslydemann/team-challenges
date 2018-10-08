import { combineReducers } from 'redux';
import { RootState } from './state';
import { challengeReducer } from './challenge.reducer';
import { ratingReducer } from './rating.reducer';
import { submissionReducer } from './submission.reducer';
import { teamReducer } from './team.reducer';
import { userReducer } from './user.reducer';
import { authReducer } from './auth.reducer';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
    auth: authReducer as any,
    challenges: challengeReducer as any,
    ratings: ratingReducer as any,
    submissions: submissionReducer as any,
    teams: teamReducer as any,
    users: userReducer as any,
    router: routerReducer as any
});
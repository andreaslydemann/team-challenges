import { combineReducers } from 'redux';
import { RootState } from './state';
import { challengeReducer } from './challenges';
import { ratingReducer } from './ratings';
import { submissionReducer } from './submissions';
import { teamReducer } from './teams';
import { userReducer } from './users';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  challenges: challengeReducer as any,
  ratings: ratingReducer as any,
  submissions: submissionReducer as any,
  teams: teamReducer as any,
  users: userReducer as any,
  router: routerReducer as any
});
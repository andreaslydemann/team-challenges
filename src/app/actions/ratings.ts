// import { createAction } from 'redux-actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';

export namespace RatingActions {
  export enum Type {
    GET_RATINGS = 'GET_RATINGS',
    GET_RATINGS_SUCCESS = 'GET_RATINGS_SUCCESS',
    GET_RATINGS_FAIL = 'GET_RATINGS_FAIL',
    GET_RATINGS_OF_TEAM = 'GET_RATINGS_OF_TEAM',
    GET_RATINGS_OF_TEAM_SUCCESS = 'GET_RATINGS_OF_TEAM_SUCCESS',    
    GET_RATINGS_OF_TEAM_FAIL = 'GET_RATINGS_OF_TEAM_FAIL',
    GET_RATINGS_OF_CHALLENGE = 'GET_RATINGS_OF_CHALLENGE',
    GET_RATINGS_OF_CHALLENGE_SUCCESS = 'GET_RATINGS_OF_CHALLENGE_SUCCESS',    
    GET_RATINGS_OF_CHALLENGE_FAIL = 'GET_RATINGS_OF_CHALLENGE_FAIL',
  }

  export const getRatings: ActionCreator<ThunkAction<Action, RootState.RatingState, void>> = () => {
    return (dispatch: Dispatch<RootState.RatingState>): Action => {

      dispatch({
        type: Type.GET_RATINGS
      });

      const ratings = [{
        id: "ra1",
        scorePercentage: 10,
        comment: "Not bad",
        submissionId: "su1"
      }]

      return dispatch({
        type: Type.GET_RATINGS_SUCCESS,
        payload: ratings
      });
    };
  };

  export const getRatingsOfTeam: ActionCreator<ThunkAction<Action, RootState.RatingState, void>> = (teamId: string) => {
    return (dispatch: Dispatch<RootState.RatingState>): Action => {

      dispatch({
        type: Type.GET_RATINGS_OF_TEAM
      });

      const ratings = [{
        id: "ra1",
        scorePercentage: 10,
        comment: "Not bad",
        submissionId: "su1"
      }]

      return dispatch({
        type: Type.GET_RATINGS_OF_TEAM_SUCCESS,
        payload: ratings
      });
    };
  };

  export const getRatingsOfChallenge: ActionCreator<ThunkAction<Action, RootState.RatingState, void>> = (challengeId: string) => {
    return (dispatch: Dispatch<RootState.RatingState>): Action => {

      dispatch({
        type: Type.GET_RATINGS_OF_CHALLENGE
      });

      const ratings = [{
        id: "ra1",
        scorePercentage: 10,
        comment: "Not bad",
        submissionId: "su1"
      }]

      return dispatch({
        type: Type.GET_RATINGS_OF_CHALLENGE_SUCCESS,
        payload: ratings
      });
    };
  };
}


export type RatingActions = Omit<typeof RatingActions, 'Type'>;
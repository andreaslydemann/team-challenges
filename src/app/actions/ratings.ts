// import { createAction } from 'redux-actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';

export namespace RatingActions {
  export enum Type {
    GET_RATINGS = 'GET_RATINGS',
    GET_RATINGS_SUCCESS = 'GET_RATINGS_SUCCESS',
    GET_RATINGS_OF_TEAM = 'GET_RATINGS_OF_TEAM',
    GET_RATINGS_OF_TEAM_SUCCESS = 'GET_RATINGS_OF_TEAM_SUCCESS',
  }

  export const getRatings: ActionCreator<ThunkAction<Action, RootState.RatingState, void>> = () => {
    return (dispatch: Dispatch<RootState.RatingState>): Action => {

      dispatch({
        type: Type.GET_RATINGS
      });

      const name = "hello";


      return dispatch({
        type: Type.GET_RATINGS_SUCCESS,
        payload: { name }
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
}


export type RatingActions = Omit<typeof RatingActions, 'Type'>;
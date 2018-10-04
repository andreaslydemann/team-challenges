import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { RatingConstants } from '../constants';
import { RatingService } from '../services';
import { RatingModel } from '../models';

export namespace RatingActions {
  export const getRatings: ActionCreator<ThunkAction<Promise<Action>, RootState.RatingState, void>> = () => {
    return async (dispatch: Dispatch<RootState.RatingState>): Promise<Action> => {
      dispatch(request());

      const ratings = await RatingService.getRatings();

      return dispatch(success(ratings));
    };

    function request() { return { type: RatingConstants.GET_RATINGS_REQUEST } }
    function success(ratings: RatingModel[]) { return { type: RatingConstants.GET_RATINGS_SUCCESS, payload: ratings } }
    //function failure(error: string) { return { type: ChallengeConstants.GET_CHALLENGES_FAILURE, payload: error } }
  };

  export const getRatingsByTeamId: ActionCreator<ThunkAction<Promise<Action>, RootState.RatingState, void>> = (teamId: string) => {
    return async (dispatch: Dispatch<RootState.RatingState>): Promise<Action> => {
      dispatch(request());

      try {
        const ratings = await RatingService.getRatingsByTeamId(teamId);

        return dispatch(success(ratings));
      } catch (err) {
        return dispatch(failure('validation:genericErrorMessage'));
      };
    };

    function request() { return { type: RatingConstants.GET_RATINGS_OF_TEAM_REQUEST } }
    function success(ratings: RatingModel[]) { return { type: RatingConstants.GET_RATINGS_OF_TEAM_SUCCESS, payload: ratings } }
    function failure(error: string) { return { type: RatingConstants.GET_RATINGS_OF_TEAM_FAILURE, payload: error } }
  };

  export const getRatingsByChallengeId: ActionCreator<ThunkAction<Promise<Action>, RootState.RatingState, void>> = (challengeId: string) => {
    return async (dispatch: Dispatch<RootState.RatingState>): Promise<Action> => {
      dispatch(request());

      try {        
        const ratings = await RatingService.getRatingsByTeamId(challengeId);
        
        return dispatch(success(ratings));
      } catch (err) {
        return dispatch(failure('validation:genericErrorMessage'));
      };
    };

    function request() { return { type: RatingConstants.GET_RATINGS_OF_CHALLENGE_REQUEST } }
    function success(ratings: RatingModel[]) { return { type: RatingConstants.GET_RATINGS_OF_CHALLENGE_SUCCESS, payload: ratings } }
    function failure(error: string) { return { type: RatingConstants.GET_RATINGS_OF_CHALLENGE_FAILURE, payload: error } }
  };
};

export type RatingActions = typeof RatingActions;
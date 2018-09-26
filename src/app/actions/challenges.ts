import { Action, ActionCreator, Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { SubmissionActions, RatingActions, TeamActions } from './';
import { ChallengeModel } from '../models';
//import axios from 'axios';

export namespace ChallengeActions {
  export enum Type {
    GET_CHALLENGES = 'GET_CHALLENGES',
    GET_CHALLENGES_SUCCESS = 'GET_CHALLENGES_SUCCESS',
    GET_CHALLENGES_FAIL = 'GET_CHALLENGES_FAIL',
    GET_CHALLENGE = 'GET_CHALLENGE',
    GET_CHALLENGE_SUCCESS = 'GET_CHALLENGE_SUCCESS',
    GET_CHALLENGE_FAIL = 'GET_CHALLENGE_FAIL',
    SELECT_FILE = 'SELECT_FILE',
    REMOVE_FILE = 'REMOVE_FILE'
  }

  export const initChallenges = (teamId: string) => (dispatch: Dispatch<any>) => {
    dispatch(getChallenges());
    dispatch(SubmissionActions.getSubmissionsByTeamId(teamId));
    dispatch(RatingActions.getRatingsByTeamId(teamId));
  };

  export const initChallengeDetails = (id: string) => (dispatch: Dispatch<any>) => {
    dispatch(getChallenge(id));
    dispatch(SubmissionActions.getSubmissionsByChallengeId(id));
    dispatch(RatingActions.getRatingsByChallengeId(id));
    dispatch(TeamActions.getTeamsByChallengeId(id));
  };

  export const getChallenges: ActionCreator<ThunkAction<Promise<Action>, RootState.ChallengeState, void>> = () => {
    return async (dispatch: Dispatch<RootState.ChallengeState>): Promise<Action> => {
      dispatch({
        type: Type.GET_CHALLENGES
      });

      const challenges = [{
        id: "ch1",
        name: 'Challenge 1',
        description: 'This is a challenge',
        createdAt: new Date()
      },
      {
        id: "ch2",
        name: 'Challenge 2',
        description: 'This is a challenge',
        createdAt: new Date()
      }, {
        id: "ch3",
        name: 'Challenge 3',
        description: 'This is a challenge',
        createdAt: new Date()
      }];

      try {
        return dispatch({
          type: Type.GET_CHALLENGES_SUCCESS,
          payload: challenges
        });
      } catch (err) {
        return dispatch({
          type: Type.GET_CHALLENGES_FAIL,
          payload: 'validation:genericErrorMessage'
        });
      };
    };
  };

  export const getChallenge: ActionCreator<ThunkAction<Promise<Action>, RootState.ChallengeState, void>> = () => {
    return async (dispatch: Dispatch<RootState.ChallengeState>): Promise<Action> => {
      dispatch({
        type: Type.GET_CHALLENGE
      });

      const challenge = {
        id: "ch1",
        name: 'Challenge 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
          'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
          'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ' +
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date()
      };

      try {
        return dispatch({
          type: Type.GET_CHALLENGE_SUCCESS,
          payload: challenge
        });
      } catch (err) {
        return dispatch({
          type: Type.GET_CHALLENGE_FAIL,
          payload: 'validation:challengeNotFound'
        });
      };
    };
  };

  export const selectFile = createAction<PartialPick<ChallengeModel.ChallengeDetailsModel, 'file'>>(Type.SELECT_FILE);
  export const removeFile = createAction(Type.REMOVE_FILE);
  // export const deleteChallenge = createAction<ChallengeModel['id']>(Type.DELETE_CHALLENGE);
};

export type ChallengeActions = Omit<typeof ChallengeActions, 'Type'>;
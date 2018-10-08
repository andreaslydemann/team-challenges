import { Action, ActionCreator, Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { SubmissionActions, RatingActions, TeamActions } from '.';
import { ChallengeTypes } from '../types';
import { ChallengeService } from '../services';
import { ChallengeModel } from '../models';

export namespace ChallengeActions {
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
            dispatch(request());

            try {
                const challenges = await ChallengeService.getChallenges();

                return dispatch(success(challenges));
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            };
        };

        function request() { return { type: ChallengeTypes.GET_CHALLENGES_REQUEST } }
        function success(challenges: ChallengeModel[]) { return { type: ChallengeTypes.GET_CHALLENGES_SUCCESS, payload: challenges } }
        function failure(error: string) { return { type: ChallengeTypes.GET_CHALLENGES_FAILURE, payload: error } }
    };

    export const getChallenge: ActionCreator<ThunkAction<Promise<Action>, RootState.ChallengeState, void>> = (id: string) => {
        return async (dispatch: Dispatch<RootState.ChallengeState>): Promise<Action> => {
            dispatch(request());

            try {
                const challenge = await ChallengeService.getChallenge(id);

                return dispatch(success(challenge));
            } catch (err) {
                return dispatch(failure('validation:challengeNotFound'));
            };
        };

        function request() { return { type: ChallengeTypes.GET_CHALLENGE_REQUEST } }
        function success(challenge: ChallengeModel) { return { type: ChallengeTypes.GET_CHALLENGE_SUCCESS, payload: challenge } }
        function failure(error: string) { return { type: ChallengeTypes.GET_CHALLENGE_FAILURE, payload: error } }
    };

    export const selectFile = createAction<PartialPick<ChallengeModel.ChallengeDetailsModel, 'file'>>(ChallengeTypes.SELECT_FILE);
    export const removeFile = createAction(ChallengeTypes.REMOVE_FILE);
    // export const deleteChallenge = createAction<ChallengeModel['id']>(Type.DELETE_CHALLENGE);
};

export type ChallengeActions = typeof ChallengeActions;
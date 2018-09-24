import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { SubmissionModel } from '../models';

export namespace SubmissionActions {
    export enum Type {
        GET_SUBMISSIONS = 'GET_SUBMISSIONS',
        GET_SUBMISSIONS_SUCCESS = 'GET_SUBMISSIONS_SUCCESS',
        GET_SUBMISSIONS_FAIL = 'GET_SUBMISSIONS_FAIL',
        GET_SUBMISSIONS_OF_TEAM = 'GET_SUBMISSIONS_OF_TEAM',
        GET_SUBMISSIONS_OF_TEAM_SUCCESS = 'GET_SUBMISSIONS_OF_TEAM_SUCCESS',
        GET_SUBMISSIONS_OF_TEAM_FAIL = 'GET_SUBMISSIONS_OF_TEAM_FAIL',
        GET_SUBMISSIONS_OF_CHALLENGE = 'GET_SUBMISSIONS_OF_CHALLENGE',
        GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS = 'GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS',
        GET_SUBMISSIONS_OF_CHALLENGE_FAIL = 'GET_SUBMISSIONS_OF_CHALLENGE_FAIL',
    }

    export const getSubmissions: ActionCreator<ThunkAction<Action, RootState.SubmissionState, void>> = () => {
        return (dispatch: Dispatch<RootState.SubmissionState>): Action => {
            dispatch({
                type: Type.GET_SUBMISSIONS
            });

            const submissions = [{
                id: "su1",
                status: SubmissionModel.Status.EVALUATED,
                createdAt: new Date(),
                challengeId: "ch1",
                teamId: "team1"
            }]

            return dispatch({
                type: Type.GET_SUBMISSIONS_SUCCESS,
                payload: submissions
            });
        };
    };

    export const getSubmissionsByTeamId: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (teamId: string) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch({
                type: Type.GET_SUBMISSIONS_OF_TEAM
            });

            const submissions = [{
                id: "su1",
                status: SubmissionModel.Status.EVALUATED,
                createdAt: new Date(),
                challengeId: "ch1",
                teamId: "team1"
            }];

            try {
                return dispatch({
                    type: Type.GET_SUBMISSIONS_OF_TEAM_SUCCESS,
                    payload: submissions
                });
            } catch (err) {
                return dispatch({
                    type: Type.GET_SUBMISSIONS_OF_TEAM_FAIL,
                    payload: 'validation:challengeNotFound'
                });
            };
        };
    };

    export const getSubmissionsByChallengeId: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (challengeId: string) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch({
                type: Type.GET_SUBMISSIONS_OF_CHALLENGE
            });

            const submissions = [{
                id: "su1",
                status: SubmissionModel.Status.EVALUATED,
                createdAt: new Date(),
                challengeId: "ch1",
                teamId: "team1"
            }]

            try {
                return dispatch({
                    type: Type.GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS,
                    payload: submissions
                });
            } catch (err) {
                return dispatch({
                    type: Type.GET_SUBMISSIONS_OF_CHALLENGE_FAIL,
                    payload: 'validation:challengeNotFound'
                });
            };
        };
    };
};

export type SubmissionActions = Omit<typeof SubmissionActions, 'Type'>;
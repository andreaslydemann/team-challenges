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
        SUBMIT_FILE = 'SUBMIT_FILE',
        SUBMIT_FILE_SUCCESS = 'SUBMIT_FILE_SUCCESS',
        SUBMIT_FILE_FAIL = 'SUBMIT_FILE_FAIL',
    }

    export const getSubmissions: ActionCreator<ThunkAction<Action, RootState.SubmissionState, void>> = () => {
        return (dispatch: Dispatch<RootState.SubmissionState>): Action => {
            dispatch({ type: Type.GET_SUBMISSIONS });

            const submissions = [{
                id: "su1",
                status: SubmissionModel.Status.EVALUATED,
                createdAt: new Date(),
                challengeId: "ch1",
                teamId: "team1"
            }];

            return dispatch({
                type: Type.GET_SUBMISSIONS_SUCCESS,
                payload: submissions
            });
        };
    };

    export const getSubmissionsByTeamId: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (teamId: string) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch({ type: Type.GET_SUBMISSIONS_OF_TEAM });

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
                    payload: 'validation:genericErrorMessage'
                });
            };
        };
    };

    export const getSubmissionsByChallengeId: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (challengeId: string) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch({ type: Type.GET_SUBMISSIONS_OF_CHALLENGE });

            const submissions = [{
                id: "su1",
                status: SubmissionModel.Status.EVALUATED,
                createdAt: new Date(),
                challengeId: "ch1",
                teamId: "team1"
            }];

            try {
                return dispatch({
                    type: Type.GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS,
                    payload: submissions
                });
            } catch (err) {
                return dispatch({
                    type: Type.GET_SUBMISSIONS_OF_CHALLENGE_FAIL,
                    payload: 'validation:genericErrorMessage'
                });
            };
        };
    };

    export const submitFile: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (data: FormData, callback: () => void) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch({ type: Type.SUBMIT_FILE });

            try {
                //const {data} = await axios.post(`${BASE_URL}/submitFile`, data);
                await new Promise(resolve => setTimeout(resolve, 3000));
                const disp = dispatch({ type: Type.SUBMIT_FILE_SUCCESS });

                callback();
                return disp;
            } catch (err) {
                // const { data } = err.response;
                // payload: data.error

                return dispatch({
                    type: Type.SUBMIT_FILE_FAIL,
                    payload: 'validation:submissionUploadFail'
                });
            };
        };
    };
};

export type SubmissionActions = Omit<typeof SubmissionActions, 'Type'>;
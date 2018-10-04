import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { SubmissionModel } from '../models';
import { SubmissionConstants } from '../constants';
import { SubmissionService } from '../services';

export namespace SubmissionActions {
    export const getSubmissions: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = () => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch(request());
            
            try {
                const submissions = await SubmissionService.getSubmissions();

                return dispatch(success(submissions));
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            };
        };

        function request() { return { type: SubmissionConstants.GET_SUBMISSIONS_REQUEST } }
        function success(submissions: SubmissionModel[]) { return { type: SubmissionConstants.GET_SUBMISSIONS_SUCCESS, payload: submissions } }
        function failure(error: string) { return { type: SubmissionConstants.GET_SUBMISSIONS_FAILURE, payload: error } }
    };

    export const getSubmissionsByTeamId: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (teamId: string) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch(request());

            try {
                const submissions = await SubmissionService.getSubmissionsByTeamId(teamId);

                return dispatch(success(submissions));
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            };
        };

        function request() { return { type: SubmissionConstants.GET_SUBMISSIONS_OF_TEAM_REQUEST } }
        function success(submissions: SubmissionModel[]) { return { type: SubmissionConstants.GET_SUBMISSIONS_OF_TEAM_SUCCESS, payload: submissions } }
        function failure(error: string) { return { type: SubmissionConstants.GET_SUBMISSIONS_OF_TEAM_FAILURE, payload: error } }
    };

    export const getSubmissionsByChallengeId: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (challengeId: string) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch(request());

            try {
                const submissions = await SubmissionService.getSubmissionsByChallengeId(challengeId);

                return dispatch(success(submissions));
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            };
        };

        function request() { return { type: SubmissionConstants.GET_SUBMISSIONS_OF_CHALLENGE_REQUEST } }
        function success(submissions: SubmissionModel[]) { return { type: SubmissionConstants.GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS, payload: submissions } }
        function failure(error: string) { return { type: SubmissionConstants.GET_SUBMISSIONS_OF_CHALLENGE_FAILURE, payload: error } }
    };

    export const submitFile: ActionCreator<ThunkAction<Promise<Action>, RootState.SubmissionState, void>> = (data: FormData, callback: () => void) => {
        return async (dispatch: Dispatch<RootState.SubmissionState>): Promise<Action> => {
            dispatch(request());

            try {
                //const {data} = await axios.post(`${BASE_URL}/submitFile`, data);
                await new Promise(resolve => setTimeout(resolve, 3000));
                const disp = dispatch(success());

                callback();
                return disp;
            } catch (err) {
                // const { data } = err.response;
                // payload: data.error

                return dispatch(failure('validation:submissionUploadFail'));
            };
        };

        function request() { return { type: SubmissionConstants.SUBMIT_FILE_REQUEST } }
        function success() { return { type: SubmissionConstants.SUBMIT_FILE_SUCCESS } }
        function failure(error: string) { return { type: SubmissionConstants.SUBMIT_FILE_FAILURE, payload: error } }
    };
};

export type SubmissionActions = typeof SubmissionActions;
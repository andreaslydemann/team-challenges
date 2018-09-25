import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { SubmissionModel } from '../models';
import { SubmissionActions } from '../actions';

const initialState: RootState.SubmissionState =
{
    submissions: [{
        id: '',
        status: SubmissionModel.Status.NOT_SUBMITTED,
        createdAt: null,
        challengeId: '',
        teamId: ''
    }],
    loading: false,
    uploading: false,
    error: ''
};

export const submissionReducer = handleActions<RootState.SubmissionState, any>({
    [SubmissionActions.Type.GET_SUBMISSIONS_OF_TEAM]:
        (state: RootState.SubmissionState): RootState.SubmissionState => {
            return { ...state, loading: true };
        },

    [SubmissionActions.Type.GET_SUBMISSIONS_OF_TEAM_SUCCESS]:
        (state: RootState.SubmissionState, action: Action<SubmissionModel[]>): RootState.SubmissionState => {
            return { ...state, submissions: action.payload, loading: false };
        },

    [SubmissionActions.Type.GET_SUBMISSIONS_OF_CHALLENGE]:
        (state: RootState.SubmissionState): RootState.SubmissionState => {
            return { ...state, loading: true };
        },

    [SubmissionActions.Type.GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.SubmissionState, action: Action<SubmissionModel[]>): RootState.SubmissionState => {
            return { ...state, submissions: action.payload, loading: false };
        },

    [SubmissionActions.Type.SUBMIT_FILE]:
        (state: RootState.SubmissionState): RootState.SubmissionState => ({ ...state, uploading: true, error: '' }),

    [SubmissionActions.Type.SUBMIT_FILE_SUCCESS]:
        (state: RootState.SubmissionState): RootState.SubmissionState => ({ ...state, uploading: false }),

    [SubmissionActions.Type.GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.SubmissionState, action: Action<string>): RootState.SubmissionState => {
            return { ...state, uploading: false, error: action.payload };
        },
}, initialState);
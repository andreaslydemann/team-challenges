import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { SubmissionModel } from '../models';
import { SubmissionConstants } from '../constants';

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
    [SubmissionConstants.GET_SUBMISSIONS_OF_TEAM_REQUEST]:
        (state: RootState.SubmissionState): RootState.SubmissionState => {
            return { ...state, loading: true };
        },

    [SubmissionConstants.GET_SUBMISSIONS_OF_TEAM_SUCCESS]:
        (state: RootState.SubmissionState, action: Action<SubmissionModel[]>): RootState.SubmissionState => {
            return { ...state, submissions: action.payload, loading: false };
        },

    [SubmissionConstants.GET_SUBMISSIONS_OF_CHALLENGE_REQUEST]:
        (state: RootState.SubmissionState): RootState.SubmissionState => {
            return { ...state, loading: true };
        },

    [SubmissionConstants.GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.SubmissionState, action: Action<SubmissionModel[]>): RootState.SubmissionState => {
            return { ...state, submissions: action.payload, loading: false };
        },

    [SubmissionConstants.SUBMIT_FILE_REQUEST]:
        (state: RootState.SubmissionState): RootState.SubmissionState => ({ ...state, uploading: true, error: '' }),

    [SubmissionConstants.SUBMIT_FILE_SUCCESS]:
        (state: RootState.SubmissionState): RootState.SubmissionState => ({ ...state, uploading: false, error: '' }),

    [SubmissionConstants.SUBMIT_FILE_FAILURE]:
        (state: RootState.SubmissionState, action: Action<string>): RootState.SubmissionState => {
            return { ...state, uploading: false, error: action.payload };
        },
}, initialState);
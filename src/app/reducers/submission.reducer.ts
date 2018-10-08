import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { SubmissionModel } from '../models';
import { SubmissionTypes } from '../types';

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
    [SubmissionTypes.GET_SUBMISSIONS_OF_TEAM_REQUEST]:
        (state: RootState.SubmissionState): RootState.SubmissionState => {
            return { ...state, loading: true };
        },

    [SubmissionTypes.GET_SUBMISSIONS_OF_TEAM_SUCCESS]:
        (state: RootState.SubmissionState, action: Action<SubmissionModel[]>): RootState.SubmissionState => {
            return { ...state, submissions: action.payload, loading: false };
        },

    [SubmissionTypes.GET_SUBMISSIONS_OF_CHALLENGE_REQUEST]:
        (state: RootState.SubmissionState): RootState.SubmissionState => {
            return { ...state, loading: true };
        },

    [SubmissionTypes.GET_SUBMISSIONS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.SubmissionState, action: Action<SubmissionModel[]>): RootState.SubmissionState => {
            return { ...state, submissions: action.payload, loading: false };
        },

    [SubmissionTypes.SUBMIT_FILE_REQUEST]:
        (state: RootState.SubmissionState): RootState.SubmissionState => ({ ...state, uploading: true, error: '' }),

    [SubmissionTypes.SUBMIT_FILE_SUCCESS]:
        (state: RootState.SubmissionState): RootState.SubmissionState => ({ ...state, uploading: false, error: '' }),

    [SubmissionTypes.SUBMIT_FILE_FAILURE]:
        (state: RootState.SubmissionState, action: Action<string>): RootState.SubmissionState => {
            return { ...state, uploading: false, error: action.payload };
        },
}, initialState);
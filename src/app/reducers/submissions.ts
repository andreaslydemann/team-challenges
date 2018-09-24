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
    loading: false
};

export const submissionReducer = handleActions<RootState.SubmissionState, SubmissionModel[]>({
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
}, initialState);
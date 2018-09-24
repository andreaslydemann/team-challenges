import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { RatingModel } from '../models';
import { RatingActions } from '../actions';

const initialState: RootState.RatingState =
{
    ratings: [{
        id: '',
        scorePercentage: 0,
        comment: '',
        submissionId: '',
    }],
    loading: false
};

export const ratingReducer = handleActions<RootState.RatingState, RatingModel[]>({
    [RatingActions.Type.GET_RATINGS_OF_TEAM]:
        (state: RootState.RatingState): RootState.RatingState => {
            return { ...state, loading: true };
        },

    [RatingActions.Type.GET_RATINGS_OF_TEAM_SUCCESS]:
        (state: RootState.RatingState, action: Action<RatingModel[]>): RootState.RatingState => {
            return { ...state, ratings: action.payload, loading: false };
        },

    [RatingActions.Type.GET_RATINGS_OF_CHALLENGE]:
        (state: RootState.RatingState): RootState.RatingState => {
            return { ...state, loading: true };
        },

    [RatingActions.Type.GET_RATINGS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.RatingState, action: Action<RatingModel[]>): RootState.RatingState => {
            return { ...state, ratings: action.payload, loading: false };
        },
}, initialState);
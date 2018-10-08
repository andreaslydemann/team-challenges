import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { RatingModel } from '../models';
import { RatingTypes } from '../types';

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
    [RatingTypes.GET_RATINGS_OF_TEAM_REQUEST]:
        (state: RootState.RatingState): RootState.RatingState => {
            return { ...state, loading: true };
        },

    [RatingTypes.GET_RATINGS_OF_TEAM_SUCCESS]:
        (state: RootState.RatingState, action: Action<RatingModel[]>): RootState.RatingState => {
            return { ...state, ratings: action.payload, loading: false };
        },

    [RatingTypes.GET_RATINGS_OF_CHALLENGE_REQUEST]:
        (state: RootState.RatingState): RootState.RatingState => {
            return { ...state, loading: true };
        },

    [RatingTypes.GET_RATINGS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.RatingState, action: Action<RatingModel[]>): RootState.RatingState => {
            return { ...state, ratings: action.payload, loading: false };
        },
}, initialState);
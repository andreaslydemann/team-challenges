import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { RatingModel } from '../models';
import { RatingActions } from '../actions';

const initialState: RootState.RatingState =
{
    ratings: [{
        id: "123",
        scorePercentage: 50,
        comment: "Not bad",
        submissionId: "123k",
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
}, initialState);
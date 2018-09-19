import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { ChallengeModel } from '../models';
import { ChallengeActions } from '../actions';

const initialState: RootState.ChallengeState =
{
  challenges: [{
    id: '',
    name: '',
    description: '',
    createdAt: new Date()
  }],
  loading: false
};

export const challengeReducer = handleActions<RootState.ChallengeState, ChallengeModel[]>({
  [ChallengeActions.Type.GET_CHALLENGES]:
    (state: RootState.ChallengeState): RootState.ChallengeState => {
      return { ...state, loading: true };
    },

  [ChallengeActions.Type.GET_CHALLENGES_SUCCESS]:
    (state: RootState.ChallengeState, action: Action<ChallengeModel[]>): RootState.ChallengeState => {
      return { ...state, challenges: action.payload, loading: false };
    },

}, initialState);
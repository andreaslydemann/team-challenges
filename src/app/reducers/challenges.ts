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
    createdAt: null
  }],
  challengeDetails: {
    id: '',
    name: '',
    description: '',
    createdAt: null,
    file: {}
  },
  loading: false,
  error: ''
};

export const challengeReducer = handleActions<RootState.ChallengeState, any>({
  [ChallengeActions.Type.GET_CHALLENGES]:
    (state: RootState.ChallengeState): RootState.ChallengeState => {
      return { ...state, loading: true };
    },

  [ChallengeActions.Type.GET_CHALLENGES_SUCCESS]:
    (state: RootState.ChallengeState, action: Action<ChallengeModel[]>): RootState.ChallengeState => {
      return { ...state, challenges: action.payload, loading: false, error: '' };
    },

  [ChallengeActions.Type.GET_CHALLENGE]:
    (state: RootState.ChallengeState): RootState.ChallengeState => {
      return { ...state, loading: true };
    },

  [ChallengeActions.Type.GET_CHALLENGE_SUCCESS]:
    (state: RootState.ChallengeState, action: Action<ChallengeModel.ChallengeDetailsModel>): RootState.ChallengeState => {
      return { ...state, challengeDetails: action.payload, loading: false, error: '' };
    },

  [ChallengeActions.Type.GET_CHALLENGE_FAIL]:
    (state: RootState.ChallengeState, action: Action<string>): RootState.ChallengeState => {
      return { ...state, error: action.payload, loading: false };
    },
  [ChallengeActions.Type.SELECT_FILE]: (state, action) => {
    if (action.payload)
      return { ...state, challengeDetails: { ...state.challengeDetails, file: action.payload } };
    else
      return state;
  },
  [ChallengeActions.Type.REMOVE_FILE]: (state) => ({ ...state, challengeDetails: { ...state.challengeDetails, file: null } }),
}, initialState);
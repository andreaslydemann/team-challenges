import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { ChallengeModel } from '../models';
import { ChallengeTypes } from '../types';

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
    file: null
  },
  loading: false,
  error: ''
};

export const challengeReducer = handleActions<RootState.ChallengeState, any>({
  [ChallengeTypes.GET_CHALLENGES_REQUEST]:
    (state: RootState.ChallengeState): RootState.ChallengeState => {
      return { ...state, loading: true };
    },

  [ChallengeTypes.GET_CHALLENGES_SUCCESS]:
    (state: RootState.ChallengeState, action: Action<ChallengeModel[]>): RootState.ChallengeState => {
      return { ...state, challenges: action.payload, loading: false, error: '' };
    },

  [ChallengeTypes.GET_CHALLENGE_REQUEST]:
    (state: RootState.ChallengeState): RootState.ChallengeState => {
      return { ...state, loading: true };
    },

  [ChallengeTypes.GET_CHALLENGE_SUCCESS]:
    (state: RootState.ChallengeState, action: Action<ChallengeModel.ChallengeDetailsModel>): RootState.ChallengeState => {
      return { ...state, challengeDetails: action.payload, loading: false, error: '' };
    },

  [ChallengeTypes.GET_CHALLENGE_FAILURE]:
    (state: RootState.ChallengeState, action: Action<string>): RootState.ChallengeState => {
      return { ...state, error: action.payload, loading: false };
    },

  [ChallengeTypes.SELECT_FILE]: (state: RootState.ChallengeState, action: any): RootState.ChallengeState => {
    if (action.payload)
      return { ...state, challengeDetails: { ...state.challengeDetails, file: action.payload } };
    else
      return state;
  },

  [ChallengeTypes.REMOVE_FILE]: (state: RootState.ChallengeState): RootState.ChallengeState => {
    return { ...state, challengeDetails: { ...state.challengeDetails, file: null } }
  },
}, initialState);
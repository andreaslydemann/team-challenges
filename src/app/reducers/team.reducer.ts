import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { TeamModel } from '../models';
import { TeamTypes } from '../types';

const initialState: RootState.TeamState =
{
    teams: [{
        id: '',
        name: '',
        numberOfMembers: 0
    }],
    loading: false
};

export const teamReducer = handleActions<RootState.TeamState, TeamModel[]>({
    [TeamTypes.GET_TEAMS_REQUEST]:
        (state: RootState.TeamState): RootState.TeamState => {
            return { ...state, loading: true };
        },

    [TeamTypes.GET_TEAMS_SUCCESS]:
        (state: RootState.TeamState, action: Action<TeamModel[]>): RootState.TeamState => {
            return { ...state, teams: action.payload, loading: false };
        },

    [TeamTypes.GET_TEAMS_OF_CHALLENGE_REQUEST]:
        (state: RootState.TeamState): RootState.TeamState => {
            return { ...state, loading: true };
        },

    [TeamTypes.GET_TEAMS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.TeamState, action: Action<TeamModel[]>): RootState.TeamState => {
            return { ...state, teams: action.payload, loading: false };
        },
}, initialState);
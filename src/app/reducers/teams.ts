import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { TeamModel } from '../models';
import { TeamActions } from '../actions';

const initialState: RootState.TeamState =
{
    teams: [{
        id: "team1",
        name: "Team Falcon",
    }],
    loading: false
};

export const teamReducer = handleActions<RootState.TeamState, TeamModel[]>({
    [TeamActions.Type.GET_TEAMS]:
        (state: RootState.TeamState): RootState.TeamState => {
            return { ...state, loading: true };
        },

    [TeamActions.Type.GET_TEAMS_SUCCESS]:
        (state: RootState.TeamState, action: Action<TeamModel[]>): RootState.TeamState => {
            return { ...state, teams: action.payload, loading: false };
        },

    [TeamActions.Type.GET_TEAMS_OF_CHALLENGE]:
        (state: RootState.TeamState): RootState.TeamState => {
            return { ...state, loading: true };
        },

    [TeamActions.Type.GET_TEAMS_OF_CHALLENGE_SUCCESS]:
        (state: RootState.TeamState, action: Action<TeamModel[]>): RootState.TeamState => {
            return { ...state, teams: action.payload, loading: false };
        },
}, initialState);
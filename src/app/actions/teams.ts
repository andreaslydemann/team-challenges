import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';

export namespace TeamActions {
    export enum Type {
        GET_TEAMS = 'GET_TEAMS',
        GET_TEAMS_SUCCESS = 'GET_TEAMS_SUCCESS',
        GET_TEAMS_FAIL = 'GET_TEAMS_FAIL',
        GET_TEAMS_OF_CHALLENGE = 'GET_TEAMS_OF_CHALLENGE',
        GET_TEAMS_OF_CHALLENGE_SUCCESS = 'GET_TEAMS_OF_CHALLENGE_SUCCESS',
        GET_TEAMS_OF_CHALLENGE_FAIL = 'GET_TEAMS_OF_CHALLENGE_FAIL',
    }

    export const getTeams: ActionCreator<ThunkAction<Action, RootState.TeamState, void>> = () => {
        return (dispatch: Dispatch<RootState.TeamState>): Action => {

            dispatch({
                type: Type.GET_TEAMS
            });

            const teams = [{
                id: "team1",
                name: "Team Falcon",
            }]

            return dispatch({
                type: Type.GET_TEAMS_SUCCESS,
                payload: teams
            });
        };
    };

    export const getTeamsOfChallenge: ActionCreator<ThunkAction<Action, RootState.TeamState, void>> = (challengeId: string) => {
        return (dispatch: Dispatch<RootState.TeamState>): Action => {

            dispatch({
                type: Type.GET_TEAMS_OF_CHALLENGE
            });

            const teams = [{
                id: "team1",
                name: "Team Falcon",
            },
            {
                id: "team2",
                name: "Team Roadster",
            }]

            return dispatch({
                type: Type.GET_TEAMS_OF_CHALLENGE_SUCCESS,
                payload: teams
            });
        };
    };
}

export type TeamActions = Omit<typeof TeamActions, 'Type'>;
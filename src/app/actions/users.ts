import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';

export namespace UserActions {
    export enum Type {
        GET_USERS = 'GET_USERS',
        GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
        GET_USERS_FAIL = 'GET_USERS_FAIL',
        GET_USERS_OF_TEAM = 'GET_USERS_OF_TEAM',
        GET_USERS_OF_TEAM_SUCCESS = 'GET_USERS_OF_TEAM_SUCCESS',
        GET_USERS_OF_TEAM_FAIL = 'GET_USERS_OF_TEAM_FAIL',
    }

    export const getUsers: ActionCreator<ThunkAction<Action, RootState.TeamState, void>> = () => {
        return (dispatch: Dispatch<RootState.TeamState>): Action => {
            dispatch({ type: Type.GET_USERS });

            const teams = [{
                id: "team1",
                name: "Team Falcon",
            }]

            try {
                return dispatch({
                    type: Type.GET_USERS_SUCCESS,
                    payload: teams
                });
            } catch (err) {
                return dispatch({
                    type: Type.GET_USERS_FAIL,
                    payload: 'validation:genericErrorMessage'
                });
            };
        };
    };

    export const getUsersByTeamId: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = (challengeId: string) => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch({ type: Type.GET_USERS_OF_TEAM });

            const teams = [{
                id: "team1",
                name: "Team Falcon",
            },
            {
                id: "team2",
                name: "Team Roadster",
            }];

            try {
                return dispatch({
                    type: Type.GET_USERS_OF_TEAM_SUCCESS,
                    payload: teams
                });
            } catch (err) {
                return dispatch({
                    type: Type.GET_USERS_OF_TEAM_FAIL,
                    payload: 'validation:genericErrorMessage'
                });
            };
        };
    };
};

export type UserActions = Omit<typeof UserActions, 'Type'>;
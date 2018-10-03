import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { UserConstants } from '../constants';
import { UserService } from '../services';

export namespace UserActions {
    export const getUsers: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = () => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch(request());

            const teams = await UserService.getUsers();

            try {
                return dispatch(success(teams));
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            };
        };

        function request() { return { type: UserConstants.GET_USERS_REQUEST } }
        function success(teams: any) { return { type: UserConstants.GET_USERS_SUCCESS, payload: teams } }
        function failure(error: string) { return { type: UserConstants.GET_USERS_FAILURE, payload: error } }
    };

    export const getUsersByTeamId: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = (teamId: string) => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch(request());

            const teams = await UserService.getUsersByTeamId(teamId);

            try {
                return dispatch(success(teams));
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            };
        };

        function request() { return { type: UserConstants.GET_USERS_OF_TEAM_REQUEST } }
        function success(teams: any) { return { type: UserConstants.GET_USERS_OF_TEAM_SUCCESS, payload: teams } }
        function failure(error: string) { return { type: UserConstants.GET_USERS_OF_TEAM_FAILURE, payload: error } }
    };
};

export type UserActions = typeof UserActions;
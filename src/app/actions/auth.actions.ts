
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { AuthTypes } from '../types';
import { AuthService } from '../services';
import { UserModel } from '../models';

export namespace UserActions {
    export const signIn: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = () => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch(request());

            try {
                const user = await AuthService.signIn();

                return dispatch(success(user));
            } catch (err) {
                return failure('validation:genericErrorMessage');
            }
        };

        function request() { return { type: AuthTypes.SIGN_IN_REQUEST } }
        function success(user: UserModel) { return { type: AuthTypes.SIGN_IN_SUCCESS, payload: user } }
        function failure(error: string) { return { type: AuthTypes.SIGN_IN_FAILURE, payload: error } }
    };

    export const register: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = () => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch(request());

            try {
                await AuthService.register();

                return dispatch(success());
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            }
        };

        function request() { return { type: AuthTypes.REGISTER_REQUEST } }
        function success() { return { type: AuthTypes.REGISTER_SUCCESS } }
        function failure(error: string) { return { type: AuthTypes.REGISTER_FAILURE, payload: error } }
    };

    export const signOut: ActionCreator<ThunkAction<Action, RootState.TeamState, void>> = () => {
        return (dispatch: Dispatch<RootState.TeamState>): Action => {
            AuthService.signOut();

            return dispatch({ type: AuthTypes.SIGN_OUT });
        };
    };
};

export type UserActions = typeof UserActions;
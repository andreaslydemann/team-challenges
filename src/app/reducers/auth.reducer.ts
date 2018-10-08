import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { UserModel } from '../models';
import { AuthTypes } from '../types';

const initialState: RootState.AuthState =
{
    currentUser: {
        id: '',
        username: '',
        teamId: ''
    },
    authenticated: false,
    loading: false
};

export interface UserModel {
    id: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
    teamId: string;
}

export const authReducer = handleActions<RootState.AuthState, any>({
    [AuthTypes.SIGN_IN_REQUEST]:
        (state: RootState.AuthState): RootState.AuthState => {
            return { ...state, loading: true };
        },

    [AuthTypes.SIGN_IN_SUCCESS]:
        (state: RootState.AuthState, action: Action<UserModel>): RootState.AuthState => {
            return { ...state, currentUser: action.payload, authenticated: true, loading: false };
        },

    [AuthTypes.SIGN_IN_SUCCESS]:
        (state: RootState.AuthState): RootState.AuthState => {
            return { ...state, loading: false };
        },

    [AuthTypes.SIGN_OUT]:
        (state: RootState.AuthState): RootState.AuthState => {
            return { ...state, currentUser: null, authenticated: false, loading: false };
        },
}, initialState);
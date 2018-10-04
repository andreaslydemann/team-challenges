import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { UserModel } from '../models';
import { UserConstants } from '../constants';

const initialState: RootState.UserState =
{
    users: [{
        id: '',
        username: '',
        teamId: ''
    }],
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

export const userReducer = handleActions<RootState.UserState, UserModel[]>({
    [UserConstants.GET_USERS_REQUEST]:
        (state: RootState.UserState): RootState.UserState => {
            return { ...state, loading: true };
        },

    [UserConstants.GET_USERS_SUCCESS]:
        (state: RootState.UserState, action: Action<UserModel[]>): RootState.UserState => {
            return { ...state, users: action.payload, loading: false };
        },

    [UserConstants.GET_USERS_OF_TEAM_REQUEST]:
        (state: RootState.UserState): RootState.UserState => {
            return { ...state, loading: true };
        },

    [UserConstants.GET_USERS_OF_TEAM_SUCCESS]:
        (state: RootState.UserState, action: Action<UserModel[]>): RootState.UserState => {
            return { ...state, users: action.payload, loading: false };
        },
}, initialState);
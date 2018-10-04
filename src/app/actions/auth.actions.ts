
/*import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
// import jwt from 'jsonwebtoken';
import setAuthToken from '../utils/setAuthToken';
import { UserConstants } from '../constants';

export namespace UserActions {
    export function setCurrentUser(currentUser: any) {
        return {
            type: SET_CURRENT_USER,
            user: currentUser,
            authenticated: true
        };
    }

    export function unsetCurrentUser() {
        return {
            type: UNAUTH_USER,
            user: {},
            authenticated: false
        };
    }

    export const signIn: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = () => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch({ type: Type.SIGN_IN_USER });

            try {
                //const {data} = await axios.post(`${BASE_URL}/signIn`, userDetails);
                //dispatch({ type: Type.SIGN_IN_USER_SUCCESS });
                //const token = data.Token;
                //sessionStorage.setItem('token', token);
                //setAuthToken(token);
                //const decoded = jwt.decode(data.Token);
                //dispatch(setCurrentUser(decoded.currentUser));

            } catch (err) {
                console.log(err);
            }
        };

        function request() { return { type: Type.GET_USERS } }
    };

    export const register: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = () => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch({ type: Type.REGISTER_USER });

            try {
                //const {data} = await axios.post(`${BASE_URL}/signUp`, userDetails);
                //dispatch({ type: Type.REGISTER_USER_SUCCESS });
                //const token = data.Token;
                //sessionStorage.setItem('token', token);
                //setAuthToken(token);
                //const decoded = jwt.decode(data.Token);
                //dispatch(setCurrentUser(decoded.currentUser));

            } catch (err) {
                console.log(err.response.data.message);
            }
        };
    };

    export const signOut: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = () => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            sessionStorage.setItem('token', null);
            setAuthToken(false);
            dispatch(unsetCurrentUser());
        };
    };

};

export type UserActions = Omit<typeof UserActions, 'Type'>;*/
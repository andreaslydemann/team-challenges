import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';
import { TeamConstants } from '../constants';
import { TeamService } from '../services';
import { UserActions } from '.';

export namespace TeamActions {
    export const initTeams = () => (dispatch: Dispatch<any>) => {
        dispatch(getTeams());
        dispatch(UserActions.getUsers());
    };

    export const getTeams: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = () => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch(request());

            const teams = await TeamService.getTeams();

            return dispatch(success(teams));
        };

        function request() { return { type: TeamConstants.GET_TEAMS_REQUEST } }
        function success(teams: any) { return { type: TeamConstants.GET_TEAMS_SUCCESS, payload: teams } }
        //function failure(error: string) { return { type: TeamConstants.GET_TEAMS_FAILURE, payload: error } }
    };

    export const getTeamsByChallengeId: ActionCreator<ThunkAction<Promise<Action>, RootState.TeamState, void>> = (challengeId: string) => {
        return async (dispatch: Dispatch<RootState.TeamState>): Promise<Action> => {
            dispatch(request());
            
            const teams = await TeamService.getTeamsByChallengeId(challengeId);

            try {
                return dispatch(success(teams));
            } catch (err) {
                return dispatch(failure('validation:genericErrorMessage'));
            };
        };

        function request() { return { type: TeamConstants.GET_TEAMS_OF_CHALLENGE_REQUEST } }
        function success(teams: any) { return { type: TeamConstants.GET_TEAMS_OF_CHALLENGE_SUCCESS, payload: teams } }
        function failure(error: string) { return { type: TeamConstants.GET_TEAMS_OF_CHALLENGE_FAILURE, payload: error } }
    };
};

export type TeamActions = typeof TeamActions;
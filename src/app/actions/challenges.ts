// import { createAction } from 'redux-actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';

export namespace ChallengeActions {
  export enum Type {
    GET_CHALLENGES = 'GET_CHALLENGES',
    GET_CHALLENGES_SUCCESS = 'GET_CHALLENGES_SUCCESS',
    GET_CHALLENGES_FAIL = 'GET_CHALLENGES_FAIL',
    GET_CHALLENGE = 'GET_CHALLENGE',
    GET_CHALLENGE_SUCCESS = 'GET_CHALLENGE_SUCCESS',
    GET_CHALLENGE_FAIL = 'GET_CHALLENGE_FAIL',
  }

  export const getChallenges: ActionCreator<ThunkAction<Action, RootState.ChallengeState, void>> = () => {
    return (dispatch: Dispatch<RootState.ChallengeState>): Action => {

      dispatch({
        type: Type.GET_CHALLENGES
      });

      const challenges = [{
        id: "ch1",
        name: 'Challenge 1',
        description: 'This is a challenge',
        createdAt: new Date()
      },
      {
        id: "ch2",
        name: 'Challenge 2',
        description: 'This is a challenge',
        createdAt: new Date()
      }, {
        id: "ch3",
        name: 'Challenge 3',
        description: 'This is a challenge',
        createdAt: new Date()
      }]

      return dispatch({
        type: Type.GET_CHALLENGES_SUCCESS,
        payload: challenges
      });
    };
  };

  export const getChallenge: ActionCreator<ThunkAction<Action, RootState.ChallengeState, void>> = (id: string) => {
    return (dispatch: Dispatch<RootState.ChallengeState>): Action => {
      try {
        dispatch({
          type: Type.GET_CHALLENGE
        });

        const challenge = [{
          id: "ch1",
          name: 'Challenge 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          createdAt: new Date()
        }];

        const i = challenge.findIndex(x => x.id === id)

        if (i === -1) {
          throw (new Error('validation:challengeNotFound'))
        }

        return dispatch({
          type: Type.GET_CHALLENGE_SUCCESS,
          payload: challenge
        });
      } catch (err) {
        return dispatch({
          type: Type.GET_CHALLENGE_FAIL,
          payload: err.message
        });
      }
    };
  };

  /*
    const asyncThinkAction: ActionCreator<
    ThunkAction<Promise<Action>, IState, void>
  > = () => {
    return async (dispatch: Dispatch<IState>): Promise<Action> => {
      try {
        dispatch({
          type: SET_TEXT,
          data
        });

        let {data} = await axios.get(`${BUDGETBUD_FUNCTIONS_URL}/getDebts?budgetID=${budgetID}`, {
            headers: {Authorization: 'Bearer ' + token}
        });

        return dispatch({
          type: SET_TEXT,
          data
        });
      } catch (err) {
        return dispatch({
        let {data} = err.response;
        type: Type.GET_CHALLENGES_FAIL,
        payload: data
      });
      }
    };
  };
  */

  /*
    export const addTodo = createAction<PartialPick<TodoModel, 'text'>>(Type.ADD_TODO);
    export const editTodo = createAction<PartialPick<TodoModel, 'id'>>(Type.EDIT_TODO);
    export const deleteTodo = createAction<TodoModel['id']>(Type.DELETE_TODO);
    export const completeTodo = createAction<TodoModel['id']>(Type.COMPLETE_TODO);
    export const completeAll = createAction(Type.COMPLETE_ALL);
    export const clearCompleted = createAction(Type.CLEAR_COMPLETED);*/
}

export type ChallengeActions = Omit<typeof ChallengeActions, 'Type'>;
// import { createAction } from 'redux-actions';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/state';

export namespace ChallengeActions {
  export enum Type {
    GET_CHALLENGES = 'GET_CHALLENGES',
    GET_CHALLENGES_SUCCESS = 'GET_CHALLENGES_SUCCESS',
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
      },{
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
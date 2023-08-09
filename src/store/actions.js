import { nanoid } from 'nanoid';
import { actionTypes } from './actionType';

export const addTodo = payload => ({
  type: actionTypes.ADD_TODO,
  payload: { value: payload, id: nanoid() },
});
export const deleteTodo = payload => ({ type: 'DELETE_TODO', payload });

import { actionTypes } from './actionType';

export const todoReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

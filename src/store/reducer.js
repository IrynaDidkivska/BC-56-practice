import { actionTypes } from './actionsType';

export const reducer = (state, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case actionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      };
    default:
      return state;
  }
};

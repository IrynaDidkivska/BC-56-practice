import { TodoList } from 'TodoList';
import { nanoid } from 'nanoid';
import React, { useReducer, useState } from 'react';
import { actionTypes } from 'store/actionsType';
import { initialState } from 'store/initialState';
import { reducer } from 'store/reducer';
export const App = () => {
  const [value, setvalue] = useState('');

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleAddButton = () => {
    dispatch({
      type: actionTypes.ADD_TODO,
      payload: { id: nanoid(), title: value },
    });
  };
  const handleDeleteTodo = id => {
    dispatch({ type: actionTypes.DELETE_TODO, payload: id });
  };
  return (
    <div>
      <input
        value={value}
        onChange={e => setvalue(e.target.value)}
        type="text"
      />
      <button onClick={handleAddButton}>ADD todo</button>
      <TodoList data={state.todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

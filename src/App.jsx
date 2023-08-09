import { TodoList } from 'TodoList';
import { nanoid } from 'nanoid';
import React, { useReducer, useState } from 'react';
import { actionTypes } from 'store/actionType';
import { addTodo } from 'store/actions';
import { initialState } from 'store/initialState';
import { todoReducer } from 'store/reducer';

export const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [value, setvalue] = useState('');
  const handleAddTodo = () => {
    dispatch(addTodo(value));
  };

  return (
    <div>
      <input
        value={value}
        onChange={e => setvalue(e.target.value)}
        type="text"
      />
      <button onClick={() => handleAddTodo('Hello')}>ADD todo</button>
      <TodoList data={state.todos} dispatch={dispatch} />
    </div>
  );
};

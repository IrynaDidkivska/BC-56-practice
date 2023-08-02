// строка для курсора
import React, { Component } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { styled } from 'styled-components';
import { TodoList } from './Form/TodoList';
import { AddTodoForm } from './AddTodoForm/AddTodoForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    user: {
      name: '',
      password: '',
      isLoggedIn: false,
    },
    todos: [
      { id: 123, task: 'Call friend', isCompleted: true },
      { id: 2, task: 'Runing', isCompleted: false },
      { id: 3, task: 'Buy milk', isCompleted: false },
    ],
  };

  handleLogin = user => {
    this.setState({ user: { ...user, isLoggedIn: true } });
  };

  handleLogOut = () => {
    this.setState(prev => ({
      user: { ...prev.user, isLoggedIn: !prev.user.isLoggedIn },
    }));
  };

  handleToggleTodo = id => {
    this.setState(prev => ({
      todos: prev.todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  };

  hendleDeletedSelected = () => {
    this.setState(prev => ({
      todos: prev.todos.filter(todo => !todo.isCompleted),
    }));
  };

  handleAddTodo = item => {
    this.setState(prev => ({
      todos: [...prev.todos, { task: item, id: nanoid(), isCompleted: false }],
    }));
  };
  render() {
    const { todos } = this.state;
    if (!this.state.user.isLoggedIn) {
      return <LoginForm onLogin={this.handleLogin} />;
    }
    return (
      <>
        {this.state.user.isLoggedIn ? (
          <Text>U are online</Text>
        ) : (
          <Text>U are offline</Text>
        )}
        <Button onClick={this.handleLogOut}>Logout</Button>

        <hr />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
        <hr />
        <TodoList
          data={todos}
          onToggle={this.handleToggleTodo}
          onDeleteSelected={this.hendleDeletedSelected}
        />
      </>
    );
  }
}

export const Text = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const Button = styled.button`
  display: block;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  transition: all 300ms linear;
  &:hover {
    scale: 1.1;
    background-color: #649eff;
  }
`;

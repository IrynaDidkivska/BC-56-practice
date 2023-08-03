// строка для курсора
import React, { Component } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { styled } from 'styled-components';
import { TodoList } from './TodoList/TodoList';
import { AddTodoForm } from './AddTodoForm/AddTodoForm';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

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
    bgColor: 'white',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos.length !== prevState.todos.length) {
      console.log('update data =>', this.state.todos);
      window.localStorage.setItem('todos', JSON.stringify(this.state.todos));

      if (this.state.todos.length > 5) {
        this.setState({ bgColor: 'teal' });
      }
      if (this.state.todos.length > 7) {
        this.setState({ bgColor: 'red' });
      }
      if (this.state.todos.length > 10) {
        this.handleClear();
      }
    }
  }
  componentDidMount() {
    const dataOfTodo = JSON.parse(localStorage.getItem('todos'));
    if (dataOfTodo.length) {
      this.setState({ todos: dataOfTodo });
    }
  }

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
    toast.success(`${item} was add.`);
  };

  handleDelTodo = id => {
    this.setState(prev => ({
      todos: prev.todos.filter(item => {
        if (item.id !== id) {
          return item;
        } else return null;
      }),
    }));
  };

  handleClear = () => {
    this.setState({ todos: [] });
  };

  render() {
    const { todos } = this.state;
    if (!this.state.user.isLoggedIn) {
      return <LoginForm onLogin={this.handleLogin} />;
    }
    return (
      <div style={{ backgroundColor: this.state.bgColor }}>
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
          onDelete={this.handleDelTodo}
          data={todos}
          onToggle={this.handleToggleTodo}
          onDeleteSelected={this.hendleDeletedSelected}
          onClear={this.handleClear}
        />
      </div>
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

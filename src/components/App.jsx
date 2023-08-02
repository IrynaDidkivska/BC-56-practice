// строка для курсора
import React, { Component } from 'react';
import { LoginForm } from './LoginForm/LoginForm';
import { styled } from 'styled-components';

export class App extends Component {
  state = {
    user: {
      name: '',
      password: '',
      isLoggedIn: false,
    },
  };

  handleLogin = user => {
    this.setState({ user: { ...user, isLoggedIn: true } });
  };

  handleLogOut = () => {
    this.setState(prev => ({
      user: { ...prev.user, isLoggedIn: !prev.user.isLoggedIn },
    }));
  };

  render() {
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
      </>
    );
  }
}

export const Text = styled.p`
  text-align: center;
  font-weight: 600;
`;

export const Button = styled.button`
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

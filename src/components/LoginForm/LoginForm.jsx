import React, { Component } from 'react';
import { styled } from 'styled-components';

export class LoginForm extends Component {
  state = {
    name: '',
    password: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      name: '',
      password: '',
    });
  };
  handelChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, password } = this.state;
    return (
      <Wrapper>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            placeholder="enter your name"
            name="name"
            value={name}
            onChange={this.handelChangeInput}
          />
          <Input
            type="password"
            placeholder="enter your password"
            name="password"
            value={password}
            onChange={this.handelChangeInput}
          />
          <Button>LogIn</Button>
        </form>
      </Wrapper>
    );
  }
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 10px;
`;
export const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
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

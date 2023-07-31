import React, { Component } from 'react';

// value={21}

export default class App extends Component {
  static defaultProps = {
    message: 'Default',
  };
  state = {
    counter: 2,
    message: this.props.message,
    items: [
      {
        id: '1',
        value: '1233412',
        completed: false,
        user: { age: 21, name: 'Stepan' },
      },
      { id: '2', value: '1233412', completed: true },
    ],
  };

  handleChangeMessage = () => {
    this.setState({ message: 'Goodbye' });
  };

  handleToggle = id => {
    this.setState(prev => ({
      items: prev.items.map(item =>
        item.id === id ? { ...item, user: { ...item.user, age: 24 } } : item
      ),
    }));
  };

  handleDeleteItem = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));
  };
  handleChangeInput = e => {
    this.setState({ value: e.target.value });
  };
  handleClear = () => {
    this.setState({ items: [] });
  };

  handleMultiply = () => {
    this.setState(prevState => ({ counter: prevState.counter * 2 }));
  };

  render() {
    const { message } = this.state;
    const { value } = this.props;
    return (
      <div onClick={() => this.handleClick()}>
        {message}
        {value}
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeInput}
        />
        <button onClick={this.handleChangeMessage}>Change</button>
        <button onClick={() => this.handleDeleteItem('id')}>Delete</button>
        <button onClick={this.handleClear}>Clear</button>
        <button onClick={this.handleMultiply}>Multiply</button>
      </div>
    );
  }
}

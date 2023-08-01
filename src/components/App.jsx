import React, { Component } from 'react';
import { Form } from './Form';

export class App extends Component {
  state = {
    items: [],
  };

  handleAddItem = item => {
    this.setState(prev => ({ items: [...prev.items, item] }));
  };

  render() {
    return (
      <div>
        <Form onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

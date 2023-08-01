import React, { Component } from 'react';
import { Form } from './Form';
import { FormList } from './FormList';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    items: [],
    filter: '',
  };

  handleAddItem = item => {
    this.setState(prev => ({
      items: [...prev.items, { ...item, id: nanoid() }],
    }));
  };
  handleDeleteItem = id => {
    this.setState(prev => ({
      items: prev.items.filter(item => item.id !== id),
    }));
  };
  handleClearAll = () => {
    this.setState({ items: [] });
  };
  getFilteredItems = () => {
    return this.state.items.filter(item =>
      item.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };
  getAmount = () => {
    return this.state.items.reduce(
      (total, currentItem) => total + currentItem.price,
      0
    );
  };
  render() {
    const { items, filter } = this.state;
    const itemsAmount = this.getAmount();
    const filteredItems = this.getFilteredItems();
    return (
      <div>
        <Form onAddItem={this.handleAddItem} />
        <p> Amount of items: {items.length}</p>
        <button onClick={this.handleClearAll}>Clear</button>
        <p> Total cost: {itemsAmount}</p>
        <input
          type="text"
          placeholder="Filter items"
          value={filter}
          onChange={e => this.setState({ filter: e.target.value })}
        />
        <FormList items={filteredItems} onDelete={this.handleDeleteItem} />
      </div>
    );
  }
}

import React from 'react';

export class Form extends React.Component {
  state = {
    name: '',
    price: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, price } = this.state;
    this.props.onAddItem({ name, price: Number(price) });

    this.setState({ name: '', price: '' });
  };

  render() {
    const { name, price } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          id=""
          value={name}
          onChange={this.handleInputChange}
        />
        <input
          type="number"
          name="price"
          id=""
          value={price}
          onChange={this.handleInputChange}
        />
        <button>Add item</button>
      </form>
    );
  }
}

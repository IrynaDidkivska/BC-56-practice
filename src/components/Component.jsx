import React, { Component } from 'react';

export default class Components extends Component {
  handleInit = event => {
    event.prevent.default();
  };
  render() {
    return (
      <div>
        <input></input>
      </div>
    );
  }
}

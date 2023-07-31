import React, { Component } from 'react';

// function App() {
//   return <div>App</div>;
// }

// export default App;

export class App extends Component {
  state = {
    android: 0,
    ios: 0,
  };

  // handleIncAndroid = () => {
  //   this.setState(prev => ({ android: prev.android + 1 }));
  // };

  // handleIncIos = () => {
  //   this.setState(prev => ({ ios: prev.ios + 1 }));
  // };

  handleIncValue = event => {
    const { name } = event.target;

    this.setState(prev => ({ [name]: prev[name] + 1 }));

    // if (name === 'android') {
    //   this.setState(prev => ({ android: prev.android + 1 }));
    // }

    // if (name === 'ios') {
    //   this.setState(prev => ({ ios: prev.ios + 1 }));
    // }

    switch (name) {
      case 'android': {
        this.setState(prev => ({ android: prev.android + 1 }));
        break;
      }
      case 'ios': {
        this.setState(prev => ({ ios: prev.ios + 1 }));
        break;
      }
      default: {
        console.log('error');
      }
    }
  };

  render() {
    const { android, ios } = this.state;

    return (
      <div>
        <h1>Voting</h1>
        <div>
          <div>
            <span>{android}</span>
            <h2>Android</h2>
            <button name="android" onClick={this.handleIncValue}>
              Vote
            </button>
          </div>
          <div>
            <span>{ios}</span>
            <h2>IOS</h2>
            <button name="ios" onClick={this.handleIncValue}>
              Vote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

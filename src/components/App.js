import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        Hello!
        {this.props.children}
      </div>
    );
  }
}

export default App;
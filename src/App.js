import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary" icon="search" shape="circle"></Button>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Nav from './Components/Nav';
import Slidebar from './Components/Slidebar';
import Shop from './Components/Shop';
import Rough from './Components/Rough';
import Main from './Components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <Slidebar />
          <Shop/>
          {/* <Main/> */}
      </div>
    );
  }
}

export default App;

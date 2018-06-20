import React, { Component } from 'react';
import './App.css';
import {Header, CountryList} from "./components";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CountryList />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import {Header, PageCountryList} from "./components";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <PageCountryList />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import {Header, PageCountryList} from "./components";


class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={PageCountryList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import List from "./components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/list">
              <List />
          </Route>
          <Route exact path="/create">
              <Create />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

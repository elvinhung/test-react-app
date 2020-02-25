import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TestComponent from "./TestComponent";
import Error from "./Error";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TestComponent} />
        <Route path="/error" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;

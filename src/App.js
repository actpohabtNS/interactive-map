import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import BuildingPage from './pages/BuildingPage'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BuildingPage} />
      </Switch>
    </Router>
  );
}

export default App;

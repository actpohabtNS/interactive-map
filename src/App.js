import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import BuildingPage from './pages/BuildingPage'
import FloorPage from './pages/FloorPage';
import PageNotFound from './pages/PageNotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ BuildingPage } />
        <Route exatc path="/404" component={ PageNotFound } />
        <Route path="/:floorId" component={ FloorPage } />
      </Switch>
    </Router>
  );
}

export default App;

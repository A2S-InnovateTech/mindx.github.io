import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Page imports below
import Homepage from './components/Homepage';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="Content">
        <Router>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Router>
      </div>      
    </div>
  );
}

export default App;

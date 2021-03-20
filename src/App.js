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
import StudentPanel from './components/StudentPanel/StudentPanel';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Content">
      <Router>
        <Switch>
          <Route path="/" exact><Homepage /></Route>
          <Route path="/s" exact component={StudentPanel} ></Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      </div>      
    </div>
  );
}

export default App;

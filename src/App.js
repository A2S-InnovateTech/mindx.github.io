import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Page imports below
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/Signup';
import StudentPanel from './components/StudentPanel/StudentPanel';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/signup" exact>
            <SignUp/>
          </Route>
          <div className="Content">
            <Route path="/" exact><Sidebar /><Homepage /></Route>
            <Route path="/s" exact><Sidebar /><StudentPanel /></Route>
            <Route path="/dashboard" exact>
              <Sidebar />
              <Dashboard />
            </Route>
        </div>
      </Switch>
      </Router>      
    </div>
  );
}

export default App;

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
import MobileHeader from './components/MobileHeader';
import Results from './components/Results';
import Results2 from './components/Results2';
import Assignment from './components/Assignment';
import Assesment from './components/Assesment';


function App() {
  return (
    <div className="OuterApp">
      <MobileHeader />
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
              <Route path="/results" exact>
            <Results/>
          </Route>
          <Route path="/results2" exact>
            <Results2/>
          </Route>
          <Route path="/assignment" exact>
            <Assignment/>
          </Route>
          <Route path="/assesment" exact>
            <Assesment/>
          </Route>
          </div>
          </Switch>
        </Router>      
      </div>
    </div>
    
  );
}

export default App;

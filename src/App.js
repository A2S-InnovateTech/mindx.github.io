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
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/signup" exact>
          <SignUp/>
        </Route>
      </Router>      
    </div>
  );
}

export default App;

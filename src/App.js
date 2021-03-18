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

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Router>      
    </div>
  );
}

export default App;

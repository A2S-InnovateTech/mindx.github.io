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
import Test from './components/TestScreen/Test';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact><Homepage /></Route>
          <Route path="/s" exact component={StudentPanel} ></Route>
          <Route path="/test" exact component={Test} ></Route>
        </Switch>
        
      </Router>  

    </div>
  );
}

export default App;

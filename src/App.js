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
import Dashboard from './components/TeacherDashboard/Dashboard';
import MyClasses from './components/MyClasses/MyClasses';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact><Homepage /></Route>
          <Route path="/s" exact component={StudentPanel} ></Route>
          <Route path="/test" exact component={Test} ></Route>
          <Route path="/dashboard" exact component={Dashboard} ></Route>
          <Route path="/myclasses" exact component={MyClasses} ></Route>
        </Switch>
        
      </Router>  

    </div>
  );
}

export default App;

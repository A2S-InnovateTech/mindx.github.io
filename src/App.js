import './App.css';
import React, {useState} from "react";
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
import Performance from './components/Performance';

import Report from './components/Report';
import Test from './components/Test';

function App() {
  var [showSidebar, setShowSidebar] = useState(true);
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="OuterApp">
      <Route path="/test" exact>
        <Test />
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/signup" exact>
        <SignUp/>
      </Route>
      <Route path="/" exact><Login /></Route>
      <div className="App">
          <Switch>  
            <div className="Content">
              <Route path="/assignment" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Assignment/>
              </Route>
              <Route path="/assesment" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Assesment/>
              </Route>
              <Route path="/s" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <StudentPanel />
              </Route>
              <Route path="/dashboard" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Dashboard />
              </Route>
              <Route path="/results" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Results/>
              </Route>
              <Route path="/results2" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Results2/>
              </Route>
              <Route path="/report" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Report />
              </Route>
              <Route path="/performance" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Performance/>
              </Route>
          </div>
        </Switch>
      </div>
    </div>
    </Router>      
    
  );
}

export default App;

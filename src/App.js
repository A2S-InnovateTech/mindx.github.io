import './App.css';
import React, {useState, useContext, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import Loader from "react-loader-spinner";


//Page imports below

import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/Signup';
import StudentPanel from './components/StudentPanel/StudentPanel';
import TeacherDashboard from './components/TeacherDashboard/Dashboard';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/profile/index';
import Popup from './components/popup/';
import  Teacherpopup from './components/teacher/popup/index';
import MobileHeader from './components/MobileHeader';
import Results from './components/Results';
import Results2 from './components/Results2';
import Assignment from './components/Assignment';
import Assesment from './components/Assesment';
import Performance from './components/Performance';

import Report from './components/Report';
import Test from './components/Test';
import firebase from 'firebase';
import app from './firebase';
import TeacherSignup from './components/TeacherSignup';
import MyClasses from './components/MyClasses/MyClasses';
import GoogleSignUpDetails from "./components/GoogleSignUpDetails";
import AssignmentsT from './AssignmentsT';

function App() {
  const [userDetails, setUserDetails] = useState([]);
  var [showSidebar, setShowSidebar] = useState(true);
  const [user, setUser] = useState(null);
  const [tookAssessment, setTookAssessment] = useState(false);
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserDetails = () => {
    console.log("fetching...");
      app.firestore().collection("users")
      .doc(user.uid)
      .get()
      .then((snapshot) => {
        setUserDetails(snapshot.data());
        console.log("Details", userDetails);
        console.log(isLoading);
      })
      .catch(e=>console.log(e));
  }

  const getSchoolName = (id) =>{
    app.firestore().collection("schools").doc(id)
    .get()
    .then((doc) => {
        if(doc.exists)  {
          setUserDetails(oldUserDetails=>{
            let oldObj = Object.assign({}, oldUserDetails);
            oldObj.school = doc.data().name;
            return oldObj;
          })
        }
    })
    .catch(e=>console.log(e));
  }

  useEffect(() => {
    if(userDetails!==[] && userDetails!==undefined)
      setIsLoading(false);
    getSchoolName(userDetails.school);
  }, [userDetails])

  useEffect(() => {
    setIsLoading(true);
      if(user){
          fetchUserDetails();
      }
  }, [user])

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        console.log(authUser);
        setUser(authUser);
      } else {
        //user logged out
        setUser(null);
      }
    });

    return () => {
      //perform cleanup
      unsubscribe();
    };
  }, [user]);

  return (

    <Router>
    <div className="OuterApp">
      <Route path="/test" render={(routeProps) => 
          <Test props={routeProps.location.state} user={user} fetchUserDetails={fetchUserDetails}/>
        } exact>
      </Route>
      <Route path="/login" exact>
        <Login setUser={setUser}/>
      </Route>
      <Route path="/signup" exact>
        <SignUp/>
      </Route>
      <Route path="/teacher/signup" exact>
        <TeacherSignup/>
      </Route>
      <Route path="/" exact>
        {user?<Redirect to="/dashboard" />:<Login setUser={setUser}/>}
      </Route>
      <Route path="/signup-details" exact>
        <GoogleSignUpDetails user={user} history={history}/>
      </Route>

      <Route 
        path="/logout" 
        render={ ()=>{
          firebase.auth().signOut().then(function() {
            firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
              //user logged in
              console.log(authUser);
              setUser(authUser);
            } else {
              //user logged out
              setUser(null);
            }});
            history?.push('/');
          })
        }} 
        exact
      />

      <div className="App">
          <Switch>  
            <div className="Content">
              <Route path="/assignment" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <Assignment/>
              </Route>
              <Route path="/assesment" render={(routeProps) => 
                <>
                  <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                  <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                  <Assesment props={routeProps.location.state}/>
                </>  
                } exact>
              </Route>
              <Route path="/s" render={(routeProps) => 
                <>
                  <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <StudentPanel props={routeProps.location.state} userDetails={userDetails}/>
                </>  
                } exact>
                
              </Route>
              <Route path="/dashboard" exact>{
                isLoading?(
                  <div className="LoadingScreen">
                    <div className="LoadingText">Loading</div>
                    <Loader
                      type="TailSpin"
                      color="#00BFFF"
                      height={100}
                      width={100}
                      timeout={3000} //3 secs
                    />
                  </div>
                )
                  :userDetails.userType=="teacher"?<Redirect to="/teacher/dashboard" />:
                  <>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                    <Dashboard user={user} userDetails={userDetails} setUserDetails={setUserDetails}/>
                  </>
              }
                {
                }
              </Route>
            
            <Route path="/teacher/dashboard" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <TeacherDashboard user={user} userDetails={userDetails} setUserDetails={setUserDetails}/>
              </Route>

            <Route path="/teacher/classes" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <MyClasses user={user} userDetails={userDetails} setUserDetails={setUserDetails}/>
              </Route>
              
              
              <Route path="/profile" exact>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} userDetails={userDetails}/>
                <Profile user={user} userDetails={userDetails}/>
              </Route>
              <Route path="/popup" exact>
             
                <Popup/>
              </Route>
              <Route path="/tpopup" exact>
             
                <Teacherpopup/>
              </Route>
              <Route path="/results" render={(routeProps) => 
                <>
                  <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                  <Results props={routeProps.location.state}/>
                </>  
                } exact>
              </Route>
              <Route path="/results2" render={(routeProps) => 
                <>
                  <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                  <Results2 props={routeProps.location.state}/>
                </>  
                } exact>
              </Route>
              <Route path="/report" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <Report />
              </Route>
              <Route path="/performance" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <Performance/>
              </Route>
              <Route path="/assignments-teacher" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <AssignmentsT/>
              </Route>
              <Route path="/myclasses" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <MyClasses/>
              </Route>
          </div>
        </Switch>
      </div>
    </div>
    </Router>      
    
  );
}

export default App;

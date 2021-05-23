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
import Notice from './components/notice/index';
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
import Feedback from './components/Feedback';
import GoogleSignUpDetails from "./components/GoogleSignUpDetails";
import AssignmentsT from './AssignmentsT';
import PracticeTestTopic from './components/PracticeTestTopic';
import AdminDashboard from './components/admin/Dashboard';
import ViewFeedback from './components/admin/ViewFeedback';
import Verify from './components/admin/Verify';
import Database from './components/admin/Database';
import Classes from './components/admin/Classes';

import PrincipalProfile from './Principal Panel/Profile/index';
import PrincipalDashboard from './Principal Panel/Dashboard/index';
import PrincipalNotice from './Principal Panel/notice/index';
import ClassDetails from './Principal Panel/ClassDetails/ClassDetails';
import PrincipalPanel_Performance from '././Principal Panel/Performance/Performance';


function App() {
  const [userDetails, setUserDetails] = useState(null);
  var [showSidebar, setShowSidebar] = useState(true);
  const [user, setUser] = useState(null);
  const [tookAssessment, setTookAssessment] = useState(false);
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [openFeedback,setOpenFeedback] = useState(false);

  const fetchUserDetails = () => {
    if(user?.uid){
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
  }

  const getSchoolName = (id) =>{
    if(id)
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
    if(user?.uid && userDetails?.school)
      getSchoolName(userDetails?.school);
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
        {user?<Redirect to="/dashboard" />:<Redirect to="/login" />}
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

              <Route path="/practice-topic" render={(routeProps) => 
                <>
                  <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                  <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                  <PracticeTestTopic props={routeProps.location.state} userDetails={userDetails}/>
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
                  :userDetails.userType=="teacher"?<Redirect to="/teacher/dashboard" />
                  :userDetails.userType=="admin"?<Redirect to="/admin/dashboard" />:
                  <>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                    <Dashboard user={user} userDetails={userDetails} setUserDetails={setUserDetails} openFeedback={openFeedback} setOpenFeedback={setOpenFeedback}/>
                  </>
              }
              </Route>
              {/* Admin Routes below */}
              <Route path="/admin/dashboard" exact>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                    <AdminDashboard user={user} userDetails={userDetails} setUserDetails={setUserDetails} openFeedback={openFeedback} setOpenFeedback={setOpenFeedback}/>    
              </Route>

              <Route path="/admin/feedback" exact>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                    <ViewFeedback user={user} userDetails={userDetails}/>    
              </Route>

              <Route path="/admin/verify/teacher" exact>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                    <Verify type="teacher" user={user} userDetails={userDetails}/>    
              </Route>

              <Route path="/admin/verify/class-teacher" exact>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                    <Verify type="class-teacher" user={user} userDetails={userDetails}/>    
              </Route>

              <Route path="/admin/verify/principal" exact>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                    <Verify type="principal" user={user} userDetails={userDetails}/>    
              </Route>

              <Route path="/admin/database" exact>
                    <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                    <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                    <Database user={user} userDetails={userDetails}/>    
              </Route>

              <Route path="/admin/classes" render={(routeProps) => 
                <>
                  <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                  <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                  <Classes props={routeProps.location.state} user={user} userDetails={userDetails}/>
                </>
              } exact>
              </Route>
              {/* Admin Routes end */}

            <Route path="/teacher/dashboard" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                <TeacherDashboard user={user} userDetails={userDetails} setUserDetails={setUserDetails} openFeedback={openFeedback} setOpenFeedback={setOpenFeedback}/>
              </Route>

            <Route path="/teacher/classes" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <MyClasses user={user} userDetails={userDetails} setUserDetails={setUserDetails}/>
              </Route>
              
              
              <Route path="/profile" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} userDetails={userDetails}/>
                <Profile user={user} userDetails={userDetails}/>
              </Route>
              <Route path="/notice" exact>
              <MobileHeader userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
              <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <Notice/>
              </Route>
               <Route path="/mytest" exact>
               <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                 <Test/>
               </Route>
              <Route path="/popup" exact>
             
                <Popup/>
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
              <Route path="/teacher/assignments" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <AssignmentsT overview userDetails={userDetails} user={user}/>
              </Route>
            
              <Route path="/myclasses" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <MyClasses/>
              </Route>



              <Route path="/principal/profile" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} userDetails={userDetails}/>
                <PrincipalProfile user={user} userDetails={userDetails}/>
              </Route>

              <Route path="/principal/dashboard" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser} setOpenFeedback={setOpenFeedback}/>
                <PrincipalDashboard user={user} userDetails={userDetails} setUserDetails={setUserDetails} openFeedback={openFeedback}/>
              </Route>

               <Route path="/principal/notice" exact>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <PrincipalNotice/>
              </Route>

              <Route path="/principal/class-details" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <ClassDetails/>
              </Route>

              <Route path="/principal/performance" exact>
                <MobileHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Sidebar userDetails={userDetails} fetchUserDetails={fetchUserDetails} showSidebar={showSidebar} setShowSidebar={setShowSidebar} user={user} setUser={setUser}/>
                <PrincipalPanel_Performance/>
              </Route>
              
          </div>
        </Switch>
      </div>
    </div>
    </Router>      
    
  );
}

export default App;

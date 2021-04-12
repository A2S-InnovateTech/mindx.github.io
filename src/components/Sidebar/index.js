import React, {useState, useEffect} from 'react'
import './Sidebar.css';
import Logo from '../../logo.png';
import ProfilePic from './profile_pic.png';
import Close from './close.svg';
import {Link, useHistory} from "react-router-dom";
import firebase from 'firebase';
import app from '../../firebase';
import EditIcon from './edit.png';

function Sidebar({showSidebar, setShowSidebar, user, setUser, userDetails, fetchUserDetails, setOpenFeedback}) {
    let history = useHistory();
    const [schoolEdit, setSchoolEdit] = useState(false);
    const [classEdit, setClassEdit] = useState(false);
    const [school, setSchool] = useState("");
    const [Class, setClass] = useState("");
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [imageEdit, setImageEdit] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if(firstRender==false && image!==null){
            console.log("image: ", image);
            updateProfilePhoto();
        }
        else{
            setFirstRender(false);
        }
    }, [image])

    // const updateSchool = (e) =>{
    //     e.preventDefault();
    //     app.firestore().collection("users").doc(user?.uid).get()
    //         .then((doc)=>{
    //             app.firestore().collection("schools").doc(doc.data().school).update(

    //             )
    //         })
    //         .catch(e=>console.log("Error in updating details: ", e))
    // }
    const updateClass = (e) =>{
        e.preventDefault();
        app.firestore().collection("users").doc(user.uid).update("class", Class)
            .then(()=>{setClassEdit(false); fetchUserDetails();})
            .catch(e=>console.log("Error in updating details: ", e))
    }

    const updateProfilePhoto = () => {
        const uploadTask = firebase.storage().ref(`images/${user.uid}`).put(image)
        .then((snapshot) => {
                user.updateProfile({
                    photoURL: snapshot.downloadURL
                }).then(function() {
                    console.log("Image updated");
                }).catch(function(error) {
                    console.log("Error in updating image", error);
                });
                setProgress(0);
                setImage(null);
                history.go(0);
        });
    };

    const handleChange = (files) => {
        if (files[0]) {
            console.log(files[0]);
            setImage(files[0]);
        }
    };

    return (
        showSidebar?
        <div className="Sidebar">
            <Link to="/dashboard"><img src={Logo} alt="MindX Logo" className="Sidebar__logo"/></Link>
            <div style={{display: "flex", flexDirection: "row"}}><Link to="/s"><img src={user?.photoURL || ProfilePic} alt="Profile Pic" className="Sidebar__profile_pic"/></Link><img src={EditIcon} alt="Edit" style={{marginLeft: "-20px"}} className="Sidebar__edit" onClick={()=>{setImageEdit(!imageEdit); console.log(imageEdit);}}/>
            </div>
            {imageEdit===true&&<> 
                <input type="file" id="file" onChange={(e)=>handleChange(e.target.files)}/>
                <label for="file" className="file-trigger">Browse Image</label>
                </>
            }
            <p className="Sidebar__name">{user?.displayName || "Student"}</p>
            {/* <p className="Sidebar__school">School: {schoolEdit? <><input type="text" value={school} onChange={(e)=>setSchool(e.target.value)}/> <button onClick={(e)=>updateSchool(e)}>Set</button> </>: <>{userDetails?.school||"Not Set"} <img src={EditIcon} alt="Edit" className="Sidebar__edit" onClick={()=>setSchoolEdit(true)}/></>}</p> */}
            <p className="Sidebar__school">School: {userDetails?.school||"Not Set"}</p>            
            <p className="Sidebar__class">Class:  {classEdit? <><input type="text" value={Class} onChange={(e)=>setClass(e.target.value)}/> <button onClick={(e)=>updateClass(e)}>Set</button> </>: <>{userDetails?.class||"Not Set"} <img src={EditIcon} alt="Edit" className="Sidebar__edit" onClick={()=>setClassEdit(true)}/></>}</p>
            <p className="Sidebar__class clickable" onClick={
                (e)=>{
                    setUser(null);
                    e.preventDefault();
                    firebase.auth().signOut().then(function() {
                        
                        console.log("Logged out: ",user);
                    })
                    history.push('/');
                }
            }><b>Logout</b></p>

            <div className="Sidebar__buttons">
                <Link to="/dashboard" style={{textDecoration:"none", color:"white"}}><div className="Sidebar__button active">Dashboard</div></Link>
                <div className="Sidebar__button">Timetable</div>
                <Link to="/test" style={{textDecoration:"none", color:"white"}}><div className="Sidebar__button">Tests</div></Link>
                <div className="Sidebar__button">Attendance</div>
                <div className="Sidebar__button">Help</div>
                <div className="Sidebar__button" onClick={()=>setOpenFeedback(true)} style={{cursor: "pointer"}}>Feedback</div>
                <div className="Sidebar__button">Settings</div>
            </div>
        </div>
        :
        <div className="Sidebar" style={{display: "flex"}}>
            <img src={Close} alt="Close" onClick={()=>{setShowSidebar(true)}} width="40px" className="Sidebar__close"/>
            <div style={{display: "flex", flexDirection: "row"}}><Link to="/s"><img src={user?.photoURL || ProfilePic} alt="Profile Pic" className="Sidebar__profile_pic"/></Link><img src={EditIcon} alt="Edit" style={{marginLeft: "-20px"}} className="Sidebar__edit" onClick={()=>{setImageEdit(!imageEdit); console.log(imageEdit);}}/>
            </div>
            {imageEdit===true&&<> 
                <input type="file" id="file" onChange={(e)=>handleChange(e.target.files)}/>
                <label for="file" className="file-trigger">Browse Image</label>
                </>
            }
            <p className="Sidebar__name">{user?.displayName || "Student"}</p>
            <p className="Sidebar__school">School: {userDetails?.school||"Not Set"}</p>
            <p className="Sidebar__class">Class:  {classEdit? <><input type="text" value={Class} onChange={(e)=>setClass(e.target.value)}/> <button onClick={(e)=>updateClass(e)}>Set</button> </>: <>{userDetails?.class||"Not Set"} <img src={EditIcon} alt="Edit" className="Sidebar__edit" onClick={()=>setClassEdit(true)}/></>}</p>
            <p className="Sidebar__class clickable" onClick={
                (e)=>{
                    setUser(null);
                    e.preventDefault();
                    firebase.auth().signOut().then(function() {
                        
                        console.log("Logged out: ",user);
                    })
                    history.push('/');
                }
            }><b>Logout</b></p>

            <div className="Sidebar__buttons">
                <Link to="/dashboard" style={{textDecoration:"none", color:"white"}}><div className="Sidebar__button active">Dashboard</div></Link>
                <div className="Sidebar__button">Timetable</div>
                <Link to="/test" style={{textDecoration:"none", color:"white"}}><div className="Sidebar__button">Tests</div></Link>
                <div className="Sidebar__button">Attendance</div>
                <div className="Sidebar__button">Help</div>
                <div className="Sidebar__button" onClick={()=>setOpenFeedback(true)}>Feedback</div>
                <div className="Sidebar__button">Settings</div>
            </div>

        </div>
    )
}

export default Sidebar

import React, {useState, useEffect}  from 'react';
import Body from './body';
import './profile.css';
import firebase from 'firebase';
import app from '../../firebase';
import {useHistory, Link} from 'react-router-dom';
import Back from './arrow.png';

const Profile = ({userDetails, user}) => {
   console.log(userDetails);
    const [disabled, setDisabled] = useState(true);
    const [disableds, setDisableds] = useState(true);
    const [pname, setPname] = useState(user?.displayName);
    const [paddress, setPaddress] = useState("");
    const [pemail, setPemail] = useState("shivamvarshney30@gmail.com ");
    const [pnumber, setPnumber] = useState("+91 7983872298");
    const [sname, setSname] = useState("D.S.B.M. Sr. Sec. School");
    const [saddress, setSaddress] = useState("Parao Dubey, Aligarh");
    const [semail, setSemail] = useState("dsbmabc30@gmail.com");
    const [snumber, setSnumber] = useState("+91 123456789");

    let history = useHistory();

     const  editp = () => {
        setDisabled(false);
     }
     const savep = () => {
        updateUserDetails();
        setDisabled(true);
     }
     const saves = () => {
        updateUserDetails();
        setDisableds(true);
     }
     const  edits = () => {
        setDisableds(false);
        
     }
   useEffect(() => {
      setPname(user?.displayName);
      setPemail(user?.email);
   }, [user])

   useEffect(() => {
      setPaddress(userDetails.address);
      setPnumber(userDetails.phoneNumber);
      setSname(userDetails.school);
      setSaddress(userDetails.schoolAddress);
      setSnumber(userDetails.schoolNumber);
      setSemail(userDetails.schoolEmail);
   }, [userDetails])

   const updateUserDetails = () => {
      app.firestore().collection("users").doc(user?.uid).set(
         {
            address: paddress?paddress:null, 
            phoneNumber: pnumber?pnumber:null, 
            school: sname?sname:null, 
            schoolAddress: saddress?saddress:null, 
            schoolNumber: snumber?snumber:null, 
            schoolEmail: semail?semail:null
         },
         {
            merge: true
         })
        .then(()=>history.go(0))
        .catch(e=>console.log("Error in updating details: ", e))
   }

    return(
        <div>
                <div className="Dashboard__heading_row">
                  <Link to="/dashboard">
                     <div className="arrow">
                        <img src={Back}  alt="arrow" width="40px"/>
                     </div>
                     </Link>
                    <div className="Dashboard__title">My&nbsp;Profile</div>
                    <div className="Dashboard__line" />
                </div>
                  <Body
                  heading ="personal&nbsp;Information"
                  buttontitle = "personal&nbsp;Information"
                  labelone ="Student&nbsp;Name"
                  labeltwo = "Home&nbsp;Address"
                  editbutton = {disabled}
                  toggleeditbutton = {editp}
                  savebutton = {savep}

                  setName = {setPname}
                  setAdress = {setPaddress}
                  setEmail = {setPemail}
                  setNumber = {setPnumber}

                  Name ={pname}
                  Adress = {paddress}
                  Email = {pemail}
                  Number = {pnumber}
                  />

                <div className= "gap"></div>

                  <Body
                   heading ="College&nbsp;/&nbsp;School&nbsp;Information"
                   buttontitle = "School&nbsp;Information"
                   labelone ="School&nbsp;Name"
                  labeltwo = "School&nbsp;Address"
                  editbutton = {disableds}
                  toggleeditbutton = {edits}
                  savebutton = {saves}

                  setName = {setSname}
                  setAdress = {setSaddress}
                  setEmail = {setSemail}
                  setNumber = {setSnumber}

                  Name ={sname}
                  Adress = {saddress}
                  Email = {semail}
                  Number = {snumber}
                  />
        </div>
    );
}
export default Profile
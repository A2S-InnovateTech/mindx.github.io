import React, {useState}  from 'react';
import Body from './body';
import './profile.css';
const Profile = () => {

    const [disabled, setDisabled] = useState(true);
    const [disableds, setDisableds] = useState(true);
    const [pname, setPname] = useState("Shivam Varshney");
    const [paddress, setPaddress] = useState("14/110, Moti Mill Compound");
    const [pemail, setPemail] = useState("shivamvarshney30@gmail.com ");
    const [pnumber, setPnumber] = useState("+91 7983872298");
    const [sname, setSname] = useState("D.S.B.M. Sr. Sec. School");
    const [saddress, setSaddress] = useState("Parao Dubey, Aligarh");
    const [semail, setSemail] = useState("dsbmabc30@gmail.com");
    const [snumber, setSnumber] = useState("+91 123456789");
     const  editp = () => {
        setDisabled(false);
     }
     const savep = () => {
        alert(  pname);
        alert(  paddress  );
        alert(  pemail );
        alert(  pnumber);
        setDisabled(true);
     }
     const saves = () => {
        alert(  sname);
        alert(  saddress  );
        alert(  semail );
        alert(  snumber);
        setDisableds(true);
     }
     const  edits = () => {
        setDisableds(false);
        
     }

    return(
        <div>
                <div className="Dashboard__heading_row">
                   <div className="arrowbox"> <div className="arrow"> </div></div>
                    <div className="Dashboard__title">My&nbsp;Profile</div>
                    <div className="Dashboard__line" />
                </div>
                  <Body
                  heading ="Personal&nbsp;Information"
                  buttontitle = "Personal&nbsp;Information"
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
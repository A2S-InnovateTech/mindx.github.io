import React, {useState} from 'react';
import './profile.css';
import {Link} from "react-router-dom";

const Profile = () =>  {

    const [disabled, setDisabled] = useState(false);
    const [disableds, setDisableds] = useState(false);
     const  editp = () => {
        setDisabled(true);
        alert(' edit clicked');
     }
     const  edits = () => {
        setDisabled(true);
        alert(' edit clicked');
     }

    return (
        <div className="Dashboard">
            <div className="Dashboard__heading_row">
                <div className="Dashboard__title">My&nbsp;Profile</div>
                <div className="Dashboard__line" />
            </div>

            <div className="forms-s">
                    <div className="personalback">
                    <div className="personal">Personal Information</div>
                    </div>
                    <span><label className="personal__title">Personal Information</label>
                    <button className="savebutton" onClick={() => { alert('clicked') }}>save</button>
                    <button className="editbutton" onClick={() => editp()}>Edit </button>
                    
                    </span>
                    <span className="form-div">
                    <label className="label">Student Name</label>
                    <input className="form-11-s" type="text" disabled={disabled}></input>
                    </span>
                    <span className="form-div">
                    <label className="label" >Home Address </label>
                    <input className="form-22-s" type="text" disabled={disabled} ></input>
                    </span>
                    
                    <span className="form-div">
                    <label className="label"> Mobile&nbsp;No. </label>
                    <input className="form-3-s" type="text" disabled={disabled} ></input>
                    <label> Email </label>
                    <input className="form-4-s" type="text" disabled={disabled}></input>
                    </span>
                    
             </div>


             <div className="forms-s">
                    <div className="personalback">
                    <div className="personal">College/School Information</div>
                    </div>
                    <span><label className="personal__title">School Information</label>
                    <button className="savebutton">save</button>
                    <button className="editbutton" onClick={edits}>Edit</button>
                    
                    </span>
                    <span className="form-div">
                    <label className="label">School Name</label>
                    <input className="form-11-s" type="text" outline="none"  disabled={disableds} ></input>
                    </span>
                    <span className="form-div">
                    <label className="label" >School Address </label>
                    <input className="form-222-s" type="text" outline="none"  disabled={disableds} ></input>
                    </span>
                    
                    <span className="form-div">
                    <label className="label"> Mobile&nbsp;No. </label>
                    <input className="form-3-s" type="text" disabled={disableds} ></input>
                    <label> Email </label>
                    <input className="form-4-s" type="text" disabled={disableds} ></input>
                    </span>
                    
             </div>



           
            
            

            
        </div>
    )
}

export default Profile

import React from 'react';
import './Dashboard.css';
import {Link} from "react-router-dom";

const profile = () =>  {

    //const [value, setValue] = React.useState('female');

 /*const handleChange = (event) => {
    setValue();
  };*/


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
                    <button className="savebutton">save</button>
                    <button className="editbutton">Edit</button>
                    
                    </span>
                    <span className="form-div">
                    <label className="label">Student Name</label>
                    <label className="form-11-s" type="text" ></label>
                    </span>
                    <span className="form-div">
                    <label className="label" >Home Address </label>
                    <label className="form-22-s" type="text" ></label>
                    </span>
                    
                    <span className="form-div">
                    <label className="label"> Mobile&nbsp;No. </label>
                    <label className="form-3-s" type="text" ></label>
                    <label> Email </label>
                    <label className="form-4-s" type="text" ></label>
                    </span>
                    
             </div>


             <div className="forms-s">
                    <div className="personalback">
                    <div className="personal">College/School Information</div>
                    </div>
                    <span><label className="personal__title">School Information</label>
                    <button className="savebutton">save</button>
                    <button className="editbutton">Edit</button>
                    
                    </span>
                    <span className="form-div">
                    <label className="label">School Name</label>
                    <input className="form-11-s" type="text" outline="none"  disabled="true"></input>
                    </span>
                    <span className="form-div">
                    <label className="label" >School Address </label>
                    <label className="form-222-s" type="text" ></label>
                    </span>
                    
                    <span className="form-div">
                    <label className="label"> Mobile&nbsp;No. </label>
                    <label className="form-3-s" type="text" ></label>
                    <label> Email </label>
                    <label className="form-4-s" type="text" ></label>
                    </span>
                    
             </div>



           
            
            

            
        </div>
    )
}

export default profile

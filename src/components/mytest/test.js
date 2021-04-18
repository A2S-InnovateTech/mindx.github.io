import React, {useState}  from 'react';
import './test.css';
import {Link} from 'react-router-dom';

const Row = (props) => {
    return(
        
            <tr class="noBorder">
                       <td className="serial"></td>
                       <td>{props.colone}</td>
                       <td  className="hide_on_mobile">{props.coltwo}</td>
                       <td className="hide_on_mobile">{props.colthree}</td>
                       <td>{props.colfour}</td>
                       <Link 
                        to={{
                            pathname:"/assesment",
                            state: { subject: 'English' }
                        }} 
                        style={{textDecoration:"none", color:"black"}}
                       >
                        <td>{props.colfive}</td>
                       </Link>
                   </tr>
        
    );
}

export default Row

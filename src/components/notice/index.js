import React, {Component}  from 'react';
import {  Button, Form, Col } from 'react-bootstrap';

import Noticerow from './notice';

class Notice extends Component {

  /*  const [row, setRow] = useState();

   
    */
    state={
        persons:[
            {title : 'Regarding Online Tests' , time : '02/04/2021   01:00 P.M.'},
            {title : 'Regarding Holidays', time :'26/03/2021   09:00 A.M.'},
            { title : 'Regarding Assessments' , time : '20/03/2021   09:00 A.M.'}
        ]
    }

    
       

    render() {
        return (
            <div>
    
            <div className="Dashboard__heading_row">
                   <div className="arrowbox"> <div className="arrow"> </div></div>
                    <div className="Dashboard__title">Notices</div>
                    <div className="Dashboard__line" />
            </div>

           {this.state.persons.map((item) => {
                return <Noticerow title={item.title} time={item.time}/>
                
                })}
        </div>
        );
      }
    
    
}

export default Notice;
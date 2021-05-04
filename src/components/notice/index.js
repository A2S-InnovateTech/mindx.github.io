import React, {Component}  from 'react';
import {Link, useHistory} from 'react-router-dom';
import Back from '../../images/back-icon.png';
import Noticerow from './notice';

function Notice() { 

  /*  const [row, setRow] = useState();

   
    */
    var state={
        persons:[
            {title : 'Regarding Online Tests' , time : '02/04/2021   01:00 P.M.', body: 'Online tests are scheduled from 08/04/2021.'},
            {title : 'Regarding Holidays', time :'26/03/2021   09:00 A.M.', body: 'You have holidays from 15/04/2021'},
            { title : 'Regarding Assessments' , time : '20/03/2021   09:00 A.M.', body: 'Students have to compulsarily attempt the Pyschometric assessment'}
        ]
    }
    const goBack = () =>{
        history.goBack()
    }
    const history = useHistory();

    
        return (
            <div>
    
            <div className="Dashboard__heading_row">
            <div className="arrow">
                  <Link to="/dashboard"><img src={require('../../assets/images/arrow.png').default}  alt="arrow" width="40px"/></Link>
               </div>
                    <div className="Dashboard__title">Notices</div>
                    <div className="notice__line" />
            </div>

          

                {state.persons.map((item) => {
                return <>
                        <Noticerow title={item.title} time={item.time} body={item.body}/>
                    </>
                })}
        </div>
        );
    
    
}

export default Notice;
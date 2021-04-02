import './MyClasses.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, ButtonGroup, Button, Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'


function MyClasses() {
    return (
        <div className="container">
          <section className="header">
           <Row>
             <Col lg={1} md={1} sm={2} xs={2}>
               <div className="arrow">
                  <a><img src={require('../../assets/images/arrow.png').default}  alt="arrow"/></a>
               </div>
              </Col>
              <Col lg={3} md={4} sm={5} xs={7}>
               <p>My Classes</p>
             </Col>
             <Col lg={8} md={7} sm={5} xs={3}>
               <div className="horizon"></div>
             </Col>
           </Row>
         </section>

          <section className="classes_dropdown">

            <Dropdown as={ButtonGroup} className="browser-default">
              <button className="btns">
                <div>Class : 12th</div>
                <div>Section : A</div>
              </button>

              <Dropdown.Toggle  split id="dropdown-split-basic">
              </Dropdown.Toggle>
              
              <Dropdown.Menu className="table">
                 <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>Roll No.</th>
                      <th>Student Name</th>
                      <th>Tests</th>
                      <th>Assignment</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Amit Kumar</td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Amit Kumar</td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Amit Kumar</td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                    </tr>
                  </tbody>
                  
                </Table>
                <div className="footer">
                  <button>
                    <img src={require('../../assets/images/statistics 1.png').default}  alt="Performance"/>
                    <p>Performance</p>
                  </button>

                  <div className="right_btns">
                    <button>
                      <img src={require('../../assets/images/xls-file 1.png').default}  alt="xls"/>
                      <p>Download XLS</p>
                    </button>
                    <button style={{marginRight:"10px"}}>
                      <img src={require('../../assets/images/pdf-file 1.png').default}  alt="pdf"/>
                      <p>Download PDF</p>
                    </button>
                  </div>

                </div>

              </Dropdown.Menu>

            </Dropdown>
         </section>

         <section className="classes_dropdown">

            <Dropdown as={ButtonGroup} className="browser-default">
              <button className="btns">
                <div>Class : 12th</div>
                <div>Section : B</div>
              </button>

              <Dropdown.Toggle  split id="dropdown-split-basic">
              </Dropdown.Toggle>
              
              <Dropdown.Menu className="table">
                 <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>Roll No.</th>
                      <th>Student Name</th>
                      <th>Tests</th>
                      <th>Assignment</th>
                      <th>Attendance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Amit Kumar</td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Amit Kumar</td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Amit Kumar</td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                      <td><button>View</button></td>
                    </tr>
                  </tbody>
                  
                </Table>
                <div className="footer">
                  <button>
                    <img src={require('../../assets/images/statistics 1.png').default}  alt="Performance"/>
                    <p>Performance</p>
                  </button>

                  <div className="right_btns">
                    <button>
                      <img src={require('../../assets/images/xls-file 1.png').default}  alt="xls"/>
                      <p>Download XLS</p>
                    </button>
                    <button style={{marginRight:"10px"}}>
                      <img src={require('../../assets/images/pdf-file 1.png').default}  alt="pdf"/>
                      <p>Download PDF</p>
                    </button>
                  </div>

                </div>

              </Dropdown.Menu>

            </Dropdown>
         </section>
        
        </div>
    )
}

export default MyClasses;

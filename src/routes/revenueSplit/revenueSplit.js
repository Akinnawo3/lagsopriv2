
import React, { useState, useEffect, Fragment } from 'react';
import {Badge, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";



const  RevenueSplit = ({match}) => {
    const [employeePayroll, setEmployeePayroll] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
        setAnchorEl(null)
    };
    const  handleClick = event => {
        setAnchorEl(event.currentTarget)
    };


    useEffect(()=> {
        getEmployeePayrolls();
    },[])



    // get employee payrols
    const getEmployeePayrolls = () => {
        api.get('employeePayrols.js')
            .then((response) => {
                setEmployeePayroll(response.data)
            })
            .catch(error => {
                // error handling
            })
    }


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Revenue Split"} match={match} />
            <RctCollapsibleCard fullBlock>
                <div className="row p-3" style={{backgroundColor: '#f8f9fa'}}>
                    <div className="col-sm-6 bg-white pb-4" style={{borderRadius: '10px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'}}>
                        <div className='mt-3' style={{color: '#2E407B'}}>Revenue deduction time</div>
                        <div className='px-3 mt-3' style={{fontSize: '12px', color: '#898888', fontStyle: 'italic'}}>Time</div>
                        <div className="row px-2" style={{color: '#4D4D4D'}}>
                            <div className='col-6 customRevenueTitle'>
                                <div className='p-2'>
                                    <Input type="select"    required>
                                        <option>23:00</option>
                                    </Input>
                                </div>
                            </div>
                            <div className='col-6 customRevenueTitle'>
                                <div className='p-2'>
                                    <Button type="button" variant="contained" className="text-white btn-success w-100">Set time</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="row p-3" style={{backgroundColor: '#f8f9fa'}}>
                      <div className="col-sm-6 bg-white" style={{borderRadius: '10px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)'}}>
                          <div className="d-flex align-items-center justify-content-between mt-3">
                              <div style={{color: '#2E407B'}}>Revenue Split</div>
                              <div style={{fontSize: '12px', color: '#898888', fontStyle: 'italic'}}>Updated 2 months ago</div>
                          </div>
                         <div className="row p-2 mt-4">
                           <div className='col-8 customRevenueTitle'>
                               Parameter
                           </div>
                             <div className='col-4 customRevenueTitle'>
                                 Percentage
                             </div>
                         </div>
                          <div className="row p-2" style={{color: '#4D4D4D'}}>
                              <div className='col-8 customRevenueTitle'>
                                 <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                     Debt service
                                 </div>
                              </div>
                              <div className='col-3 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      100
                                  </div>
                              </div>
                              <div className='col-1 customRevenueTitle'>
                                  <button type="button" className="rct-link-btn"><i className="ti-pencil"></i></button>
                              </div>
                          </div>
                          <div className="row p-2" style={{color: '#4D4D4D'}}>
                              <div className='col-8 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                     Tech Co
                                  </div>
                              </div>
                              <div className='col-3 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      100
                                  </div>
                              </div>
                              <div className='col-1 customRevenueTitle'>
                                  <button type="button" className="rct-link-btn"><i className="ti-pencil"></i></button>
                              </div>

                          </div>
                          <div className="row p-2" style={{color: '#4D4D4D'}}>
                              <div className='col-8 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      Maintenance
                                  </div>
                              </div>
                              <div className='col-3 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      100
                                  </div>
                              </div>
                              <div className='col-1 customRevenueTitle'>
                                  <button type="button" className="rct-link-btn"><i className="ti-pencil"></i></button>
                              </div>
                          </div>
                          <div className="row p-2" style={{color: '#4D4D4D'}}>
                              <div className='col-8 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      Driver and Fueling
                                  </div>
                              </div>
                              <div className='col-3 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      100
                                  </div>
                              </div>
                              <div className='col-1 customRevenueTitle'>
                                  <button type="button" className="rct-link-btn"><i className="ti-pencil"></i></button>
                              </div>
                          </div>
                          <div className="row p-2" style={{color: '#4D4D4D'}}>
                              <div className='col-8 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      Insurance
                                  </div>
                              </div>
                              <div className='col-3 customRevenueTitle'>
                                  <div className='p-2' style={{border: '1px solid #4D4D4D', borderRadius: '5px'}}>
                                      100
                                  </div>
                              </div>
                              <div className='col-1 customRevenueTitle'>
                                  <button type="button" className="rct-link-btn"><i className="ti-pencil"></i></button>
                              </div>
                          </div>
                          <div className="py-4 px-2">
                              <Button onClick={()=> setIsOpen(true)} type="button" variant="contained" className="text-white btn-primary">Add Parameter</Button>

                          </div>
                      </div>
            </div>


            </RctCollapsibleCard>
            <Modal isOpen={isOpen}
                   toggle={() => setIsOpen(!isOpen)}
                >
               <ModalBody className="p-4">
                   <div style={{color: '#2E407B'}}>Add new parameter</div>
                   <div className="row p-2" style={{color: '#4D4D4D'}}>
                       <div className='col-8 customRevenueTitle'>
                           <div className='p-2'>
                               <div className='customRevenueTitle pb-1'>
                                   Parameter
                               </div>
                               <Input type="text"    required />
                           </div>
                       </div>
                       <div className='col-4 customRevenueTitle'>
                           <div className='p-2'>
                               <div className='customRevenueTitle pb-1'>
                                   Percentage
                               </div>
                               <Input type="text"   required />
                           </div>
                       </div>
                   </div>
                   <div className='p-2'>
                       <Button type="button" variant="contained" className="text-white btn-success mt-4 w-100">Add parameter</Button>

                   </div>

               </ModalBody>
            </Modal>
        </div>
    );

}

export default RevenueSplit;

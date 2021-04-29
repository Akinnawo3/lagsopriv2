
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Badge, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";



const  Referral = ({match}) => {
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
            <PageTitleBar title={"Referral"} match={match} />
            <RctCollapsibleCard fullBlock>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="pl-3" style={{color: '#2E407B'}}>Referral</div>
                    <div className="float-right d-flex align-items-center p-3">
                        <div style={{marginRight: '20px'}}>
                            <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(68, 84, 138, 0.08)'}}>
                                <option value="1">Passenger</option>
                                <option value="2">Driver</option>
                            </Input>
                        </div>
                        <Button type="button" variant="contained" className="text-white btn-success">Apply</Button>

                        {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                    </div>
                </div>
                <div className="table-responsive">
                    {/*<Link className="table-responsive" to={`/admin/schedule/1`}>*/}
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Referral code</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Phone No</TableCell>
                                <TableCell>Reward</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {employeePayroll && employeePayroll.map((employee, key) => (
                                        <TableRow hover key={key}>
                                            <TableCell>X24321</TableCell>
                                            <TableCell>Passenger</TableCell>
                                            <TableCell>07032838025</TableCell>
                                            <TableCell>1,000</TableCell>
                                            <TableCell><Link style={{border: '1px solid grey', padding: '5px 20px', borderRadius: '5px'}} to={`/admin/referral/1`}>View</Link></TableCell>

                                        </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                    {/*</Link>*/}
                </div>
            </RctCollapsibleCard>
            <Modal isOpen={isOpen}
                   toggle={() => setIsOpen(!isOpen)}
                >
               <ModalBody className="p-4">
                   <div style={{color: '#2E407B'}}>Reward</div>
                   <div style={{marginTop: '40px', color: '#898888', fontSize: '12px'}}>Receipient Phone Number</div>
                   <div className='w-50 mt-1'><Input type="text" value='07032838025'   required /></div>
                       <Button type="button" variant="contained" className="text-white btn-primary mt-4">Reward</Button>

               </ModalBody>
            </Modal>
        </div>
    );

}

export default Referral;


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



const  Voucher = ({match}) => {
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
            <PageTitleBar title={"Vouchers"} match={match} />
            <RctCollapsibleCard fullBlock>
               <div style={{backgroundColor: '#f8f9fa', paddingBottom: '20px'}}>
                   <div className="d-flex align-items-end bg-white p-4 mb-4" style={{borderRadius: '10px', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)', width: 'fit-content'}}>
                       <div>
                           <Label>Amount</Label>
                           <Input type="select"   required>
                               <option value="1">Amount</option>
                           </Input>
                       </div>
                       <div className="ml-4">
                           <Label>Unit</Label>
                           <Input type="text" value='10'   required />
                       </div>
                       <Button type="button" variant="contained" className="text-white btn-success ml-4">Generate Voucher</Button>

                   </div>
               </div>

                <div className="d-flex align-items-center justify-content-between">
                    <div className="pl-3" style={{color: '#2E407B'}}>Voucher</div>
                    <div className="float-right d-flex align-items-center p-3">
                        <div style={{marginRight: '20px'}}>
                            <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(68, 84, 138, 0.08)'}}>
                                <option value="1">Sold</option>
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
                                <TableCell>Date generated</TableCell>
                                <TableCell>Pin</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {employeePayroll && employeePayroll.map((employee, key) => (
                                        <TableRow hover key={key}>
                                            <TableCell>24 march 2021</TableCell>
                                            <TableCell>X24321</TableCell>
                                            <TableCell>1,000</TableCell>
                                            <TableCell><Badge color="danger">Available</Badge></TableCell>
                                            <TableCell><Button onClick={()=> setIsOpen(true)} type="button" variant="contained" className="text-white btn-primary">Reward</Button></TableCell>
                                            <TableCell><Button style={{border: '1px solid grey'}}>View</Button></TableCell>

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

export default Voucher;

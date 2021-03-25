/**
 * Basic Table
 */
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge , Input} from 'reactstrap';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import GoogleMapComponent from "Components/Maps/GoogleMapComponent";
import GoogleMapComponentSchedule from "Components/Maps/GoogleMapComponentSchedule";
import IntlMessages from "Util/IntlMessages";
import {SupportRequest, TodayOrdersStatsWidget} from "Components/Widgets";
import DoughnutChart from "Components/Charts/DoughnutChart";
import ComponentChart from "Routes/schedule/component/chart";
import {Link} from "react-router-dom";



const  Schedule = ({match}) => {
    const [employeePayroll, setEmployeePayroll] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null);

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
            <PageTitleBar title={"Schedules"} match={match} />
            <RctCollapsibleCard fullBlock>
                <div className='row'>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <GoogleMapComponentSchedule />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        {/*<BookingInfo />*/}
                        <RctCollapsibleCard
                            heading={'Status'}
                            fullBlock
                            customClasses="overflow-hidden"
                            style={{background: 'red'}}
                        >
                            <div className="text-center py-10" style={{height: '335px'}}>
                                <div className="mt-3">
                                    <ComponentChart />
                                </div>
                                <div className="d-flex align-items-center justify-content-center" style={{marginTop: '50px'}}>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <div style={{background: '#FAD202', height: '20px', width: '20px', borderRadius: '5px'}} />
                                        <div className="pl-2">Pending</div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center ml-3'>
                                        <div style={{background: '#24C790', height: '20px', width: '20px', borderRadius: '5px'}} />
                                        <div className="pl-2">Success</div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center ml-3'>
                                        <div style={{background: '#FB4B0C', height: '20px', width: '20px', borderRadius: '5px'}} />
                                        <div className="pl-2">Failed</div>
                                    </div>


                                </div>
                            </div>
                        </RctCollapsibleCard>
                    </div>

                </div>

                <div className="d-flex align-items-center justify-content-between">
                    <div className="pl-3" style={{color: '#2E407B'}}>FDT</div>
                    <div className="float-right d-flex align-items-center p-3">
                        <div style={{marginRight: '20px'}}>
                            <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(68, 84, 138, 0.08)'}}>
                                <option value="1">Date</option>
                            </Input>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(68, 84, 138, 0.08)'}}>
                                <option value="1">Area</option>
                            </Input>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(68, 84, 138, 0.08)'}}>
                                <option value="1">Time</option>
                            </Input>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(68, 84, 138, 0.08)'}}>
                                <option value="">Status</option>
                            </Input>
                        </div>
                        <div style={{marginRight: '20px'}}>
                            <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(68, 84, 138, 0.08)'}}>
                                <option value="1">Class</option>
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
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Class</TableCell>
                                <TableCell>Pick up</TableCell>
                                <TableCell>Drop off</TableCell>
                                <TableCell>Riders</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {employeePayroll && employeePayroll.map((employee, key) => (
                                        <TableRow hover key={key}>
                                            <TableCell>10 March ‘21</TableCell>
                                            <TableCell>5:00pm</TableCell>
                                            <TableCell>c</TableCell>
                                            <TableCell>Civic centre Civic centre..</TableCell>
                                            <TableCell>Oshodi Oshodi Oshodi....</TableCell>
                                            <TableCell>1 of 3</TableCell>
                                            <TableCell><Badge color="danger">Failed</Badge></TableCell>
                                            <TableCell>
                                                <button type="button" className="rct-link-btn text-primary"><Link to={`/admin/schedule/1`}><i className="ti-eye"></i></Link></button>

                                            </TableCell>
                                        </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                    {/*</Link>*/}
                </div>
            </RctCollapsibleCard>
        </div>
    );

}

export default Schedule;


// box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
// background-color: #e0e0e0;

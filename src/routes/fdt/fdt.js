/**
 * Fdt
 */
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge , Input} from 'reactstrap';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import GoogleMapComponentSchedule from "Components/Maps/GoogleMapComponentSchedule";
import ComponentChart from "Routes/fdt/component/chart";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getFdt, getSchedule} from "Actions/fdtActions";
import Spinner from "../../spinner/Spinner";




const  Fdt = ({match, getSchedule, schedule, loading}) => {

    useEffect(()=> {
        getSchedule()
    },[])


    const getStatus = (id) => {
        if(id == 0) {
            return (
                <Badge color="warning">Pending</Badge>
            )
        }else if(id == 1) {
            return (
                <Badge color="Success">Completed</Badge>
            )
        }else if(id == 2) {
            return (
                <Badge color="danger">Cancelled</Badge>
            )
        }else {
            return (
                ''
            )
        }
    }

    const getClassTrip = (id) => {
        if(id == 1) {
            return (
                'Class A'
            )
        }else if(id == 2) {
            return (
                'Class B'
            )
        }else if(id == 3) {
            return (
                'Class C'
            )
        }else {
            return (
                'Class D'
            )
        }
    }




    return (
        <div className="table-wrapper">
            <PageTitleBar title={"FDTs"} match={match} />
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
                            <div style={{marginRight: '20px', width: 'fit-content', float: 'right', marginTop: '-40px'}}>
                                <Input type="select"   required style={{boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%', backgroundColor: 'rgba(18, 156, 233, 0.12)', zIndex: 2, position: 'relative',}}>
                                    <option value="1">Today</option>
                                </Input>
                            </div>
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
                    {loading && <Spinner />}
                    {/*<Link className="table-responsive" to={`/admin/schedule/1`}>*/}
                    {!loading &&  <Table>
                        <TableHead>
                            <TableRow hover>
                                {/*<TableCell>Date</TableCell>*/}
                                {/*<TableCell>Time</TableCell>*/}
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
                                {schedule.length > 0 && schedule.map((record, key) => (
                                    <TableRow hover key={key}>
                                        {/*<TableCell>{record['dates']}</TableCell>*/}
                                        {/*<TableCell>{record.time}</TableCell>*/}
                                        <TableCell>{getClassTrip(record.classTrip)}</TableCell>
                                        <TableCell>{record.pickupAddress}</TableCell>
                                        <TableCell>{record.dropoffAddress}</TableCell>
                                        <TableCell>{record.joinedBy ? `${Object.keys(JSON.parse(record.joinedBy)).length + 1} of ${record.classTrip}` : `1 of ${record.classTrip}`}</TableCell>
                                        <TableCell> {record.fdtStatus == 1 ? <Badge type="button" className="btn btn-success">Success</Badge>
                                            : record.fdtStatus == 0 ? <Badge type="button" className="btn btn-warning">Pending</Badge>: <Badge type="button" className="btn btn-danger">Cancelled</Badge>}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary"><Link to={`/admin/fdt/${record.id}`}><i className="ti-eye"></i></Link></button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>}
                    {/*</Link>*/}
                </div>
            </RctCollapsibleCard>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getSchedule: () => dispatch(getFdt()),
    };
}

const mapStateToProps = state => ({
    schedule: state.fdt.fdt,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps) (Fdt);

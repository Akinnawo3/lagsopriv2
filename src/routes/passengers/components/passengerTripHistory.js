import {Badge, Card, CardBody, Col, Media, Row, Table} from "reactstrap";
import {connect} from "react-redux";
import React, {Fragment, useEffect, useState} from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import {getDriverTripCount, getDriverTrips} from "Actions/tripAction";

const PassengerTripHistory = ({trips, isLoading, tripCount, paginate, currentPage, postsPerPage}) =>{



    return (
        <div className="prefrences-wrapper">
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-dark" >
                            <CardBody className="pb-0">
                                <div className="text-value">Total Trips</div>
                                <div>All time Statistic</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                                <span className="pr-2 font-2xl">{tripCount?.total}</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardBody>
                                <div className="table-responsive">
                                    <Table>
                                        <TableHead>
                                            <TableRow hover>
                                                <TableCell>Trip Id</TableCell>
                                                <TableCell>Date/Time</TableCell>
                                                <TableCell>Class</TableCell>
                                                <TableCell>Status</TableCell>
                                                {/*<TableCell>Ratings</TableCell>*/}
                                                <TableCell>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <Fragment>
                                                {trips.length > 0 && trips.map((trip) => (
                                                    <TableRow hover key={trip._id}>
                                                        <TableCell>
                                                            <Media>
                                                                {/*<Media left>*/}
                                                                {/*	<Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />*/}
                                                                {/*</Media>*/}
                                                                <Media body><h5 className="m-0 pt-15">{trip._id}</h5></Media>
                                                            </Media>
                                                        </TableCell>
                                                        <TableCell>
                                                            {new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt).toLocaleTimeString()}
                                                        </TableCell>
                                                        <TableCell>
                                                            {trip.ride_class}
                                                        </TableCell>
                                                        <TableCell><Badge color="success">{trip.ride_status === 'on_pickup' ? 'pending' : trip.ride_status}</Badge></TableCell>
                                                        <TableCell>
                                                            <button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/trips/${trip._id}`}><i className="ti-eye"/></Link></button>

                                                            {/*<ViewBtn />*/}
                                                            {/*<IconButton className="text-primary" title="View Trip Details"><i className="ti-eye"><Link to={`/admin/trips/${trip._id}`}><i className="ti-eye"/></Link></i></IconButton>*/}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </Fragment>
                                        </TableBody>
                                    </Table>
                                    <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                                        {trips.length > 0 &&
                                        <Pagination
                                            activePage={currentPage}
                                            itemClass="page-item"
                                            linkClass="page-link"
                                            itemsCountPerPage={postsPerPage}
                                            totalItemsCount={tripCount?.total}
                                            onChange={paginate}
                                        />}
                                    </div>
                                </div>
                                {trips.length === 0 && !isLoading &&
                                <div className="d-flex align-items-center justify-content-center">No  trips Available</div>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        getTrips: (pageNo, authId) => dispatch(getDriverTrips(pageNo, authId)),
        getTripCount: (authId) => dispatch(getDriverTripCount(authId)),
    };
}


const mapStateToProps = state => ({
    trips: state.trips.driverTrips,
    tripCount: state.trips.tripCountDriver,
    isLoading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (PassengerTripHistory)

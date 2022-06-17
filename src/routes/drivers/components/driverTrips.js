import React, {Fragment, useEffect, useState} from "react";
import {Badge, Card, CardBody, Col, Input, Media, Row, Table} from "reactstrap";
import {connect} from "react-redux";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import {getDriverTripCount, getDriverTrips, getDriverTripsByTripStatus} from "Actions/tripAction";
import EmptyData from "Components/EmptyData/EmptyData";

const DriverTrips = ({driverTrips, isLoading, tripCountDriver, getDriverTrips, driver_id, getDriverTripsByTripStatus, tripCountDriverAll, tripCountDriverCompleted, tripCountDriverCancelled}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [trip_status, setTrip_status] = useState("");

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getDriverTrips(pageNumber, driver_id, "", trip_status);
    window.scrollTo(0, 0);
  };

  const onChange = (e) => {
    e.preventDefault();
    setTrip_status(e.target.value);
    setCurrentPage(1);
    getDriverTripsByTripStatus(1, driver_id, e.target.value);
  };

  return (
    <div className="prefrences-wrapper">
      <div className="animated fadeIn">
        <Row className="mb-5">
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-secondary">
              <CardBody className="pb-0">
                <div className="text-value">Total Trips</div>
                {/*<div>All time Statistic</div>*/}
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{height: "70px"}}>
                <span className="pr-2 font-2xl">{tripCountDriverAll}</span>
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <div className="text-value">Completed Trips</div>
                {/*<div>All time Statistic</div>*/}
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{height: "70px"}}>
                <span className="pr-2 font-2xl">{tripCountDriverCompleted}</span>
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">Cancelled Trips</div>
                {/*<div>All time Statistic</div>*/}
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{height: "70px"}}>
                <span className="pr-2 font-2xl">{tripCountDriverCancelled}</span>
              </div>
            </Card>
          </Col>
        </Row>
        <Input className="shadow mb-5" type="select" required style={{width: "120px", marginTop: "50px"}} name="trip_status" value={trip_status} onChange={onChange}>
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="cancel">Cancelled</option>
          <option value="waiting">Waiting</option>
        </Input>
        {!isLoading && driverTrips?.length > 0 && (
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
                          {driverTrips?.length > 0 &&
                            driverTrips.map((trip) => (
                              <TableRow hover key={trip.trip_id}>
                                <TableCell>
                                  <Media>
                                    {/*<Media left>*/}
                                    {/*	<Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />*/}
                                    {/*</Media>*/}
                                    <Media body>
                                      <h5 className="m-0 pt-15">{trip.trip_id}</h5>
                                    </Media>
                                  </Media>
                                </TableCell>
                                <TableCell>
                                  {new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt).toLocaleTimeString()}
                                </TableCell>
                                <TableCell>{trip.ride_class}</TableCell>

                                <TableCell>
                                  <Badge color={trip.ride_status === "completed" ? "success" : trip.ride_status === "cancel" ? "danger" : trip.ride_status === "waiting" ? "warning" : "secondary"}>
                                    {trip.ride_status === "on_trip" ? "current" : trip.ride_status === "on_pickup" ? "on route" : trip?.ride_status === "cancel" ? "cancelled" : trip.ride_status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <button type="button" className="rct-link-btn text-primary" title="view details">
                                    <Link to={`/admin/trips/${trip.trip_id}`}>
                                      <i className="ti-eye" />
                                    </Link>
                                  </button>

                                  {/*<ViewBtn />*/}
                                  {/*<IconButton className="text-primary" title="View Trip Details"><i className="ti-eye"><Link to={`/admin/trips/${trip._id}`}><i className="ti-eye"/></Link></i></IconButton>*/}
                                </TableCell>
                              </TableRow>
                            ))}
                        </Fragment>
                      </TableBody>
                    </Table>
                    <div className="mb-0 mt-3 w-100">
                      <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2 w-100">
                        <Pagination activePage={currentPage} itemClass="page-item undo-folding" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={tripCountDriver} onChange={paginate} />
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
        {driverTrips?.length === 0 && !isLoading && <EmptyData />}
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDriverTrips: (pageNo, authId, spinner, trip_status) => dispatch(getDriverTrips(pageNo, authId, spinner, trip_status)),
    getDriverTripsByTripStatus: (pageNo, authId, trip_status) => dispatch(getDriverTripsByTripStatus(pageNo, authId, trip_status)),
    getTripCount: (authId, trip_status) => dispatch(getDriverTripCount(authId, trip_status)),
  };
}

const mapStateToProps = (state) => ({
  driverTrips: state.trips.driverTrips,
  tripCountDriver: state.trips.tripCountDriver,
  tripCountDriverAll: state.trips.tripCountDriverAll,
  tripCountDriverCompleted: state.trips.tripCountDriverCompleted,
  tripCountDriverCancelled: state.trips.tripCountDriverCancelled,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverTrips);

import React, {Fragment, useRef, useState} from "react";
import {Badge, Button, Card, CardBody, Col, Input, Media, Row, Table} from "reactstrap";
import {connect} from "react-redux";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import {getPassengerTripCount, getPassengerTrips, getPassengerTripsByTripStatus, getTripExport} from "Actions/tripAction";
import EmptyData from "Components/EmptyData/EmptyData";
import {getTodayDate} from "Helpers/helpers";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const PassengerTripHistory = ({
  passengerTrips,
  isLoading,
  tripCountPassenger,
  getPassengerTrips,
  passenger_id,
  getPassengerTripsByTripStatus,
  tripCountPassengerAll,
  tripCountPassengerCompleted,
  tripCountPassengerCancelled,
  getTripCount,
  getTripExport,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [trip_status, setTrip_status] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const exportRef = useRef(null);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getPassengerTrips(pageNumber, passenger_id, "", trip_status);
    window.scrollTo(0, 0);
  };

  const onChange = (e) => {
    e.preventDefault();
    setTrip_status(e.target.value);
    setCurrentPage(1);
    getPassengerTripsByTripStatus(1, passenger_id, e.target.value);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getTripExport(trip_status, passenger_id, "rider_auth_id", startDate, endDate);
  };

  const applyFilter = () => {
    getPassengerTrips(1, passenger_id, false, trip_status, startDate, endDate);
    getTripCount(passenger_id, trip_status, startDate, endDate);
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
                <span className="pr-2 font-2xl">{tripCountPassengerAll}</span>
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
                <span className="pr-2 font-2xl">{tripCountPassengerCompleted}</span>
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
                <span className="pr-2 font-2xl">{tripCountPassengerCancelled}</span>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="d-flex justify-content-between" style={{marginTop: "50px"}}>
          <div className="d-flex">
            <Input className="shadow mb-5" type="select" required style={{width: "120px"}} name="trip_status" value={trip_status} onChange={onChange}>
              <option value="">All</option>
              <option value="completed">Completed</option>
              <option value="cancel">Cancelled</option>
              <option value="waiting">Waiting</option>
              <option value="on_ride">Current</option>
            </Input>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <small className="fw-bold mr-2">From</small>
              <input type="date" id="start" name="wallet-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setStartDate(e.target.value)} />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <small className="fw-bold mr-2">To</small>
              <input type="date" id="start" name="wallet-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
              <button className="btn btn-primary text-white" onClick={applyFilter}>
                Apply Filter
              </button>
            </li>
          </div>
          <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2 text-white" color="primary">
            {" "}
            <i className="zmdi zmdi-download mr-2"></i> Export to Excel
          </Button>
        </div>
        {!isLoading && passengerTrips.length > 0 && (
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
                          <TableCell>Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <Fragment>
                          {passengerTrips.length > 0 &&
                            passengerTrips.map((trip) => (
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
                                  {new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt)?.toLocaleTimeString()}
                                </TableCell>
                                <TableCell>{trip.ride_class}</TableCell>
                                <TableCell>
                                  <Badge color={trip.ride_status === "completed" ? "success" : trip.ride_status === "cancel" ? "danger" : trip.ride_status === "waiting" ? "warning" : "secondary"}>
                                    {trip.ride_status === "on_trip" ? "current" : trip.ride_status === "on_pickup" ? "on route" : trip?.ride_status === "cancel" ? "cancelled" : trip.ride_status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <button type="button" className="rct-link-btn text-primary" title="view details">
                                    <Link to={{pathname: `/admin/trips/${trip.trip_id}`, state: {trip_status: trip.ride_status}}}>
                                      <i className="ti-eye" />
                                    </Link>
                                  </button>
                                </TableCell>
                              </TableRow>
                            ))}
                        </Fragment>
                      </TableBody>
                    </Table>
                    <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                      <Pagination activePage={currentPage} itemClass="page-item undo-folding" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={tripCountPassenger} onChange={paginate} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
        {passengerTrips.length === 0 && !isLoading && <EmptyData />}
      </div>
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPassengerTrips: (pageNo, authId, spinner, trip_status, start_date, end_date) => dispatch(getPassengerTrips(pageNo, authId, spinner, trip_status, start_date, end_date)),
    getPassengerTripsByTripStatus: (pageNo, authId, trip_status) => dispatch(getPassengerTripsByTripStatus(pageNo, authId, trip_status)),
    getTripCount: (authId, trip_status, start_date, end_date) => dispatch(getPassengerTripCount(authId, trip_status, start_date, end_date)),
    getTripExport: (status, auth_id, userType, start_date, end_date) => dispatch(getTripExport(status, auth_id, userType, start_date, end_date)),
  };
}

const mapStateToProps = (state) => ({
  passengerTrips: state.trips.passengerTrips,
  tripCountPassenger: state.trips.tripCountPassenger,
  tripCountPassengerAll: state.trips.tripCountPassengerAll,
  tripCountPassengerCompleted: state.trips.tripCountPassengerCompleted,
  tripCountPassengerCancelled: state.trips.tripCountPassengerCancelled,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(PassengerTripHistory);

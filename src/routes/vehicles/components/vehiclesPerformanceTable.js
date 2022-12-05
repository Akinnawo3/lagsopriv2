/**
 * TripsTable
 */
import React, { useState, useEffect, Fragment, useRef } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Media, Badge, Button } from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import { useHistory } from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import { calculatePostDate, getTodayDate } from "../../../helpers/helpers";
const qs = require("qs");

const VehiclesPerformanceTable = ({ trips, getTrips, isLoading, tripCount, status, header, searchTrips, getTripCount, getCancelledTrips, getCancelledTripCount, getTripExport }) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [postsPerPage] = useState(20);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const exportRef = useRef(null);
  const paginate = async (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    await setCurrentPage(pageNumber);
    status === "driver_not_found" ? await getCancelledTrips(pageNumber, true) : await getTrips(pageNumber, status);
    window.scrollTo(0, 0);
  };

  const getPreviousData = () => {
    status === "driver_not_found" ? getCancelledTrips(pageNumber, true) : getTrips(1, status);
  };

  const applyFilter = () => {
    history.push(`${history.location.pathname}?page=${1}`);
    getTrips(1, status, false, startDate, endDate);
    getTripCount(status, startDate, endDate);
  };

  const getSearchData = (searchData) => {
    searchTrips(searchData, status);
  };

  const handleCount = () => {
    status === "driver_not_found" ? getCancelledTripCount() : getTripCount(status);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getTripExport(status, "", "", startDate, endDate);
  };

  console.log(trips);
  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{ minHeight: "70vh" }}>
        {/* {status !== "driver_not_found" && (
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={"Trip Reference"} />
          </li>
        )} */}
        <div className="pt-3 pl-4">
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">From</small>
            <input type="date" id="start" name="wallet-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setStartDate(e.target.value)} />
          </li>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">To</small>
            <input type="date" id="start" name="wallet-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
          </li>
          <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
            <button className="btn btn-primary" onClick={applyFilter}>
              Apply Filter
            </button>
          </li>
        </div>

        {status !== "driver_not_found" && (
          <div className="float-right">
            {!isLoading && trips.length > 0 && (
              <Button onClick={() => handleExport()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="primary">
                {" "}
                <i className="zmdi zmdi-download mr-2"></i> Export to Excel
              </Button>
            )}
          </div>
        )}

        {!isLoading && trips.length > 0 && (
          <div>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    {status === "driver_not_found" && <TableCell>Start Address</TableCell>}
                    {/* <TableCell>{status === "driver_not_found" ? "Cancellation Id" : "Trip Id"}</TableCell> */}
                    {status !== "driver_not_found" && <TableCell>Trip Reference</TableCell>}
                    <TableCell>Date / Time</TableCell>
                    {status !== "driver_not_found" && (
                      <>
                        <TableCell>Class</TableCell>
                        <TableCell>Type</TableCell>
                        {status === "on_ride" && <TableCell>Vehicle Plate Number</TableCell>}
                        <TableCell>Status</TableCell>
                      </>
                    )}
                    {status === "driver_not_found" && (
                      <>
                        <TableCell>Driver not found</TableCell>
                        <TableCell>Driver ignored</TableCell>
                      </>
                    )}

                    {status !== "driver_not_found" && <TableCell>Action</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {trips.length > 0 &&
                      trips.map((trip) => (
                        <TableRow hover key={trip.trip_id}>
                          {/* <TableCell>
                             <Media>
                               <Media body>
                                 <h5 className="m-0 pt-15">{status === "driver_not_found" ? trip?.cancel_id : trip.trip_id}</h5>
                               </Media>
                             </Media>
                           </TableCell> */}
                          {status === "driver_not_found" && (
                            <TableCell>
                              <Media>
                                <Media body>
                                  <h5 className="m-0 pt-15">{trip?.start_address}</h5>
                                </Media>
                              </Media>
                            </TableCell>
                          )}

                          {status !== "driver_not_found" && (
                            <TableCell>
                              <Media>
                                <Media body>
                                  <h5 className="m-0 pt-15">{trip.trip_ref}</h5>
                                </Media>
                              </Media>
                            </TableCell>
                          )}
                          <TableCell>
                            {/* {new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt).toLocaleTimeString()} */}
                            {status === "driver_not_found" ? calculatePostDate(trip?.updatedAt) : calculatePostDate(trip?.createdAt)}
                          </TableCell>
                          {status !== "driver_not_found" && (
                            <>
                              <TableCell>{trip.ride_class}</TableCell>
                              <TableCell>{trip.ride_type}</TableCell>
                              {status === "on_ride" && <TableCell>{trip?.driver_data?.car_number_plate}</TableCell>}

                              <TableCell>
                                <Badge color={trip.ride_status === "completed" ? "success" : trip.ride_status === "cancel" ? "danger" : trip.ride_status === "waiting" ? "warning" : "secondary"}>
                                  {trip.ride_status === "on_trip" ? "current" : trip.ride_status === "on_pickup" ? "enroute" : trip?.ride_status === "cancel" ? "cancelled" : trip.ride_status}
                                </Badge>
                              </TableCell>
                            </>
                          )}
                          {/*  */}
                          {status === "driver_not_found" && (
                            <>
                              <TableCell>{trip?.total_request?.driver_not_found}</TableCell>
                              <TableCell>{trip?.total_request?.driver_ignore}</TableCell>
                            </>
                          )}
                          {status !== "driver_not_found" && (
                            <TableCell>
                              <button type="button" className="rct-link-btn text-primary" title="view details">
                                <Link to={{ pathname: `/admin/trips/${trip.trip_id}`, state: { trip_status: status } }}>
                                  <i className="ti-eye" />
                                </Link>
                              </button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={postsPerPage} totalItemsCount={tripCount} onChange={paginate} />
            </div>
          </div>
        )}
        {trips.length === 0 && !isLoading && <EmptyData />}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, assign, spinner) => dispatch(getVehicles(page_no, assign, spinner)),
    getVehiclesCount: (assign) => dispatch(getVehiclesCount(assign)),
    getOems: (page_no, spinner) => dispatch(getOems(page_no, spinner)),
    getOemCount: () => dispatch(getOemCount()),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehicles,
  vehiclesCount: state.vehicle.vehiclesCount,
  drivers: state.driver.drivers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesPerformanceTable);

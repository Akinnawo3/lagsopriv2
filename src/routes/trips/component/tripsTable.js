/**
 * TripsTable
 */
import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Media, Badge, Button} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {getTripCount, getTripExport, getTrips, searchTrip} from "Actions/tripAction";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {getCancelledTripCount, getCancelledTrips} from "../../../actions/tripAction";
import {useHistory} from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
const qs = require("qs");

const TripsTable = ({trips, getTrips, isLoading, tripCount, status, header, searchTrips, getTripCount, getCancelledTrips, getCancelledTripCount, getTripExport}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [postsPerPage] = useState(20);
  const exportRef = useRef(null);
  const paginate = async (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    await setCurrentPage(pageNumber);
    status === "cancel" ? await getCancelledTrips(pageNumber, true) : await getTrips(pageNumber, status);
    window.scrollTo(0, 0);
  };

  const getPreviousData = () => {
    status === "cancel" ? getCancelledTrips(pageNumber, true) : getTrips(1, status);
  };

  const getSearchData = (searchData) => {
    searchTrips(searchData, status);
  };

  const handleCount = () => {
    status === "cancel" ? getCancelledTripCount() : getTripCount(status);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getTripExport(status);
  };

  console.log(trips);
  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
        {status !== "cancel" && (
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={"Trip Reference"} />
          </li>
        )}
        <div className="float-right">
          {!isLoading && trips.length > 0 && (
            <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
              {" "}
              <i className="zmdi zmdi-download mr-2"></i> Export to Excel
            </Button>
          )}
        </div>
        {!isLoading && trips.length > 0 && (
          <div>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    {status === "cancel" && <TableCell>Cancellation Id</TableCell>}
                    {/* <TableCell>{status === "cancel" ? "Cancellation Id" : "Trip Id"}</TableCell> */}
                    {status !== "cancel" && <TableCell>Trip Reference</TableCell>}
                    <TableCell>Date / Time</TableCell>
                    <TableCell>Class</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
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
                                <h5 className="m-0 pt-15">{status === "cancel" ? trip?.cancel_id : trip.trip_id}</h5>
                              </Media>
                            </Media>
                          </TableCell> */}
                          {status === "cancel" && (
                            <TableCell>
                              <Media>
                                <Media body>
                                  <h5 className="m-0 pt-15">{trip?.cancel_id}</h5>
                                </Media>
                              </Media>
                            </TableCell>
                          )}
                          {status !== "cancel" && (
                            <TableCell>
                              <Media>
                                <Media body>
                                  <h5 className="m-0 pt-15">{trip.trip_ref}</h5>
                                </Media>
                              </Media>
                            </TableCell>
                          )}
                          <TableCell>
                            {new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt).toLocaleTimeString()}
                          </TableCell>
                          <TableCell>{trip.ride_class}</TableCell>
                          <TableCell>{trip.ride_type}</TableCell>
                          <TableCell>
                            <Badge color={trip.ride_status === "completed" ? "success" : trip.ride_status === "cancel" ? "danger" : trip.ride_status === "waiting" ? "warning" : "secondary"}>
                              {trip.ride_status === "on_trip" ? "current" : trip.ride_status === "on_pickup" ? "enroute" : trip?.ride_status === "cancel" ? "cancelled" : trip.ride_status}
                            </Badge>
                          </TableCell>
                          {status !== "cancel" ? (
                            <TableCell>
                              <button type="button" className="rct-link-btn text-primary" title="view details">
                                <Link to={`/admin/trips/${trip.trip_id}`}>
                                  <i className="ti-eye" />
                                </Link>
                              </button>
                            </TableCell>
                          ) : (
                            <TableCell>
                              <button type="button" className="rct-link-btn text-primary" title="view details">
                                <Link
                                  to={{
                                    pathname: `/admin/trips/${trip.cancel_id}`,
                                    state: {trip_cancelled: trip},
                                  }}
                                >
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
    getTrips: (pageNo, status, spinner) => dispatch(getTrips(pageNo, status, spinner)),
    getTripCount: (status) => dispatch(getTripCount(status)),
    getTripExport: (status) => dispatch(getTripExport(status)),
    searchTrips: (trip_id, status) => dispatch(searchTrip(trip_id, status)),
    getCancelledTrips: (pageNo, spinner) => dispatch(getCancelledTrips(pageNo, spinner)),
    getCancelledTripCount: () => dispatch(getCancelledTripCount()),
  };
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
  tripCount: state.trips.tripCount,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripsTable);

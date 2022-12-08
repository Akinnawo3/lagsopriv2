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
import { getVehiclesPerformance, getVehiclesPerformanceCount } from "../../../actions/vehicleAction";
const qs = require("qs");
import { getDriversPerformance, getDriversPerformanceCount } from "../../../actions/tripAction";

const PerformanceTable = ({
  getVehiclesPerformance,
  getVehiclesPerformanceCount,
  vehiclesPerformance,
  vehiclesPerformanceCount,
  loading,
  loadingStatus,
  getDriversPerformance,
  getDriversPerformanceCount,
  driversPerformance,
  driversPerformanceCount,
}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [postsPerPage] = useState(20);
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());
  const [driverId, setDriverId] = useState("");
  const exportRef = useRef(null);

  const paginate = async (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getDriversPerformance(driverId, pageNumber, false, startDate, endDate);
    window.scrollTo(0, 0);
  };

  // const getPreviousData = () => {
  //   status === "driver_not_found" ? getCancelledTrips(pageNumber, true) : getTrips(1, status);
  // };

  const applyFilter = () => {
    history.push(`${history.location.pathname}?page=${1}`);
    getDriversPerformance(driverId, 1, false, startDate, endDate);
    getDriversPerformanceCount(driverId, 1, false, startDate, endDate);
  };

  useEffect(() => {
    getDriversPerformance(driverId, 1, false, startDate, endDate);
    getDriversPerformanceCount(driverId, 1, false, startDate, endDate);
  }, []);

  // const getSearchData = (searchData) => {
  //   searchTrips(searchData, status);
  // };

  // const handleExport = () => {
  //   exportRef.current.open();
  // };

  // const confirmExport = () => {
  //   exportRef.current.close();
  //   getTripExport(status, "", "", startDate, endDate);
  // };

  return (
    <div>
      <RctCollapsibleCard heading={"header"} fullBlock style={{ minHeight: "70vh" }}>
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

          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">Driver Id</small>
            <input type="text" id="vehicleId" name="vehicle id" value={driverId} onChange={(e) => setDriverId(e.target.value)} />
          </li>
          <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
            <button className="btn btn-primary" onClick={applyFilter}>
              Apply Filter
            </button>
          </li>
        </div>

        {/* {status !== "driver_not_found" && (
           <div className="float-right">
             {!isLoading && trips.length > 0 && (
               <Button onClick={() => handleExport()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="primary">
                 {" "}
                 <i className="zmdi zmdi-download mr-2"></i> Export to Excel
               </Button>
             )}
           </div>
         )} */}

        {!loading && driversPerformance?.length > 0 && (
          <div>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Number of Trips</TableCell>
                    <TableCell>Value (₦)</TableCell>
                    <TableCell>Performance (%)</TableCell>
                    {/* <TableCell>Driver Id</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {driversPerformance?.length > 0 &&
                      driversPerformance?.map((item) => (
                        <TableRow hover key={item?.trip_id}>
                          <TableCell>{item?.first_name}</TableCell>
                          <TableCell>{item?.last_name}</TableCell>
                          <TableCell>{item?.trips}</TableCell>
                          <TableCell>{item?.total.toLocaleString()}</TableCell>
                          <TableCell>{parseFloat(item?.compliance).toFixed(2)}</TableCell>
                          {/* <TableCell>{item?._id}</TableCell> */}
                        </TableRow>
                      ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={postsPerPage} totalItemsCount={driversPerformanceCount} onChange={paginate} />
            </div>
          </div>
        )}

        {driversPerformance?.length === 0 && !loading && (
          <div className="mt-3">
            <EmptyData />
          </div>
        )}
      </RctCollapsibleCard>
      {/* <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} /> */}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDriversPerformance: (driver_id, page, spinner, start_date, end_date) => dispatch(getDriversPerformance(driver_id, page, spinner, start_date, end_date)),
    getDriversPerformanceCount: (driver_id, page, spinner, start_date, end_date) => dispatch(getDriversPerformanceCount(driver_id, page, spinner, start_date, end_date)),
    // deleteUser: (auth_id, users) => dispatch(deleteUser(auth_id, users)),
  };
}

const mapStateToProps = (state) => ({
  driversPerformance: state.trips.driversPerformance,
  driversPerformanceCount: state.trips.driversPerformanceCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(PerformanceTable);

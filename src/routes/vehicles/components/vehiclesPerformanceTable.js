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
import { getVehiclePerformanceExport, getVehiclesPerformance, getVehiclesPerformanceCount } from "../../../actions/vehicleAction";
import moment from "moment";
const qs = require("qs");

const VehiclesPerformanceTable = ({ getVehiclesPerformance, getVehiclesPerformanceCount, vehiclesPerformance, vehiclesPerformanceCount, loading, loadingStatus, getVehiclePerformanceExport }) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [postsPerPage] = useState(100);
  const [startDate, setStartDate] = useState(getTodayDate());
  const [endDate, setEndDate] = useState(getTodayDate());
  const [vehicleId, setVehicleId] = useState("");
  const [order, setOrder] = useState("");

  const exportRef = useRef(null);

  useEffect(() => {
    getVehiclesPerformance(currentPage, true, startDate, endDate, vehicleId, order);
    getVehiclesPerformanceCount(startDate, endDate, vehicleId, order);
  }, []);

  const paginate = async (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getVehiclesPerformance(pageNumber, false, startDate, endDate, vehicleId, order);
    getVehiclesPerformanceCount(startDate, endDate, vehicleId, order);
    window.scrollTo(0, 0);
  };

  const confirmExport = () => {
    exportRef.current.close();
    getVehiclePerformanceExport(startDate, endDate, order);
  };

  // const getPreviousData = () => {
  //   status === "driver_not_found" ? getCancelledTrips(pageNumber, true) : getTrips(1, status);
  // };

  const applyFilter = () => {
    history.push(`${history.location.pathname}?page=${1}`);
    getVehiclesPerformance(currentPage, false, startDate, endDate, vehicleId, order);
    getVehiclesPerformanceCount(startDate, endDate, vehicleId, order);
  };

  var start = moment(endDate);
  var end = moment(startDate);
  //Difference in number of days
  moment.duration(end.diff(start)).asDays();
  //Difference in number of weeks
  const daysGap = moment.duration(start.diff(end)).asDays() + 1;

  console.log(vehiclesPerformanceCount);

  const handleExport = () => {
    exportRef.current.open();
  };
  return (
    <div>
      <RctCollapsibleCard heading={"Vehicles Performance"} fullBlock style={{ minHeight: "70vh" }}>
        {/* {status !== "driver_not_found" && (
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={"Trip Reference"} />
          </li>
        )} */}
        <div className="ml-3">
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">From</small>
            <input type="date" id="start" name="wallet-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setStartDate(e.target.value)} />
          </li>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">To</small>
            <input type="date" id="start" name="wallet-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
          </li>

          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">Vehicle Plate No.</small>
            <input type="text" id="vehicleId" name="vehicle id" placeholder="Plate No." value={vehicleId} onChange={(e) => setVehicleId(e.target.value)} />
          </li>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <small className="fw-bold mr-2">Order</small>
            <select type="select" id="vehicleId" name="vehicle id" className="p-1" placeholder="Plate No." value={order} onChange={(e) => setOrder(e.target.value)} style={{ width: 120 }}>
              <option hidden>--order--</option>
              <option value="1">Ascending</option>
              <option value="-1">Descending</option>
            </select>
          </li>
          <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
            <button className="btn btn-primary" onClick={applyFilter}>
              Apply Filter
            </button>
          </li>
        </div>

        <div className="float-right">
          {!loading && vehiclesPerformance.length > 0 && (
            <Button onClick={() => handleExport()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="primary">
              {" "}
              <i className="zmdi zmdi-download mr-2"></i> Export to Excel
            </Button>
          )}
        </div>

        {!loading && vehiclesPerformance.length > 0 && (
          <div>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>S/N</TableCell>
                    <TableCell>Vehicle Plate No.</TableCell>
                    <TableCell>Driver First Name</TableCell>
                    <TableCell>Driver Last Name</TableCell>
                    <TableCell>Gross Value (₦)</TableCell>
                    <TableCell>Position Balance (₦)</TableCell>
                    <TableCell>Gross Earning (%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {vehiclesPerformance.length > 0 &&
                      vehiclesPerformance.map((item, index) => (
                        <TableRow hover key={item.vehicle_id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item?.car_number_plate}</TableCell>
                          <TableCell>{item?.first_name}</TableCell>
                          <TableCell>{item?.last_name}</TableCell>
                          <TableCell>{`₦${item?.gross_balance.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.position_balance.toLocaleString()}`}</TableCell>
                          <TableCell>{parseFloat(((item?.gross_balance / (32000 * daysGap)) * 100).toString()).toFixed(2)}</TableCell>
                          {/* <TableCell>{(Math.round((item?.gross_balance / (32000 * daysGap)) * 100 + Number.EPSILON) * 100) / 100}</TableCell> */}
                        </TableRow>
                      ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={postsPerPage} totalItemsCount={vehiclesPerformanceCount} onChange={paginate} />
            </div>
          </div>
        )}
        {vehiclesPerformance.length === 0 && !loading && <EmptyData />}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehiclesPerformance: (page_no, spinner, start_date, end_date, vehicle_id, order) => dispatch(getVehiclesPerformance(page_no, spinner, start_date, end_date, vehicle_id, order)),
    getVehiclesPerformanceCount: (start_date, end_date, vehicle_id, order) => dispatch(getVehiclesPerformanceCount(start_date, end_date, vehicle_id, order)),
    getVehiclePerformanceExport: (start_date, end_date, order) => dispatch(getVehiclePerformanceExport(start_date, end_date, order)),
  };
}

const mapStateToProps = (state) => ({
  vehiclesPerformance: state.vehicle.vehiclesPerformance,
  vehiclesPerformanceCount: state.vehicle.vehiclesPerformanceCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehiclesPerformanceTable);

import React, {useState, useEffect, Fragment, useRef} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Badge, Button} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {getDrivers, getDriversCount, searchDrivers} from "Actions/driverAction";
import {CSVLink} from "react-csv";
import Pagination from "react-js-pagination";
import {calculatePostDate, getStatus, getStatusColor, getTodayDate} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {useHistory} from "react-router-dom";
import {getUserExport} from "Actions/userAction";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
const qs = require("qs");

const DriverTable = ({drivers, isLoading, driversCount, getDrivers, status, searchDrivers, header, getDriversCount, getUserExport}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [appStatus, setAppStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [driverCategory, setDriverCategory] = useState("");
  const [partnership, setPartnership] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const exportRef = useRef(null);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getDrivers(status, pageNumber, false, appStatus, paymentStatus, driverCategory, startDate, endDate);
    // getDrivers(status, pageNumber, 1, appStatus);
    window.scrollTo(0, 0);
  };
  const getPreviousData = () => {
    getDrivers(status, 1);
  };
  const getSearchData = (searchData) => {
    searchDrivers(searchData, status);
  };
  const handleCount = () => {
    getDriversCount(status);
  };
  const handleChange = (e) => {
    setCurrentPage(1);
    setAppStatus(e.target.value);
  };
  const handlePaymentChange = (e) => {
    setCurrentPage(1);
    setPaymentStatus(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCurrentPage(1);
    setDriverCategory(e.target.value);
  };
  const handlePartnerhipChange = (e) => {
    setCurrentPage(1);
    setPartnership(e.target.value);
  };

  const driverCategoryOptions = [
    {value: "", label: "- - Filter by Driver Category - -"},
    {value: "commercial ", label: "Commercial"},
    {value: "social", label: "Social"},
  ];

  const paymentFilterOptions = [
    {value: "", label: "- - Filter by One-off Payment Status - -"},
    {value: "1", label: "Paid"},
    {value: "0", label: "Not Paid"},
  ];
  const appStatusOptions = [
    {value: "", label: "- - Filter by App Status - -"},
    {value: 1, label: "Online"},
    {value: 0, label: "Offline"},
  ];

  const partnershipStatus = [
    {value: "", label: "- - Filter by Partnership Status - -"},
    {value: 0, label: "Not Interested"},
    {value: 1, label: "Interested"},
    {value: 2, label: "In partnership"},
  ];

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getUserExport("driver", driverCategory, status, startDate, endDate);
  };

  const handleFilter = () => {
    getDrivers(status, 1, false, appStatus, paymentStatus, driverCategory, startDate, endDate, partnership);
    getDriversCount(status, startDate, endDate, appStatus, paymentStatus, driverCategory, partnership);
  };

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} />
        </li>
        {/* <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <select id="filter-dropdown" name="fiter-dropdown" onChange={handleCategoryChange} className="p-1 px-4">
            {driverCategoryOptions.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </li> */}
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <select id="filter-dropdown" name="fiter-dropdown" onChange={handlePartnerhipChange} className="p-1 px-4">
            {partnershipStatus.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </li>
        {status === 4 && (
          <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
            <select id="filter-dropdown" name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
              {appStatusOptions.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </li>
        )}
        {status === 2 && (
          <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
            <select id="filter-dropdown" name="fiter-dropdown" onChange={handlePaymentChange} className="p-1 px-4">
              {paymentFilterOptions.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </li>
        )}
        {/*<div>*/}
        <li className="list-inline-item search-icon d-inline-block mb-2">
          <small className="fw-bold mr-2">From</small>
          <input
            type="date"
            id="start"
            name="trip-start"
            defaultValue={startDate}
            min="2018-01-01"
            max={getTodayDate()}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">To</small>
          <input
            type="date"
            id="start"
            name="trip-start"
            defaultValue={endDate}
            min="2018-01-01"
            max={getTodayDate()}
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </li>
        <Button onClick={() => handleFilter()} style={{height: "30px"}} className="align-items-center justify-content-center" color="success">
          Apply filter
        </Button>
        {/*</div>*/}
        <div className="float-right">
          {!isLoading && drivers.length > 0 && (
            <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
              {" "}
              <i className="zmdi zmdi-download mr-2"></i> Export to Excel
            </Button>
          )}
        </div>
        {!isLoading && drivers.length > 0 && (
          <>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Registered</TableCell>

                    {status != 4 && <TableCell>Status</TableCell>}
                    {status === 3 && <TableCell>Vehicle Assigned</TableCell>}
                    {status === 2 && <TableCell>One-off Payment Status</TableCell>}
                    <TableCell> Driver Category</TableCell>
                    <TableCell> Partnership Status</TableCell>
                    <TableCell>App Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {drivers.map((driver, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{driver.first_name}</TableCell>
                        <TableCell>{driver.last_name}</TableCell>
                        <TableCell>{calculatePostDate(driver.createdAt)}</TableCell>
                        {status != 4 && (
                          <TableCell>
                            <Badge color={getStatusColor(driver.driver_data?.driver_status)}>{getStatus(driver.driver_data?.driver_status)}</Badge>
                          </TableCell>
                        )}
                        {status === 3 && <TableCell>{driver.vehicle_id ? "Yes" : "No"}</TableCell>}

                        {status === 2 && (
                          <TableCell>
                            <Badge color={driver?.driver_data?.asset_payment?.status ? "success" : "danger"}>{driver?.driver_data?.asset_payment?.status ? "Paid" : "Not Paid"} </Badge>
                          </TableCell>
                        )}
                        <TableCell>
                          <span className={`fw-bold ${driver.driver_data.driver_category === "commercial" ? "text-primary" : "text-danger"}`}>{driver.driver_data.driver_category}</span>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`fw-bold ${
                              driver.driver_data.partnership_status === 0
                                ? "text-success"
                                : driver.driver_data.partnership_status === 1
                                ? "text-danger"
                                : driver.driver_data.partnership_status === 2
                                ? "text-info"
                                : "text-secondary"
                            }`}
                          >
                            {driver.driver_data.partnership_status === 0
                              ? "Not Interested"
                              : driver.driver_data.partnership_status === 1
                              ? "Interested"
                              : driver.driver_data.partnership_status === 2
                              ? "In partnership"
                              : "N/A"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge color={driver.driver_data.online ? "success" : "danger"}>{driver.driver_data.online ? "Online" : "Offline"}</Badge>
                        </TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            <Link to={`/admin/drivers/${driver.auth_id}`}>
                              <i className="ti-eye" />
                            </Link>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={driversCount} onChange={paginate} />
            </div>
          </>
        )}
        {drivers.length === 0 && !isLoading && <EmptyData />}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDrivers: (status, page_no, spinner, driver_online_status, asset_payment, driver_category, start_date, end_date, partnershipStatus) =>
      dispatch(getDrivers(status, page_no, spinner, driver_online_status, asset_payment, driver_category, start_date, end_date, partnershipStatus)),
    searchDrivers: (searchData, status) => dispatch(searchDrivers(searchData, status)),
    getDriversCount: (status, start_date, end_date, driver_online_status, asset_payment, driver_category, partnershipStatus) =>
      dispatch(getDriversCount(status, start_date, end_date, driver_online_status, asset_payment, driver_category, partnershipStatus)),
    getUserExport: (user_type, driver_category, driver_account_status, start_date, end_date) => dispatch(getUserExport(user_type, driver_category, driver_account_status, start_date, end_date)),
  };
}

const mapStateToProps = (state) => ({
  drivers: state.driver.drivers,
  driversCount: state.driver.driversCount,
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverTable);

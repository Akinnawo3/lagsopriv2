import React, {useState, useEffect, Fragment} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Badge} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {getDrivers, getDriversCount, searchDrivers} from "Actions/driverAction";
import {CSVLink} from "react-csv";
import Pagination from "react-js-pagination";
import {calculatePostDate, getStatus, getStatusColor} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {useHistory} from "react-router-dom";
const qs = require("qs");

const DriverTable = ({drivers, isLoading, driversCount, getDrivers, status, searchDrivers, header, getDriversCount}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [excelExport, setExcelExport] = useState([]);
  const [appStatus, setAppStatus] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [driverCategory, setDriverCategory] = useState("");

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getDrivers(status, pageNumber, 1, appStatus);
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
    getDrivers(status, currentPage, 1, e.target.value, paymentStatus);
  };
  const handlePaymentChange = (e) => {
    setCurrentPage(1);
    setPaymentStatus(e.target.value);
    getDrivers(status, currentPage, 1, appStatus, e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCurrentPage(1);
    setDriverCategory(e.target.value);
    getDrivers(status, currentPage, 1, appStatus, paymentStatus, e.target.value);
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
  useEffect(() => {
    if (drivers.length > 0) {
      let result = drivers.map((driver) => {
        return {
          firstName: driver["first_name"],
          lastName: driver["last_name"],
          phoneNumber: driver["phone_number"],
          email: driver["email"],
          bloodGroup: driver["blood_group"],
          dateOfBirth: driver["dob"],
          education: driver["education"],
          stateOfOrigin: driver["state"],
          homeAddress: driver["home_address"],
          drverCategory: driver["driver_data"]["driver_category"],
          lasdriID: driver["driver_data"]["lasdri_id"]["value"],
          lassraID: driver["driver_data"]["lassra_id"]["value"],
          drivingLicence: driver["driver_data"]["license_id"]["value"],
          nin: driver["driver_data"]["nin_id"]["value"],
        };
      });
      setExcelExport(result);
    }
  }, [drivers]);

  console.log(currentPage);

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-5 mb-2">
          <select id="filter-dropdown" name="fiter-dropdown" onChange={handleCategoryChange} className="p-1 px-4">
            {driverCategoryOptions.map((item) => (
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
        <div className="float-right">
          {!isLoading && drivers.length > 0 && (
            <CSVLink data={excelExport} filename={"drivers.csv"} className="btn-sm btn-outline-default mr-10 bg-primary text-white" target="_blank">
              <i className="zmdi zmdi-download mr-2"></i>
              Export to Excel
            </CSVLink>
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
                    <TableCell>Date / Time of Registration</TableCell>
                    {status != 4 && <TableCell>Status</TableCell>}
                    {status === 3 && <TableCell>Vehicle Assigned</TableCell>}
                    {status === 2 && <TableCell>One-off Payment Status</TableCell>}
                    <TableCell> Driver Category</TableCell>
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
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDrivers: (status, page_no, spinner, driver_online_status, asset_payment, driver_category) =>
      dispatch(getDrivers(status, page_no, spinner, driver_online_status, asset_payment, driver_category)),
    searchDrivers: (searchData, status) => dispatch(searchDrivers(searchData, status)),
    getDriversCount: (status) => dispatch(getDriversCount(status)),
  };
}

const mapStateToProps = (state) => ({
  drivers: state.driver.drivers,
  driversCount: state.driver.driversCount,
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverTable);

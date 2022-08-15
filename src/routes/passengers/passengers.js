import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {getPassengerCount, getPassengers, searchPassengers} from "Actions/passengerActions";
import {CSVLink} from "react-csv";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
import {calculatePostDate, getTodayDate} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {getUserExport} from "Actions/userAction";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {Button} from "reactstrap";
const qs = require("qs");

const Passengers = ({history, match, getPassengers, passengers, loading, passengerCount, getPassengerCount, searchPassenger, getUserExport}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const exportRef = useRef(null);

  useEffect(() => {
    if (pageFromQuery === undefined || passengers.length < 1) {
      getPassengers(currentPage, true);
      getPassengerCount();
    }
  }, []);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPassengers(pageNumber);
    window.scrollTo(0, 0);
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getUserExport("rider", "", "", startDate, endDate);
  };

  const handleFilter = () => {
    getPassengers(1, false, startDate, endDate);
    getPassengerCount(startDate, endDate);
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Riders"} match={match} />
      <RctCollapsibleCard heading="All Passengers" fullBlock item={passengers} currentPage={currentPage} totalCount={passengerCount}>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <SearchComponent setCurrentPage={setCurrentPage} getSearchedData={searchPassenger} getPreviousData={getPassengers} getCount={getPassengerCount} />
          <IconButton mini="true" className="search-icon-btn">
            <i className="zmdi zmdi-search"></i>
          </IconButton>
          <MobileSearchForm
          // isOpen={isMobileSearchFormVisible}
          // onClose={() => this.setState({ isMobileSearchFormVisible: false })}
          />
        </li>
        {/*<div>*/}
        <li className="list-inline-item search-icon d-inline-block mb-2 ml-3">
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
          {!loading && passengers.length > 0 && (
            <Button onClick={() => handleExport()} style={{height: "30px"}} className="align-items-center justify-content-center mr-2" color="primary">
              {" "}
              <i className="zmdi zmdi-download mr-2"></i> Export to Excel
            </Button>
          )}
        </div>
        {!loading && passengers.length > 0 && (
          <>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Phone No</TableCell>
                    <TableCell>Date / Time of Registration</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {passengers.map((passenger, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{passenger.first_name}</TableCell>
                        <TableCell>{passenger.last_name}</TableCell>
                        <TableCell>{passenger.phone_number}</TableCell>
                        <TableCell>{calculatePostDate(passenger.createdAt)}</TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            <Link to={`/admin/passengers/${passenger.auth_id}`}>
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
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={passengerCount} onChange={paginate} />
            </div>
          </>
        )}
        {!loading && passengers.length < 1 && <EmptyData />}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPassengers: (page_no, spinner, start_date, end_date) => dispatch(getPassengers(page_no, spinner, start_date, end_date)),
    getPassengerCount: (start_date, end_date) => dispatch(getPassengerCount(start_date, end_date)),
    searchPassenger: (searchData) => dispatch(searchPassengers(searchData)),
    getUserExport: (user_type, driver_category, driver_account_status, start_date, end_date) => dispatch(getUserExport(user_type, driver_category, driver_account_status, start_date, end_date)),
  };
}

const mapStateToProps = (state) => ({
  passengers: state.passenger.passengers,
  passengerCount: state.passenger.passengerCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Passengers);

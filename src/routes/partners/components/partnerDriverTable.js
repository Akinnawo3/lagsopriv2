import React, {useState, Fragment, useRef} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Badge, Button} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {searchDrivers} from "Actions/driverAction";
import Pagination from "react-js-pagination";
import {calculatePostDate, getStatus, getStatusColor, getTodayDate} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {useHistory} from "react-router-dom";
import {getUserExport} from "Actions/userAction";
import {getPartnerDriverCount, getPartnerDrivers} from "Actions/partnersAction";
const qs = require("qs");

const PartnerDriverTable = ({drivers, isLoading, driversCount, getPartnerDrivers, partner_id, searchDrivers, header, getPartnerDriverCount, getUserExport}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const exportRef = useRef(null);


  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPartnerDrivers(partner_id, pageNumber, false);
    window.scrollTo(0, 0);
  };
  // const getPreviousData = () => {
  //   getPartnerDrivers(partner_id, 1);
  // };
  // const getSearchData = (searchData) => {
  //   searchDrivers(searchData, '');
  // };
  // const handleCount = () => {
  //   getPartnerDriverCount(partner_id);
  // };
  // const handleExport = () => {
  //   exportRef.current.open();
  // };

  // const confirmExport = () => {
  //   exportRef.current.close();
  //   getUserExport('driver', driverCategory, '', startDate, endDate)
  // }

  const handleFilter = () => {
    getPartnerDrivers(partner_id, 1, false, startDate, endDate);
    getPartnerDriverCount(partner_id, startDate, endDate)
  }



  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
        {/*<li className="list-inline-item search-icon d-inline-block ml-2 mb-2">*/}
        {/*  <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} />*/}
        {/*</li>*/}
        {/*<div>*/}
        {/*<li className="list-inline-item search-icon d-inline-block mb-2">*/}
        {/*  <small className="fw-bold ml-4">From</small>*/}
        {/*  <input type="date" id="start" name="trip-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {*/}
        {/*    setStartDate(e.target.value)*/}
        {/*  }} />*/}
        {/*</li>*/}
        {/*<li className="list-inline-item search-icon d-inline-block ml-2 mb-2">*/}
        {/*  <small className="fw-bold mr-2">To</small>*/}
        {/*  <input type="date" id="start" name="trip-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => {*/}
        {/*    setEndDate(e.target.value)*/}
        {/*  }} />*/}
        {/*</li>*/}
        {/*<Button onClick={() => handleFilter()} style={{height: '30px'}} className='align-items-center justify-content-center' color='success'>Apply filter</Button>*/}
        {/*</div>*/}
        {/*<div className="float-right">*/}
        {/*  {!isLoading && drivers.length > 0 && (*/}
        {/*      <Button onClick={() => handleExport()} style={{height: '30px'}} className='align-items-center justify-content-center mr-2' color='primary'> <i className="zmdi zmdi-download mr-2"></i>  Export to Excel</Button>*/}
        {/*  )}*/}
        {/*</div>*/}
        {!isLoading && drivers?.length > 0 && (
          <>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Phone No</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {drivers.map((driver, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{driver?.first_name}</TableCell>
                        <TableCell>{driver?.last_name}</TableCell>
                        <TableCell>{driver?.phone_number}</TableCell>
                        <TableCell>{driver?.email}</TableCell>
                        <TableCell>
                          <Badge color={getStatusColor(driver?.driver_status)}>{getStatus(driver?.driver_status)}</Badge>
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
        {drivers?.length === 0 && !isLoading && <EmptyData />}
      </RctCollapsibleCard>
      {/*<DeleteConfirmationDialog ref={exportRef} title={'Are you sure you want to Export File?'} message={'This will send the excel file to your email'} onConfirm={confirmExport} />*/}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPartnerDrivers: (partner_id, page_no, spinner, start_date, end_date ) => dispatch(getPartnerDrivers(partner_id, page_no, spinner, start_date, end_date )),
    getPartnerDriverCount: (partner_id, start_date, end_date ) => dispatch(getPartnerDriverCount(partner_id, start_date, end_date )),
    searchDrivers: (searchData, status) => dispatch(searchDrivers(searchData, status)),
    getUserExport: (user_type, driver_category, driver_account_status, start_date, end_date) => dispatch(getUserExport(user_type, driver_category, driver_account_status, start_date, end_date)),

  };
}

const mapStateToProps = (state) => ({
  drivers: state.partners.partnerDrivers,
  driversCount: state.partners.partnerDriversCount,
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDriverTable);

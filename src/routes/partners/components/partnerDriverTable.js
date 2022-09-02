import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Badge} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {searchDrivers} from "Actions/driverAction";
import Pagination from "react-js-pagination";
import {getStatus, getStatusColor} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link, useHistory} from "react-router-dom";
import {getUserExport} from "Actions/userAction";
import {getPartnerDriverCount, getPartnerDrivers} from "Actions/partnersAction";

const qs = require("qs");

const PartnerDriverTable = ({drivers, isLoading, driversCount, getPartnerDrivers, partner_id, header, getPartnerDriverCount}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });


  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPartnerDrivers(partner_id, pageNumber, false);
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    getPartnerDrivers(partner_id, currentPage)
    getPartnerDriverCount(partner_id)
  },[partner_id])



  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
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
